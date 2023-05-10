const webpack = require('webpack');

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            "ts-loader",
          ],
        },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          ]
        }
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      HOST: "localhost",
      PORT: "3000",
    }),
  ],
  devtool: 'source-map',
};
