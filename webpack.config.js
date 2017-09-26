'use strict';

module.exports = {
	entry: './index.js', // MPM: change entry point / move to own directory?
	output: {
		path: __dirname,
		filename: './bundle.js'
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx', '.json', '*']
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader',
			options: {
				presets: ['react']
			} // MPM: do 'loader' and 'options' need to be in 'use' ??
		}]
	}
};