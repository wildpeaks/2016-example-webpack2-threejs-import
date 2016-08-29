/* eslint-env node */
const path = require('path');
const webpack = require('webpack');
const distFolder = path.resolve(__dirname, 'dist');

const moduleLoaders = {
	loaders: [
		{
			test: /\.js$/,
			loader: 'babel',
			query: {
				compact: true,
				presets: ['es2015', {modules: false}]
			},
			include: [path.resolve(__dirname, 'src')]
		}
	]
};

const plugins = [
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('production')
	}),
	// new webpack.optimize.UglifyJsPlugin({
	// 	sourceMap: false,
	// 	compress: {
	// 		warnings: false
	// 	},
	// 	output: {
	// 		comments: false
	// 	}
	// }),
	new webpack.LoaderOptionsPlugin({
		debug: false,
		minimize: true
	})
];

module.exports = [
	{
		target: 'web',
		entry: './application.import-build-esnext.js',
		output: {
			publicPath: '',
			filename: 'bundle.import-build-esnext.js',
			path: distFolder
		},
		plugins,
		module: moduleLoaders
	},
	{
		target: 'web',
		entry: './application.import-src-vector3.js',
		output: {
			publicPath: '',
			filename: 'bundle.import-src-vector3.js',
			path: distFolder
		},
		plugins,
		module: moduleLoaders
	},
	{
		target: 'web',
		entry: './application.import-src-box2-vector3.js',
		output: {
			publicPath: '',
			filename: 'bundle.import-src-box2-vector3.js',
			path: distFolder
		},
		plugins,
		module: moduleLoaders
	},
	{
		target: 'web',
		entry: './application.import-src-vector2-vector3.js',
		output: {
			publicPath: '',
			filename: 'bundle.import-src-vector2-vector3.js',
			path: distFolder
		},
		plugins,
		module: moduleLoaders
	}
];
