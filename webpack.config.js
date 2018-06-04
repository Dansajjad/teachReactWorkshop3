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

// module.exports = {
//   entry: './src/app',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//     publicPath: 'dist'
//   },
//   devServer: {
//     inline: true,
//     contentBase: path.join(__dirname, 'dist'),
//     port: 9000
//   },
//   module: {
//     // configuration regarding modules
//     loaders: [
//       // rules for modules (configure loaders, parser options, etc.)
//       {
//         test: /\.js$/,
//         include: [ path.resolve(__dirname, "src") ],
//         exclude: [ path.resolve(__dirname, "node_modules") ],
//         loader: "babel-loader",
//         options: {
//           presets: ['react', 'latest', 'stage-0']
//         }
//       }
//     ]
//   },
//   devtool: 'source-map',
//   context: __dirname
// }
// 


/*
  Configuration in Workshop
 */

module.exports = {
  entry: './src/app',
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/' //<--- explore this option further 
  },
  devServer: {
    inline: true,
    contentBase: './dist',  //<--- explore this option further
    port: 9000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['latest', 'react', 'stage-0']
        }
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader'  // <-- these have to be inorder 
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
      }
    ]
  }
}