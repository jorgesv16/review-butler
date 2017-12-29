const db = require("./models");
const mongoose = require("mongoose");
const promise = require("bluebird");

mongoose.Promise = global.Promise;

let phrases = [];
let nounPhrases = [];

//create a review response by selecting phrases from DB
function generateResponse(reviewID) {
    let selectedReview = {};
    let positiveNoun = "";
    let negativeNoun = "";


    // Set up promises with mongoose
    mongoose.Promise = global.Promise;
    // Connect to the Mongo DB
    mongoose.connect(
        process.env.MONGODB_URI || "mongodb://localhost/reviewbutler", {
            useMongoClient: true
        }
    );

    console.log('generateResponse', 'reviewID:', reviewID)

    //Load the review from the database so we can read attributes (rating, length etc, to generate response)
    db.Review
        .findById(reviewID)
        .exec()
        .then(function(review) {
            selectedReview = review;
            //check if tags exist
            if (review.tags) {
                console.log("Tags exist");
                positiveNoun = getPositiveNoun(review.tags);
                negativeNoun = getNegativeNoun(review.tags);
            } else {
                console.log("No Tags Found");
            }
        })
        //once loaded find phrases
        .then(function(review) {
            for (var i = 1; i < 6; i++) {
                console.log("index: ", i)
                if (i === 3) {
                    if (positiveNoun) {
                        nounPhrases[0] = findNounPhrase(i, 5, positiveNoun);
                        console.log('nounPhrase[0]', nounPhrases[0])
                    }
                    if (negativeNoun) {
                        nounPhrases[1] = findNounPhrase(i, 5, positiveNoun);
                        console.log('nounPhrase[1]', nounPhrases[1])
                    }
                } else {
                    phrases[i] = findPhrase(i, selectedReview.rating)
                }
                db.Review
                    .findById(reviewID)
                    .exec()
                    .then(function(review) {
                        console.log("2 - then()");
                    })
                    .then(function(review) {
                        db.Review
                            .findById(reviewID)
                            .exec()
                            .then(function(review) {
                                console.log("3 - then()");
                            })
                            .then(function(review) {

                                phrases.forEach(function(phrase) {
                                    console.log(`phrase: ${phrase}`)
                                });




                            })
                            .catch(err => console.log(err));
                    })

            }

        })
        .catch(err => console.log(err));

    console.log('end of function')

}

function findPhrase(category, rating) {
    db.Phrase
        .find({ category: 1, rating: 1 })
        .exec()
        .then(res => {
            console.log("findPhrase()");
            //select a random response from the phrases
            const randomIndex = Math.floor(Math.random() * res.length);
            //this is a phrase relating to a positive noun
            return res[randomIndex].text
        })
        .catch(err => console.log(err));
}


function findNounPhrase(category, rating, noun) {
    db.Phrase
        .find({ category: category, rating: rating })
        .exec()
        .then(res => {
            console.log("findNounPhrase()");
            //select a random response from the phrases
            const randomIndex = Math.floor(Math.random() * res.length);
            //this is a phrase relating to a positive noun
            if (rating === 5) {
                //insert the positive noun into the phrase
                return res[randomIndex].text.replace(/-NOUN-/g, noun);
                //this is a phrase relating to a positive noun
            } else if (rating === 1) {
                //insert the positive noun into the phrase
                return res[randomIndex].text.replace(/-NOUN-/g, noun);
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
    console.log('return negativeNoun:', negativeNoun)
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
    console.log('return positiveNoun:', positiveNoun)
    return positiveNoun;
}

function promiseTest() {
    let categories = [1, 2, 3, 4, 5];
    var promises = categories.map(category => {
        return new Promise((resolve, reject) => {
            console.log(`category: ${category}`);
            const phrase = findPhrase(category, 5);
            resolve(phrase);
        })

    });

    Promise.all(promises).then(function(values) {
        console.log(values)
    });
}


//get the third parameter [2] and run generateReponse() for that parameter and any afer it
//provide an object ID from robo 3t to make this work
for (var i = 2; i < process.argv.length; i++) {
    promiseTest();
    // generateResponse(process.argv[i]);
    // console.log(process.argv[i]);
}