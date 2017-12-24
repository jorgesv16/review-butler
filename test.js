'use strict';
const cheerio = require("cheerio");
var request = require("request");
const yelp = require('yelp-fusion');

const clientId="g_UuW46ilnHsr82jGicWIg";
const clientSecret="vRBZkuiYpijxOPsyeGAEQW0aYPSE4EA7zTLzLd8CPmPFqcyUYIVf8Agqr4D23Bsn";
const apiKey="IzvNQibcqvVG37WMU5R7k2M1qgTc8h5wC1o8MfqK7ctCzoj-VWjOIOviOb1cnup0orMqoiCDrxqIb5WldmgL75IHax-ORObCMroTISfAnucMCZdn9IW4_XZkvRo4WnYx";


// yelp.accessToken(clientId, clientSecret).then(response => {
//   console.log(response.jsonBody.access_token);
//   return response.jsonBody.access_token
// }).catch(e => {
//   console.log(e);
// });
 
const client = yelp.client(apiKey);
 
// client.search({
//   term:'Four Barrel Coffee',
//   location: 'san francisco, ca'
// }).then(response => {
//   console.log(response.jsonBody.businesses[0]);
// }).catch(e => {
//   console.log(e);
// });



// client.reviews('gary-danko-san-francisco').then(response => {
//   console.log(response.jsonBody);
// }).catch(e => {
//   console.log(e);
// });


client.phoneSearch({
  phone:'+551130634107'
}).then(response => {
  console.log(response.jsonBody.businesses[0]);
}).catch(e => {
  console.log(e);
});


// {
// 	ReviewId: "RLfuQXFJr4BII9pEAfDqiw",
// 	userName: "Shayla B.",
// 	userLink: "https://www.yelp.com/user_details?userid=LNzUe8fwKeS5HRaxtb55gw",
// 	userLocalion: "East Bay, CA",
// 	userFriendsCount: 114,
// 	userReviewCount: 493,
// 	userPhotoCount: 7934,
// 	rating: "2.0 star rating",
// 	ratingDate: "11/26/2017",
// 	content: "Have been here multiple times, an each one has been a disappointment. The rice is undercooked and the chicken had a burnt taste and and overcooked texture. Beans were undercooked and the cheese was not even melted. I'd recommend going to Taco Sinaloa on the south end of campus if you want a burrito."
// }

function scrape(business) {
	let baseurl = 'https://www.yelp.com/biz/'
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

	      result.reviewId = $(this)
	      .find("div.review")
	      .data("review-id")

	      result.userName = $(this)
	      .find("a.user-display-name")
	      .text()

	       result.userLink = $(this)
	      .find("a.user-display-name")
	      .attr("href")

	      result.userLink = "https://yelp.com" + result.userLink

	       result.userLocation = $(this)
	      .find("li.user-location")
	      .text().trim()

	       result.userFriendsCount = $(this)
	      .find("li.friend-count")
	      .text().trim()

	       result.userReviewCount = $(this)
	      .find("li.review-count")
	      .text().trim()

	       result.userPhotoCount = $(this)
	      .find("li.photo-count")
	      .text().trim()

	       result.rating = $(this)
	      .find("div.i-stars")
	      .attr("title")

	       result.ratingDate = $(this)
	      .find("span.rating-qualifier")
	      .text().trim()

	       result.content = $(this)
	      .find("div.review-content")
	      .children()
	      .nextAll('p')
	      .text().trim()

	      resultArray.push(result);

	  }
    console.log(resultArray);

  });
}

scrape("el-burro-picante-berkeley");
