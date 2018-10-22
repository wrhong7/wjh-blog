const SitemapGenerator = require('sitemap-generator');

// create generator
const generator = SitemapGenerator('https://wonjunhong.com', {
  stripQuerystring: false
});

// register event listeners
generator.on('done', () => {

});

// start the crawler
generator.start();