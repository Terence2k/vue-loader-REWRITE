const { resolve } = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: resolve(__dirname, './src/main.js'), //入口
    output: {  //打包后名字
        filename: 'main.js',
        path: resolve(__dirname, 'dist')
    },
    externals: {
        'vue': 'Vue'
    },
    resolve: { //不想写。vue .js
        extensions: ['.js', '.vue']
    },

    resolveLoader: {	 //解决不在node-module问题
        modules: [
            'node_modules',
            resolve(__dirname, './modules')
        ]
    },

    module: {
        rules: [
            {
                test: /.vue$/i,
                loader: 'vue-loader'
            },
            {
                test: /.css$/i,
                loader: ['style-loader', 'css-loader']//这个从后往前，注意顺序
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({  // 等待webpack把vue处理成 css js文件后，把数据导入到html
            template: resolve(__dirname, 'public/index.html')
        })
    ]

}