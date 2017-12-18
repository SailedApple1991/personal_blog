var path = require('path');
var webpack = require('webpack');  //加载webpack依赖包
module.exports = {
    entry: './src/main.js',
    //入口文件并添加了热加载
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',  //输出文件,
        publicPath: "/assets/"
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        inline: true,
        host: '0.0.0.0',
        port: 8080,
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                } //将react编译成js文件
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            //打包css文件
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            //编译sass文件
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
            //对图片进行打包
        ]
    },


};