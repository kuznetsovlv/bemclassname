"use strict";

const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || "development";
const DEV = NODE_ENV === "development";
const TEST = NODE_ENV === "test";

const plugins = [
	new webpack.NoErrorsPlugin(),
	new webpack.DefinePlugin({
		NODE_ENV: JSON.stringify(NODE_ENV),
		DEV: JSON.stringify(DEV)
	})
];

const productPlugins = [
	new webpack.optimize.UglifyJsPlugin({
		compress: { warnings: false, drop_console: true, unsafe: true }
	})
];

function getExtentions () {
	const extentions = ['', '.js'];

	if (DEV || TEST)
		extentions.push('_dev.js');

	return extentions;
}

module.exports = {
	context: path.resolve(__dirname, 'src'),

	entry: DEV || TEST ? 'index_dev' : 'index',

	noInfo: true,

	target: 'node',

	output: {filename: 'index.js', path: path.resolve(__dirname, DEV || TEST ? 'test' : 'dist'), library: 'unit', libraryTarget: 'umd'},

	watch: DEV,

	watchOptions: {
		aggregateTimeout: 100
	},

	devtool: DEV ? "cheap-source-map" : null,

	plugins: DEV ? plugins : plugins.concat(productPlugins),
	// plugins: plugins,

	resolve: {
		modulesDirectories: ['node_modules', 'src'],
		extensions: getExtentions()
	},

	resolveLoader: {
		modulesDirectories: ['node_modules'],
		moduleTemplates: ['*-loader', '*'],
		extensions: ['', '.js']
	},

	module: {
		loaders: [{
			exclude: /node_modules/,
			test: /\.js$/,
			loader: 'babel'
		}]
	}
}
