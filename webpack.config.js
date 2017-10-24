const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './js/app.js',
	output: {
		path: path.resolve(__dirname, 'js'),
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.(sass)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader'],
				})
			},
		]
	},

	plugins: [
		new ExtractTextPlugin({
			filename: "../css/custom.css",
			allChunks: true
		})
	],
	stats: {
		colors: true
	},
	devtool: 'source-map'
};
