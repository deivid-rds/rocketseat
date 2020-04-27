const path = require('path');

module.exports = {
    
    entry: path.resolve(__dirname, 'src', 'index.js'), /* O mesmo que 
    './src/index.js', mas o caminho no Windows por exemplo já seria diferente 
    já que a barra é invertida, então com path se evita esse problema.*/

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },

    module: {
        rules: [
            
            {
                test: /\.js$/,   //Expressão regular para pegar todo arquivo terminado com .js 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },

            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            }

        ]
    },
};