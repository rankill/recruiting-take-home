# Number converter
## Vue Front-End Coding Exercise

## Demo
<p align="center">
  <img src="public/demo.gif" alt="Demo">
</p>

## Stack

The stack selected was:
- Vue 3 / Vue Cli / Scss
- Typescript - Class bassed components
- JEST
- Eslint / Prettier

## Architecture

The architecture proposed is an Event driven patter in a small scope

  - **App**: Is the entry point of the App, due to the simplicity of the App I decide not use router but keep everything inside global App component
    - **Components**: Contains the main components of the App
    - **Core**: Contains all the core components of the App, that means components that will be shared among all the App
    - **Services**: Contains the services to handle complex behaviors, such as control the conversion process
    - **Assets**: Contains all the media used by the App
  - **Tests**: Contains all the test suite, the architecture proposed is create the same folder structure to keep it simpler and accessible, keep spec definitions inside main folder tend to grow and disorganize 


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).