# BinderHub Static Login Page with React

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\
The build is minified and packed via `webpack`. 

## Using with BinderHub

BinderHub expects to use an HTML template with some variables that are
interopolated at runtime. When building this app, you will need to use the
template found at `templates/login.html` instead of the generated `index.html`
which is used for local development only. These are made available to React via
the Window object:
```html
    <script>
        window.authLoginUrl = "{{ authenticator_login_url }}";
    </script>
```

### Images
You will need to link images from a third party site such as a CDN, or
otherwise inject them into your container at runtime. Note that the BinderHub
container runs as a non-privileged user that does NOT have write access to the
Jupyter directory.

### Kustomize

With Kustomize, you can use a configMapGenerator like so:
```yaml
configMapGenerator:
  - name: hub-config-d
    behavior: merge
    files:
      - files/hub/login.html
      - files/hub/bundle.js
```

### HelmResource patching
Once built, you can inject the webpacked bundle and new application bootstrap
page into your BinderHub deployment:
```yaml
  spec:
    # ...
    values:
      extraVolumes:
      - name: hub-config-d
        configMap:
          name: hub-config-d
      # ...
      jupyterhub:
        hub:
        - name: hub-config-d
          # Custom login page
          mountPath: /usr/local/share/jupyterhub/templates/login.html
          subPath: login.html
        - name: hub-config-d
          mountPath: /usr/local/share/jupyterhub/static/js/bundle.js
          subPath: bundle.js
```

## Misc
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
