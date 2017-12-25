'use strict';
const db = require("./models");
const cheerio = require("cheerio");
const request = require("request");
const mongoose = require("mongoose");
const moment = require("moment");

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reviewbutler",
  {
    useMongoClient: true
  }
);


function scrape(business) {
	const baseurl = 'https://www.yelp.com/biz/'
  	// First, we grab the body of the html with request
  	request(baseurl+business, function(error, response, html) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    console.log(baseurl);
    console.log(business);
    let $ = cheerio.load(html);
    let resultArray = [];

    // Now, we grab every h2 within an article tag, and do the following:
    $("li").each(function(i, element) {
      // Save an empty result object
      let result = {}
      let temp;

      temp = $(this)
      .find("div.review")
      .data("review-id")

      if(temp) {

      	result.tags = "";
      	result.sentiment_score = 0;

      	result.text = $(this)
      	.find("div.review-content")
      	.children()
      	.nextAll('p')
      	.text().trim()

      	result.word_count = result.text.split(" ").length;
      	result.title = result.text.split(/\s+/).slice(0,5).join(" ");

      	result.sentences_object = [];

      	let reviewDateString = $(this)
      	.find("span.rating-qualifier")
      	.text().trim()

        result.review_date = moment(reviewDateString, "MM/DD/YY").format();

      	result.response_date = "";


      	result.photos = $(this)
      	.find("li.photo-count")
      	.text().trim()

      	result.rating = $(this)
      	.find("div.i-stars")
      	.attr("title")

      	result.user_name = $(this)
      	.find("a.user-display-name")
      	.text()

      	result.platform = "Yelp";
      	result.response_text = "";
      	result.review_read = "";
      	result.business_id = business;
      	result.timestamp = Date.now();

      	result.external_id = $(this)
      	.find("div.review")
      	.data("review-id")

	      //  result.userLink = $(this)
	      // .find("a.user-display-name")
	      // .attr("href")

	      // result.userLink = "https://yelp.com" + result.userLink

	      //  result.userLocation = $(this)
	      // .find("li.user-location")
	      // .text().trim()

	      //  result.userFriendsCount = $(this)
	      // .find("li.friend-count")
	      // .text().trim()

	      //  result.userReviewCount = $(this)
	      // .find("li.review-count")
	      // .text().trim()
	    resultArray.push(result);

	    db.Review
	    	.updateOne(
	    		{external_id : result.external_id},
	    		{
	    			"$setOnInsert": result
	    		},
	    		{
	    			new : true,
	    			upsert: true
	    		})
	    	.then(function(dbReview) {
	    		console.log("Scraping...")
	    		return dbReview;
	    	})
	    	.catch(function(err) {
	    		console.log(err);
	    		return err;
	    	});
	 }
    console.log(resultArray);
});
});

}

for (var i = 2; i < process.argv.length; i++) {
	scrape(process.argv[i]);
	console.log(process.argv[i]);
}


