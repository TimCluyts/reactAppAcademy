require('webpack');
const path = require('path');
const webpackCommonConfig = require('./webpack.common');

module.exports = Object.assign({}, webpackCommonConfig, {
	output: {
		filename: 'myReactApp.js',
		path: path.resolve(__dirname, '../build/scripts/'),
		libraryTarget: 'umd'
	}
});
