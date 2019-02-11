const path = require('path');
require('babel-polyfill');
module.exports = {
	entry: ['babel-polyfill', path.resolve(__dirname, '../src/Index.jsx')],
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: [/\.js$/, /\.jsx$/],
				include: path.join(__dirname, '../src'),
				loader: 'babel-loader'
			}
		]
	},
	externals: {
		requirejs: 'requirejs'
	}
};
