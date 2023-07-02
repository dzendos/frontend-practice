const path = require('path');

module.exports = {
  entry: './script.ts', // Update with your entry file
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js', // Update with your desired output file name
    path: path.resolve(__dirname, 'dist'), // Update with your desired output directory
  },
};
