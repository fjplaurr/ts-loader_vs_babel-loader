// const path = require('path');
// /** @type {import('webpack').Configuration} */
// module.exports = {
//   mode: 'production',
//   entry: './src/index.tsx',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   resolve: {
//     extensions: [".ts", ".tsx", ".js"]
//   },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets:
//               [
//                 "@babel/preset-react",
//                 "@babel/preset-typescript",
//               ]
//           }
//         }
//       },
//     ],
//   },
// };

const path = require('path');
/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
};