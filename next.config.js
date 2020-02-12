const path = require('path');
const withSass = require('@zeit/next-sass');

// const StrapiService = require('./services/StrapiService');
// const ContentfulService = require('./services/ContentfulService');

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
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/contentful/': { page: '/contentful' },
      '/strapi/': { page: '/strapi' },
    };

    // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    // const data = await res.json();
    // const shows = data.map(entry => entry.show);

    // shows.forEach(show => {
    //   paths[`/show/${show.id}`] = { page: '/show/[id]', query: { id: show.id } };
    // });

    return paths;
  }
})