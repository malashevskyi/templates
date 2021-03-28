# Templates
Webpack 5, Gulp, React, Chakra-ui, Babel, Eslint, CSS, SASS, SCSS, HTML

## Contents
1. Webpack 5, React, SASS (SCSS/CSS), Babel, Eslint <br>
  - `git clone https://github.com/malashevskyi/templates.git [your-app-folder]`
    `git checkout webpack-react`
  or
  - `git clone --branch webpack-react https://github.com/malashevskyi/templates.git [your-app-folder]`
  or if you inside folder
  - `git clone --branch webpack-react https://github.com/malashevskyi/templates.git .`
2. Webpack 5, React, SASS (SCSS/CSS), Babel, Eslint, Chakra-ui <br>
  - `git clone https://github.com/malashevskyi/templates.git [your-app-folder]`
   `git checkout webpack-chakra`
  or
  - `git clone --branch webpack-chakra https://github.com/malashevskyi/templates.git [your-app-folder]`
  or if you inside folder
  - `git clone --branch webpack-chakra https://github.com/malashevskyi/templates.git .`
3. Gulp, CSS (SCSS/SASS), Babel, Eslint <br>
  - `git clone https://github.com/malashevskyi/templates.git [your-app-folder]`
   `git checkout gulp`
  or
  - `git clone --branch gulp https://github.com/malashevskyi/templates.git [your-app-folder]`
  or if you inside folder
  - `git clone --branch gulp https://github.com/malashevskyi/templates.git .`

## Credits
- [Webpack 5 Full Project Setup](https://www.youtube.com/watch?v=TOb1c39m64A&t=1780s)
- [Webpack. Полный курс 2020](https://www.youtube.com/watch?v=eSaF8NXeNsA)


### Webpack 5, React, SASS (SCSS/CSS), Babel, Eslint
`git checkout webpack-react`

`npm start` - (development mode)
`npm run build` - (production mode)
`npm run stats` - (create statistic in stats.json&nbsp;&nbsp;[webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer))

- js/jsx/ts
- sass/scss/css
- woff/woff2
- png/jpeg/jpg/gif/svg
- eslint
- react
- babel
- @styles, @js, @components, @images
  - `import App from '@components/App'`
  - `import Button from '@components/Button'`
  - `import '@styles/main.sass'`

  it works but there are some inconveniences with it:
    - typescript error: cannot find module
    - unable to go to definition in vs-code


### Webpack 5, React, SASS (SCSS/CSS), Babel, Eslint, Chakra-ui
`git checkout webpack-chakra`

`npm start` - (development mode)
`npm run build` - (production mode)
`npm run stats` - (create statistic in stats.json&nbsp;&nbsp;[webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer))

- the same configuration as `Webpack 5, React, SASS (SCSS/CSS), Babel, Eslint`
`+`
- chakra-ui


### Gulp, CSS (SCSS/SASS), Babel, Eslint
`git checkout gulp`

`npm start` - (development mode)
`npm run build` - (production mode)

- css initial (support sass/scss, just change styles files extensions)
- woff/woff2
- png/jpeg/jpg/gif/svg/webp/ico
- eslint
- babel