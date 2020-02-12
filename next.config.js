const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  // We create custom aliases for commonly used folders so we don't need to import using nested structure ../../..
  webpack(config) {
    config.resolve.alias['@root'] = path.join(__dirname);
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    config.resolve.alias['@pages'] = path.join(__dirname, 'pages');
    config.resolve.alias['@services'] = path.join(__dirname, 'services');
    return config;
  },
})