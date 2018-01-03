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

// Imports the Google Cloud client library
const language = require('@google-cloud/language');


// Instantiates a client
const client = new language.LanguageServiceClient();


db.User
  .find()
  .then(function(userData) {
    console.log(userData);
    for (var i = 0; i < userData.length; i++) {
      console.log(userData[i].business_id)
      scrape(userData[i].business_id)
    }
  })
  .catch(function(err) { 
    console.log(err)
  });

db.Review
    .find({sentiment_score: null})
    .then(function(userData) {
      console.log(userData);
      for (var i = 0; i < userData.length; i++) {
        console.log(userData[i]._id)
        getSentences(userData[i]._id);
        getEntities(userData[i]._id);
      }
    })
    .catch(function(err) { 
      console.log(err)
});

db.Review
    .find({response_text: ""})
    .then(function(userData) {
      console.log(userData);
      for (var i = 0; i < userData.length; i++) {
        console.log(userData[i]._id)
        generateResponse(userData[i]._id);
      }
    })
    .catch(function(err) { 
      console.log(err)
});


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
      	result.sentiment_score = null;

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

        console.log(reviewDateString);

        result.review_date = moment(reviewDateString, "MM/DD/YYYY").format();
      	result.response_date = "";


      	result.photos = $(this)
      	.find("li.photo-count")
      	.text().trim().split(" ")[0]

      	result.rating = $(this)
      	.find("div.i-stars")
      	.attr("title").split(" ")[0]

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
	    		console.log("Scraping...");
          console.log(dbReview);
          console.log("closing connection...")
          mongoose.disconnect();
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
return true;
};

function getSentences(reviewID) {

    let sentences = {};
    let sentiment = {};

    // Set up promises with mongoose
    mongoose.Promise = global.Promise;
    // Connect to the Mongo DB
    mongoose.connect(
        process.env.MONGODB_URI || "mongodb://localhost/reviewbutler", {
            useMongoClient: true
        }
    );

    db.Review
        .findById(reviewID)
        .exec()
        .then(function(review) {

            const document = {
                content: review.text,
                type: 'PLAIN_TEXT',
            };

            // Detect the sentiment of the review text
            client
                .analyzeSentiment({ document: document })
                .then(results => {
                    //store poveral sentiment
                    sentiment = results[0].documentSentiment;

                    console.log(`Text: ${review.text}`);
                    console.log(`Sentiment score: ${sentiment.score}`);
                    console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
                    //store each sentence
                    sentences = results[0].sentences;
                    // sentences.forEach(sentence => {
                    //     console.log(`Sentence: ${sentence.text.content}`);
                    //     console.log(`  Score: ${sentence.sentiment.score}`);
                    //     console.log(`  Magnitude: ${sentence.sentiment.magnitude}`);
                    // });
                })
                .then(results => {
                    console.log('### Saving Sentences to DB');
                    //save the overal sentiment score and sentences object to DB
                    db.Review
                        .findOneAndUpdate({ _id: reviewID }, { sentiment_score: sentiment.score, sentences_object: sentences })
                        .catch(err => res.status(422).json(err));
                })
                .catch(err => console.log(err));

        })
        .catch(err => {
            console.error('ERROR:', err);
        });
};


function getEntities(reviewID) {

  let entities = {};
    // Set up promises with mongoose
    mongoose.Promise = global.Promise;
    // Connect to the Mongo DB
    mongoose.connect(
        process.env.MONGODB_URI || "mongodb://localhost/reviewbutler", {
            useMongoClient: true
        }
    );

    db.Review
        .findById(reviewID)
        .exec()
        .then(function(review) {

            const document = {
                content: review.text,
                type: 'PLAIN_TEXT',
            };

            // Detects sentiment of entities in the document
            client
                .analyzeEntitySentiment({ document: document })
                .then(results => {
                    entities = results[0].entities;

                    console.log(`Entities and sentiments:`);
                    entities.forEach(entity => {
                        console.log(`  Name: ${entity.name}`);
                        console.log(`  Type: ${entity.type}`);
                        console.log(`  Score: ${entity.sentiment.score}`);
                        console.log(`  Magnitude: ${entity.sentiment.magnitude}`);
                    });
                })
                .then(results => {
                    console.log('### Saving Entities(tags) to DB');
                    //save the overal sentiment score and sentences object to DB
                    db.Review
                        .findOneAndUpdate({ _id: reviewID }, { tags: entities })
                        .catch(err => res.status(422).json(err));
                })
                .catch(err => {
                    console.error('ERROR:', err);
                });
        })
};

let positiveNoun = "";
let negativeNoun = "";
let phrases = [];
let nounPhrases = [];

//create a review response by selected phrases from DB
function generateResponse(reviewID) {

    let selectedReview = {};
    let rating = "";

    // console.log('***generateResponse, id:', reviewID)
    //Load the review from the database so we can read attributes (length etc, to generate response)
    db.Review
        .findById(reviewID)
        .exec()
        .then(function(review) {
            console.log("review found");
            //save the review as a variable, so we can do stuff later with it
            selectedReview = review;
            rating = review.rating;
        })
        .then(function(review) {
            //check if tags exist
            if (selectedReview.tags) {
                console.log("Tags exist");
                positiveNoun = getPositiveNoun(selectedReview.tags);
                console.log('positiveNoun', positiveNoun)
                negativeNoun = getNegativeNoun(selectedReview.tags);
                console.log('negativeNoun', negativeNoun)
            } else {
                console.log("No Tags Found");
            }

            let positiveResponseCreated = false;
            //iterate through all phrase categories to build a sentence (there is 1,2,3,4,6)
            for (var i = 1; i < 6; i++) {
                //find a random phrase for each category
                //need to insert more logic to pick phrase based on other attributes of a review (length, sentiment? etc)

                //category 3 contains phrases regarding positive (and negative) nouns found in the review
                if (i === 3) {
                    // console.log('Index === 3');
                    //check if a positive noun is found
                    if (positiveNoun && !positiveResponseCreated) {
                        //5 is a positive phrase
                        findNounPhrase(i, 5, positiveNoun);
                        // console.log('positive phrase saved')
                        positiveResponseCreated = true;
                        i--;
                    }
                    //check if a negative noun is found
                    else if (negativeNoun) {
                        //1 is a negative phrase
                        findNounPhrase(i, 1, negativeNoun);
                        // console.log('nounPhrases[1]', nounPhrases[1])
                        // console.log('negative phrase saved')
                    }
                    //it is not a phrase related to a specific noun
                } else {
                    findPhrase(i, rating);
                    // console.log('phrases[i]', phrases[i])
                }
            }
        })
        .then(function(req, res) {
            //wait one second to ensure all database calls are finished
            setTimeout(function() { updateResponse(reviewID); }, 500);

        })
        .catch(err => console.log(err));
}

function findPhrase(category, rating) {
    // console.log('findPhrase', 'category:', category, 'rating:', rating)
    db.Phrase
        .find({ category: category, rating: rating })
        .exec()
        .then(res => {
            //select a random response from the phrases
            const randomIndex = Math.floor(Math.random() * res.length);
            //this is a phrase relating to a positive noun
            // console.log(`findPhrase(${category}) ${res[randomIndex].text}`);
            phrases[category] = res[randomIndex].text;
        })
        .catch(err => console.log(err));
}


function findNounPhrase(category, rating, noun) {
    db.Phrase
        .find({ category: category, rating: rating })
        .exec()
        .then(res => {
            //select a random response from the phrases
            const randomIndex = Math.floor(Math.random() * res.length);
            //this is a phrase relating to a positive noun
            if (rating === 5) {
                //insert the positive noun into the phrase
                // console.log('findNounPhrase(3 +)', res[randomIndex].text.replace(/-NOUN-/g, noun));
                nounPhrases[0] = res[randomIndex].text.replace(/-NOUN-/g, noun);
                //this is a phrase relating to a positive noun
            } else if (rating === 1) {
                //insert the positive noun into the phrase
                // console.log('findNounPhrase(3 -)', res[randomIndex].text.replace(/-NOUN-/g, noun));
                nounPhrases[1] = res[randomIndex].text.replace(/-NOUN-/g, noun);
            }
        })
}

function getNegativeNoun(tags) {
    let minScore = -0.5;
    let negativeNoun = "";
    tags.forEach((tag, i) => {
        const score = tag.sentiment.score;
        const noun = tag.name;
        // console.log(`${noun} : ${score}`);
        if (score < minScore) {
            minScore = score;
            negativeNoun = tag.name;
            // console.log('postiveNoun:', negativeNoun)
        }
    })
    return negativeNoun;
}

function getPositiveNoun(tags) {
    let maxScore = 0.5;
    let positiveNoun = "";
    tags.forEach((tag, i) => {
        const score = tag.sentiment.score;
        const noun = tag.name;
        // console.log(`${noun} : ${score}`);
        if (score > maxScore) {
            maxScore = score;
            positiveNoun = tag.name;
            // console.log('postiveNoun:', positiveNoun)
        }
    })
    return positiveNoun;
}

function updateResponse(reviewID) {

    //no phrase to update
    if (phrases.length === 0) {
        console.log('No Phrases');
        return;
    }

    //check if any positive or negative noun phrases
    if (nounPhrases[0]) {
      phrases[3] = nounPhrases[0] + ". ";
    }
    if (nounPhrases[1]) {
      phrases[3] = nounPhrases[1] + ". ";
    }
    //remove the first empty element;
    phrases.shift()
    console.log( phrases.join());
        db.Review
        .findOneAndUpdate({ _id: reviewID }, { response_text: phrases.join() })
        .catch(err => res.status(422).json(err));
}

//ObjectId("5a45a1e86de8340c2cc58c40")

//get the third parameter [2] and run generateReponse() for that parameter and any afer it
//provide an object ID from robo 3t to make this work

