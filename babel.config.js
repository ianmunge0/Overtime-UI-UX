module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-flow'],
    plugins: [
      [
        "module:react-native-dotenv", {
          "envName": "APP_ENV",
          "moduleName": "@env",
          "path": ".env",
          "blacklist": null,
          "whitelist": null,
          "safe": false,
          "allowUndefined": true,
          "verbose": false
        }],
      'react-native-reanimated/plugin'
    ]
  };
};