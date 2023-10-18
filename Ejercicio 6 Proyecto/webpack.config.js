const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
    },
    module: {
        rules: [
          {
            test: /\.(mp4|webm|ogg|mov)$/,
            use: {
              loader: 'file-loader',
              options: {
                name: 'videos/[name].[ext]',
              },
            },
          },
          {
            test: /\.(eot|ttf|woff|woff2)$/,
            use: {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/', // Output folder for fonts
              },
            },
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|jpg)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.csv$/i,
            use: ['csv-loader'],
          },
        ],
      },
};