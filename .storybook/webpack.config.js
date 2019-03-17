module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
          plugins: [
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-class-properties',
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
};
