var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		client: './client/index.js'
	},
	output: {
		path: path.resolve(__dirname, './public/assets'),
		filename: './js/bundle.js'
	},
	module: {
		rules: [
            {
				exclude: /(node_modules)/,
				test: /\.jsx?$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react']
					}
				}
			}, {
				include: [path.resolve(__dirname, './client/scss/main.scss')],
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [{
						loader: 'css-loader',
						options: {
							url: false,
							minimize: true,
							sourceMap: true
						}
					}, {
						loader: 'postcss-loader',
							options: {
								plugins: function() {
									return [autoprefixer]
								},
								sourceMap: true
							}
					}, {
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: './css/style.css'
		})
	],
	devtool: 'eval-source-map'
}