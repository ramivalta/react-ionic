'use strict';
var path = require('path');

var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: ['webpack/hot/dev-server', './src/app'],
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'output'),
        filename: 'bundle.js'
    },
    resolveLoader: {
        modulesDirectories: ['src', 'node_modules', 'bower_components']
    },
    resolve: {
        extensions: ['', '.jsx', '.js'],
		root: [
			path.join(__dirname, 'app'),
			path.join(__dirname, 'bower_components'),
			path.join(__dirname, 'node_modules'),
		],
		moduleDirectories: [
			'bower_components',
			'node_modules',
		],
		alias: {
		}
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loaders: ['react-hot', 'jsx'] },
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{
		      test   : /\.woff/,
		      loader : 'url?prefix=font/&limit=10000&mimetype=application/font-woff'
		    }, {
		      test   : /\.ttf/,
		      loader : 'file?prefix=font/'
		    }, {
		      test   : /\.eot/,
		      loader : 'file?prefix=font/'
		    }, {
		      test   : /\.svg/,
		      loader : 'file?prefix=font/'
		    },			
        ]
    },
	
	plugins: [
		new ExtractTextPlugin("./bower_components/ionic/release/css/ionic.css", { allChunks: true})
	]

};
