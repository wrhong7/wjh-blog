const path = require("path");
const express = require("express");
const sm = require('sitemap');

const sitemap = sm.createSitemap({
  hostname: 'https://wonjunhong.com',
  cacheTime: 600000,        // 600 sec - cache purge period
  urls: [
    {url: "/", changefreq: 'daily', priority: 0.5},
    {url: "/library", changefreq: 'daily', priority: 0.4},
    {url: "/blog", changefreq: 'daily', priority: 0.4},
    {url: "/portfolio", changefreq: 'daily', priority: 0.4},
    {url: "/principles", changefreq: 'daily', priority: 0.4},
    {url: "/portfolio/cureconnect", changefreq: 'daily', priority: 0.3},
    {url: "/portfolio/cureconnect/step1", changefreq: 'daily', priority: 0.2},
    {url: "/portfolio/cureconnect/step2", changefreq: 'daily', priority: 0.2},
    {url: "/portfolio/cureconnect/step3", changefreq: 'daily', priority: 0.2},
    {url: "/portfolio/cureconnect/step4", changefreq: 'daily', priority: 0.2},
    {url: "/portfolio/cureconnect/step5", changefreq: 'daily', priority: 0.2},
    {url: "/portfolio/cureconnect/step6", changefreq: 'daily', priority: 0.2},
    {url: "/portfolio/rpa", changefreq: 'daily', priority: 0.3},
    {url: "/portfolio/zeroCollision", changefreq: 'daily', priority: 0.3},
    {url: "/comedy", changefreq: 'daily', priority: 0.4},
  ]
});

const DIST_DIR = path.join(__dirname, "dist"),
  PORT = 3000,
  app = express();

app.use(express.static(DIST_DIR));

app.get('/sitemap.xml', function (req, res) {
  sitemap.toXML(function (err, xml) {
    if (err) {
      return res.status(500).end();
    }
    res.header('Content-Type', 'application/xml');
    res.send(xml);
  });
});

// app.get("*", function (req, res) {
//   res.sendFile(path.join(DIST_DIR, "index.html"));
// });

app.listen(PORT);