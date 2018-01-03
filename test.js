
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
  phone:'+14153802525'
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

