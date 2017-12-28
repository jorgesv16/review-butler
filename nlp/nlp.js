const db = require("../models");
const mongoose = require("mongoose");

// Imports the Google Cloud client library
const language = require('@google-cloud/language');


// Instantiates a client
const client = new language.LanguageServiceClient();

function getSentences(reviewID) {

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

            // Detect the sentiment of the reviw text
            client
                .analyzeSentiment({ document: document })
                .then(results => {
                    const sentiment = results[0].documentSentiment;

                    console.log(`Text: ${review.text}`);
                    console.log(`Sentiment score: ${sentiment.score}`);
                    console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
                })
                .catch(err => {
                    console.error('ERROR:', err);
                });
        });
    //get the third parameter [2] and run getSentences() for that parameter and any afer it
    //provide an object ID from robo 3t to make this work
}

//ObjectId("5a44421835f71f0d265c7d30")
for (var i = 2; i < process.argv.length; i++) {
    getSentences(process.argv[i]);
    console.log(process.argv[i]);
}