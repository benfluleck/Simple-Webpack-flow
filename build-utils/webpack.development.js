const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => ({
  output: {
    filename: "bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [" ", ".jsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.js?$|.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ['env', 'react', 'stage-2']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true,
              minimize: true,
            }
          },
          "postcss-loader"
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
});
