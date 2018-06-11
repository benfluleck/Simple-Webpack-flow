module.exports = ({ file, options, env }) => ({
  parser: file.extname === '.sss' ? 'sugarss' : false,
  // Handles `.css` && '.sss'  files dynamically 👆🏿
  plugins: {
    'postcss-cssnext': options.cssnext ? options.cssnext : false,
    'postcss-extend': {},
    'postcss-import': {},
    'postcss-simple-vars': {},
    'postcss-mixins': {}
  }
});
