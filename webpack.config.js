module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        "presets": ["es2015"]
      }
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    },{
      test: /\.html$/,
      loader: 'html'
    }]
  },
  watch: true
};