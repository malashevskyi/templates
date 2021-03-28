# Templates
Webpack 5, Gulp, React, Chakra-ui, Babel, Eslint, CSS, SASS, SCSS, HTML <br>
<!--:warning: --> 

## Contents
1. **Webpack 5, React, SASS (SCSS/CSS), Babel, Eslint** <br>
  - `git clone --branch webpack-react https://github.com/malashevskyi/templates.git [your-app-folder]`<br>
  or if you inside folder
  - `git clone --branch webpack-react https://github.com/malashevskyi/templates.git .`
2. **Webpack 5, React, SASS (SCSS/CSS), Babel, Eslint, Chakra-ui** <br>
  - `git clone --branch webpack-chakra https://github.com/malashevskyi/templates.git [your-app-folder]`<br>
  or if you inside folder
  - `git clone --branch webpack-chakra https://github.com/malashevskyi/templates.git .`
3. **Gulp, CSS (SCSS/SASS), Babel, Eslint** <br>
  - `git clone --branch gulp https://github.com/malashevskyi/templates.git [your-app-folder]`<br>
  or if you inside folder
  - `git clone --branch gulp https://github.com/malashevskyi/templates.git .`

## Credits
- [Webpack 5 Full Project Setup](https://www.youtube.com/watch?v=TOb1c39m64A&t=1780s)
- [Webpack. Полный курс 2020](https://www.youtube.com/watch?v=eSaF8NXeNsA)


### Webpack 5, React, SASS (SCSS/CSS), Babel, Eslint
`git checkout webpack-react`

`npm start` - (development mode)<br>
`npm run build` - (production mode)<br>
`npm run stats` - (create statistic in stats.json&nbsp;&nbsp;[webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer))<br>

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

`npm start` - (development mode)<br>
`npm run build` - (production mode)<br>
`npm run stats` - (create statistic in stats.json&nbsp;&nbsp;[webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer))<br>

- the same configuration as `Webpack 5, React, SASS (SCSS/CSS), Babel, Eslint`
`+`
- chakra-ui


### Gulp, CSS (SCSS/SASS), Babel, Eslint
`git checkout gulp`<br>

`npm start` - (development mode)<br>
`npm run build` - (production mode)<br>

- css initial (support sass/scss, just change styles files extensions)
- woff/woff2
- png/jpeg/jpg/gif/svg/webp/ico
- eslint
- babel
