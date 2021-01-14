# redaxo-headless-vue
This a example for a possible use of the [redaxo_headless](https://github.com/jelleschutter/redaxo_headless) REDAXO AddOn.

## Examples
The navigation endpoint of the addon is used in "[src/App.vue](https://github.com/jelleschutter/redaxo_headless_vue_frontend/blob/improve-readme/src/App.vue)" and the page content endpoint can be found in action inside "[src/views/Page.vue](https://github.com/jelleschutter/redaxo_headless_vue_frontend/blob/improve-readme/src/views/Page.vue)".

## SEO
This example application is not Search Engine Optimized (due to a lack of knowlegde on my part). Feel free to add a PR!

## Setup
1. Please make sure that the [redaxo_headless](https://github.com/jelleschutter/redaxo_headless) AddOn is installed on your REDAXO Instance.
2. Set the url of your REDAXO instance inside the ".env" file or set it as the VUE_APP_API_URL enviroment variable like for example [in the action of this repo](https://github.com/jelleschutter/redaxo_headless_vue_frontend/actions/runs/485727568/workflow#L19).
3. Follow steps under "[NPM Development](#npm-development)".

## NPM Development
### Install dependencies
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
