module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-flow"],
  plugins: ["transform-export-extensions"],
  env: {
    test: {
      plugins: ["transform-es2015-modules-commonjs"]
    }
  }
}
