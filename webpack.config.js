
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry:{
		laya :'./src/LayaAir.js',
		main: './src/main.js'
	},
	output:{
		path:path.resolve(__dirname,'dist'),   //打包后文件存放的位置
		publicPath: ('/'),   //在html中引入文件时位置，如设置'/static'引入后为  src="/static/*/...js"
		filename:'js/[name].js'  //输出文件名 [name]是entry入后文件名，可使用[hash]产生hash值如[name].[hash].js
	},
	module: {
		rules: [{
			test:/\.txt$/,    //要处理什么文件
			use:'raw-loader'  //要用什么loader处理
		},{
			test:path.join(__dirname,'src/main.js'),
			loader:'babel-loader',
			query:{
				presets:['es2015']
			}
		}]
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:'laya-webpack学习',
			// template:'./dist/index.html',
			filename:'index.html',
			inject: true, //指定引入文件位置 true和body在body元素底部,head在head元素中
			hash: true,   //将在页面引入文件的位置加上hash版本
			//minify: {}   //的作用是对 html 文件进行压缩，minify 的属性值是一个压缩选项或者 false ,默认false不压缩
			//cache:true //默认值是 true。表示只有在内容变化时才生成一个新的文件。
			chunks:['laya','main'] //指定将那些chunk文件引入html，值为entry的key
			//excludeChunks: ['index'] 不引入那些文件
		})
	]
}