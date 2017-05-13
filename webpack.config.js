var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var path = require('path');
var config = {
   entry: './dev/index.js',
   output: {
      path: path.resolve(__dirname,'build'),
      filename: 'main.js',
   },
	
   devServer: {
      inline: true,
      port: 4000,
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
          }
      ]
   },
   plugins: [
        new ExtractTextPlugin({
            filename: 'main.css',
            allChunks: true
        }),
         new webpack.LoaderOptionsPlugin({
    debug: true
  })

    ]
};

module.exports = config;