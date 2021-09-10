const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
    template: "./public/index.html",
    filename: "./index.html",
  });

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '../public',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
      },
    module: {
     rules:[
         {
             test: /\.(js|jsx)$/,
             exclude: /node_modules/,
             use: ['babel-loader']
         },
         {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
         },
         {
            test: /\.(jpg|jpeg|png|gif|svg)$/,
            use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: false,
                  },
                },
              ],
         }
     ]
    },
    plugins:[htmlPlugin]
    
};