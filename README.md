# Cloud TP

## Introduction
This is a aws project with a front in vue deployed to and S3 bucket and a backend using lambdas and an Aurora Postgres db.

The page goal of the page is to help people generate treasure hunts quickly and effectively.

## Github actions
When a push is done to the master branch the app should be deployed to aws.

## Project setup
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

### API URL
Add a .env.local file with the property
VUE_APP_API_URL=https://your.api.url/without/ending/slash
