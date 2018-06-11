# Simple Webpack flow for React

This is an application derived from [Sean Larkin](https://github.com/TheLarkInn)'s Front End Masters course on Webpack 4. Using the tools from his presentation I was able to create a good workflow for React Application using Web Pack.

## Project Setup
<hr>
This project assumes you have NodeJS v8 or greater installed. You should also have npm v5 or greater installed as well (this comes packaged with Node 8). You'll also need a recent version of git installed as well.

## Getting Started

To get started with the project, start with this:

- [Sign up](https://github.com/) for a GitHub Account (if you don't already have one)
- [Fork](https://github.com/benfluleck/Simple-Webpack-flow) this repo
- [Clone](https://github.com/benfluleck/Simple-Webpack-flow.git) your fork
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
|**`modeConfig`** |`{function}`|Config information for the environment specified is generated here|
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

### Questions
For more details contact benny.ogidan@andela.com

### Support or Contribution
For any suggestions or contributions  please do not hesistate to contact me

Contributions to this project are welcomed by all, If you need to contribute to this project, follow the steps below
* **Fork** the repository
* Follow [Installation and Setup](#installation-and-setup) as explained earlier
* Create a branch off **develop** for the feature you wish to add
* Make neccessary changes, commit and raise a pull request against develop, conventions can be found on the wiki page
**Note** when making contributions, please endevour to follow the [Airbnb](https://github.com/airbnb/javascript) javascript style guide.

## License
This project is authored by **Benny Ogidan** (benny.ogidan@andela.com) and is licensed for your use, modification and distribution under the **MIT** license.
[MIT][license] © [benny-ogidan][author]
<!-- Definitions -->
[license]: LICENSE
[author]: benny-ogidan


## Current state
