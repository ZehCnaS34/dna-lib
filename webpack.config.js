module.exports = (env, argv) => {
  return {
    mode: "development",
    entry: "./src/index.js",
    output: {
      library: "dna",
      libraryTarget: "umd",
      globalObject: 'this',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: require("./babel.config.js")
            }
          ]
        }
      ]
    }
  };
};
