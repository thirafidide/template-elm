module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        include: /src/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.elm$/,
        include: /src/,
        use: [
          { loader: 'elm-hot-webpack-loader' },
          {
            loader: 'elm-webpack-loader',
            options: {
              debug: true,
            },
          },
        ],
      },
    ],
  },

  devServer: {
    inline: true,
    stats: 'errors-only',
    historyApiFallback: true,
  },
};
