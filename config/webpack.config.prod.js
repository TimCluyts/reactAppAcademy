const path = require('path');
const webpack = require('webpack');
const webpackCommonConfig = require('./webpack.common');

module.exports = Object.assign({}, webpackCommonConfig, {
	output: {
		filename: 'myReactApp.js',
		path: path.resolve(__dirname, '../dist/scripts/'),
		libraryTarget: 'umd'
	},
	plugins: [new webpack.optimize.UglifyJsPlugin()]
});
