# My Personal Website

> This application is the landing page for all outsmart apps. It preforms access restriction and directs users to their associated energy applications.

## Production deployment

```shell
npm install (in the root directory with package.json file)
gulp build-prod (build project for production)
(point production webserver at app/index.html)
```

## Development deployment

```shell
npm install (in the root directory with package.json file)
gulp build-dev (build project for development)
gulp (run development web server in watch mode)
(navigate browser to "localhost:8187/app/")
```
