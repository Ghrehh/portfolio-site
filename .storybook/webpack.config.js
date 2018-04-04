module.exports = (baseConfig, env, defaultConfig) => {
  // Remove the default css loader
  const cssRegex = /\.css$/;
  const cssRuleIndex = defaultConfig
    .module
    .rules
    .findIndex(rule => String(rule.test) === String(cssRegex));

  defaultConfig.module.rules.splice(cssRuleIndex, 1);

  // Push our new css loader, capable of loading css modules to the rules.
  defaultConfig.module.rules.unshift({
    test: cssRegex,
    loaders: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: { modules: true }
      }
    ],
  });

  return defaultConfig;
};
