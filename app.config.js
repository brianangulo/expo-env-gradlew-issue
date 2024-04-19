const fs = require('node:fs');

const content = process.env.EXPO_PUBLIC_TEST || 'did not get defined';

fs.writeFile( __dirname + '/test.txt', content, () => {});

module.exports = {
  name: 'test-app',
  slug: 'test-app',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.anonymous.testapp',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: process.env.EXPO_PUBLIC_TEST,
      backgroundColor: '#ffffff',
    },
    package: 'com.anonymous.testapp',
  },
  web: {
    favicon: './assets/favicon.png',
  },
};
