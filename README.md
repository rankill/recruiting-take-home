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

- The architecture proposed was a Lightweight Event driven pattern in a small scope, the only action that is convert the number will depend from events made by the user ans synced by the components

- Regarding the converter number function, I decide to use a purely functional approach to improve readability and complexity, it has a decent time and space complexity taking in mind the amount of inputs

## Folder Stucture

  - **App.ts**: Is the entry point of the App, due to the simplicity of the App I decide not use router but keep everything inside global App component
    - **Components**: Contains the main components of the App
    - **Core**: Contains all the core components of the App, that means components that will be shared among all the App
    - **Services**: Contains the services to handle complex behaviors, such as control the conversion process
    - **Assets**: Contains all the media used by the App
  - **Tests**: Contains all the test suite, the architecture proposed is create the same folder structure to keep it simpler and accessible, keeping spec definitions inside main folder tend to grow and disorganize 


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
