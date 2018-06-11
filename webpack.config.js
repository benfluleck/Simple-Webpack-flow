const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webPackMerge = require("webpack-merge");

const loadPresets = require('./build-utils/loadPresets');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const webPack = new webpack.ProgressPlugin();

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) =>
  webPackMerge(
    {
      mode,
      plugins: [htmlPlugin, webPack],
    },
    modeConfig(mode),
    loadPresets({ mode, presets })
  );

