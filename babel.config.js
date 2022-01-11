module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: './src',
          extenions: [
            '.ts',
            '.tsx',
            '.js',
            '.json'
          ],
          alias: {
            "@screens": "./src/screens",
            "@components": "./src/components",
            "@services": "./src/services",
          }
        }
      ]
    ]
  };
};
