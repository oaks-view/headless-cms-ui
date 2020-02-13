const path = require('path');
const withSass = require('@zeit/next-sass');
const axios = require('axios');
const contentful = require('contentful');

const contentfulClient = contentful.createClient({
  space: "2h1x69tsm0oh",
  accessToken: "XNNF69qwJCJbUao4IJ2dLA95vBORR5crqoFbFnc-4R4"
});

const strapiClient = axios.create({
  baseURL: 'https://cms-strapi-mz.herokuapp.com'
});

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
  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' },
      '/contentful/': { page: '/contentful' },
      '/strapi/': { page: '/strapi' },
    };

    // strapi get all blog posts and add routes
    const blogs = (await strapiClient.get('/blogs?_sort=created_at:desc')).data;

    blogs.forEach(blogPost => {
      paths[`/strapi/${blogPost.id}`] = { page: '/strapi/[id]', query: { id: blogPost.id } };
    });

    // contentful get all books
    const books = await contentfulClient.getEntries({
      content_type: "book",
      locale: 'en-US',
      select: 'sys.id,fields.title,fields.author,fields.publicationDate'
    })
      .then(response => response.items);

    books.forEach(book => {
      paths[`/contentful/${book.sys.id}`] = { page: '/contentful/[id]', query: { id: book.sys.id } };
    });

    return paths;
  }
})