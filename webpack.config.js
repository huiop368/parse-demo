module.exports = {
  entry: './src/js/main.js',
  output: {
    path : './dist',
    filename: 'bundle.js'
  },
  module : {
      loaders : [
        {text : /\.jsx?$/, loader : 'jsx-loader'}
      ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.css', '.less'] 
  }
};
