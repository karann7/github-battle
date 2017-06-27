var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './app/index.js',
  output: {
			path: path.resolve(__dirname, 'docs'),
			filename: 'index-bundle.js',
      publicPath: '/'
  },
	module: {
		rules: [
			{ test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' },
			{ test: /\.css$/, exclude: /node_modules/, use: [ 'style-loader', 'css-loader' ]}
		]
  },
  devServer: {
    historyApiFallback: true
  },
	resolve: {
    modules: [
      path.join(__dirname, "app"),
      "node_modules"
    ],
			alias: {
				App: 'components/App',
        Popular: 'components/Popular',
        Api: 'utils/api',
        Nav: 'components/Nav',
        Home: 'components/Home',
        Battle: 'components/Battle',
        PlayerInput: 'components/PlayerInput',
        PlayerPreview: 'components/PlayerPreview'
    },
    extensions: ['*', '.js', '.jsx']
  },
    plugins: [new HtmlWebpackPlugin({
        template: 'app/index.html'
    })]
}