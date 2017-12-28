//score of the sentiment ranges between -1.0 (negative) and 1.0 (positive) 
// and corresponds to the overall emotional leaning of the text.

//magnitude indicates the overall strength of emotion (both positive and negative)
// within the given text, between 0.0 and +inf. Unlike score, magnitude is not normalized;
// each expression of emotion within the text (both positive and negative) 
//contributes to the text's magnitude (so longer text blocks may have greater magnitudes).



const db = require("../models");
const mongoose = require("mongoose");

// Imports the Google Cloud client library
const language = require('@google-cloud/language');


// Instantiates a client
const client = new language.LanguageServiceClient();

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
}


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
}

//get the third parameter [2] and run getSentences() for that parameter and any afer it
//provide an object ID from robo 3t to make this work

//ObjectId("5a44421835f71f0d265c7d30")
for (var i = 2; i < process.argv.length; i++) {
    getSentences(process.argv[i]);
    getEntities(process.argv[i]);
    console.log(process.argv[i]);
}