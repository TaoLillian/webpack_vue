const path = require('path')
module.exports={
    mode:'development',
    entry:path.join(__dirname,'src/main.js'),
    output:{
        path:path.join(__dirname,'/dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {test:'/\.css$/',use:['style-loader','css-loader']},
            {test:/\.(jpeg|jpg|png|gif|bmp)$/,use:"url-loader"},
            // {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'}
            {test:'/\.js$/',use:'babel-loader',exclude:/node_modules/}
        ]
    }

}