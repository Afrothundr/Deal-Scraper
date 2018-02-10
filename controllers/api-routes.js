var express = require('express');
var router = express.Router();
var db = require("../models");
var request = require("request");
var cheerio = require("cheerio");
// A GET route for scraping the echojs website
module.exports = function(app) {

    app.get("/scrape", function(req, res) {
        request("https://deals.kinja.com/all-the-best-deals-1822529788", function(error, response, html) {
        
            var $ = cheerio.load(html);
            $(".js_marquee-assetfigure").each(function(i, element) {
              var title = $(element).find('figcaption').text();
              var deal = $(element).find('figcaption a').attr("href");
            //   var price = $(element).find('a').first().text();
            //   var code = $(element).find('span.commerce-inset__promocode').text();
            //   var vendor = $(element).find('span.commerce-inset__provider-name').text();
              var picture = $(element).find('picture source').attr('data-srcset');
          
              // Save these results in an object that we'll push into the results array we defined earlier
              var result = {
                title: title,
                deal: deal,
                // price: price,
                // code: code,
                // vendor: vendor,
                picture: picture
              };

              console.log(result);

              db.Deal
              .create(result)
              .then(function(dbDeal) {

              })
              .catch(function(err) {
                  // If an error occurred, send it to the client
                  console.log(err);
              });

            });
  });
  res.send("Scrape Complete");
});

    // Route for saving/updating an Article's associated Note
    app.post("/articles/:id", function(req, res) {
        // TODO
        // ====
        // save the new note that gets posted to the Notes collection
        // then find an article from the req.params.id
        // and update it's "note" property with the _id of the new note
      });
}
