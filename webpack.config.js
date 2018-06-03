/*
	Describes everything we want webpack to do to our files
	to ready for production

	NPM packages needed: webpack, webpack-dev-server, babel-loader

	//	require webpack
	//	entry point
	//	output
		//	path
		//	filename
		//	publicPath <-- folder name where bundle file resides
	// devServer <-- enables hotreloading
		//	inline
		//	contentBase <-- where files are located
		//	port
	//	module
		//	loaders <-- tasks we want webpack to perform
			// 	test only js files
			// 	exclude any folder: node modules
			//	loader name
			//	specify any presets
*/


const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'none',
  entry: './src/app',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    port: 9000
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: "babel-loader",
        options: {
          presets: ['react', 'latest', 'stage-0']
        }
      }
    ]
  },
  devtool: 'source-map',
  context: __dirname
}