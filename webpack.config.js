const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
		index: './js/index.js'
	},
	output: {
		path: resolve(__dirname, 'dist'),
		filename: '[name].build.js',
	},
	module: {
		rules: [
			{
				test:/\.vue$/,
				use: [{
					loader: 'vue-loader',
					options: {
						loaders: {
							js: 'babel-loader',
							css: 'vue-style-loader!css-loader',
							sass: 'vue-style-loader!css-loader!sass-loader'
						}
					}
				}],
				exclude: /node_modules/
			},
			{
				test:/\.js$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader',
				options:{
					limit: '10240',
					name: '[path][name].[ext]',
				}
			}
		]
	},
	resolve: {	//后缀名查找
        extensions: [
            '.js',
            '.vue'
        ],
        alias: {
        	'@': resolve(__dirname,'static/images/'),
        }
    },
	devServer: {
		contentBase: join(__dirname, 'build'),
		port: 83,
		host: '0,0,0,0',
		hot: true,
		inline: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'body',
			hash:false
		})
	],
}