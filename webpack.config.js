var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './app/index.js',
  output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'index-bundle.js'
  },
	module: {
		rules: [
			{ test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' },
			{ test: /\.css$/, exclude: /node_modules/, use: [ 'style-loader', 'css-loader' ]}
		]
  },
	resolve: {
    modules: [
      path.join(__dirname, "app"),
      "node_modules"
    ],
			alias: {
				App: 'components/App',
        Popular: 'components/Popular'
    },
    extensions: ['*', '.js', '.jsx']
  },
    plugins: [new HtmlWebpackPlugin({
        template: 'app/index.html'
    })]
}