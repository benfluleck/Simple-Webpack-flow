# Simple Webpack flow for React

This is an application derived from [Sean Larkin](https://github.com/TheLarkInn)'s Front End Masters course on Webpack 4. Using the tools from his presentation I was able to create a good workflow for React Application using Web Pack.

## Project Setup
<hr>
This project assumes you have NodeJS v8 or greater installed. You should also have npm v5 or greater installed as well (this comes packaged with Node 8). You'll also need a recent version of git installed as well.

## Getting Started

To get started with the project, start with this:

- [Sign up](https://github.com/) for a GitHub Account (if you don't already have one)
- [Fork]() this repo
- [Clone]() your fork
- In the directory you cloned the repository, run git fetch --all

### Installation
- Install [Node JS](https://nodejs.org/en/).
- [cd] into the root of the project directory.
- Run npm install on the terminal to install Dependecies

## Usage
**webpack.config.js**

```
module.exports = ({ mode, presets } = { mode: "production", presets: [] }) =>
  webPackMerge(
    {
      mode,
      plugins: [htmlPlugin, webPack],
    },
    modeConfig(mode),
    loadPresets({ mode, presets })
  );
  ```
|Name|Type|Description|
|:--:|:--:|:----------|
|**`mode`**|`{String}`|Default set to production|
|**`plugins`**|`[Array]`|[HtmlPlugin](https://github.com/jantimon/html-webpack-plugin) installed by default to bundle.This is a webpack plugin that simplifies creation of HTML files to serve your webpack bundles |
|**`modeConfig`** |`{function}`|Config information for the developement environment is generated here|
|**`loadPresets`**|`{function}`|Config information for the presets|

## Adding a Preset
Current state of webpack has been optimized for react applications but the environments can be refactored depending on usage.

### To add a preset
<hr>

 - cd into the build-utils
 - Make a webpack config file
 - Edit the package.json scripts to run the presets. **Remember** to add a *mode*.

*Example*
- ```cd build-utils/presets```
- ```touch webpack.compress.js```
```
const CompressionWebpackPlugin = require("compression-webpack-plugin");
module.exports = () => ({
  plugins: [new CompressionWebpackPlugin()]
});

```

- In the package.json scripts
- ```"prod:compress": "npm run prod -- --env.presets compress",``` to run the compression presets with your production configz
