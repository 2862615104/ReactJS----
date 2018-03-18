var path = require('path')
var htmlPlugin = require('html-webpack-plugin') // 引入下载的包
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'hebing.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                /** babel-loader es6转es5
                 *  需要下载的包: babel-loader/babel-core/babel-preset-env
                 * {
                      "presets": [
                          ["env", { "modules": false }],
                          "react"
                      ]
                  }
                 * 
                 *  还能够将react中的jsx语法转换为js语法!
                 *  需要下载: babel-preset-react
                 *  在.babelrc文件中添加配置:
                 *  {
                 *     "presets": [
                 *       "react" // 这个react就表示  babel-preset-react包
                 *    ]
                 *  }
                 */
                test: /\.js$/,
                loader: ['babel-loader']
            },
            {
                test: /\.(jpg|png|jpeg|bmp|gif)$/,
                loader: ['url-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot|svg)$/,
                loader: ['file-loader?name=[name].[ext]']
            }
        ]
    },
    plugins: [
        new htmlPlugin({
            // 这个文件，默认会复制到 output.path所指定的路径
            template: './src/index.html', // 指定复制哪个html
            filename: 'index.html' // 指定复制后的html叫什么名字
        })
    ]
}