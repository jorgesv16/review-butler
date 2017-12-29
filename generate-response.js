const db = require("./models");
const mongoose = require("mongoose");

let positiveNoun = "";
let negativeNoun = "";
let phrases = "";
let nounPhrases = "";

//create a review response by selected phrases from DB
function generateResponse(reviewID) {

    let selectedReview = {};

    console.log('***generateResponse, id:', reviewID)
    //Load the review from the database so we can read attributes (length etc, to generate response)
    db.Review
        .findById(reviewID)
        .exec()
        .then(function(review) {
            console.log("1 - then()");
            //save the review as a variable, so we can do stuff later with it
            selectedReview = review;
        })
        .then(function(review) {
            console.log("2 - then()");

            //check if tags exist
            if (selectedReview.tags) {
                console.log("Tags exist");
                positiveNoun = getPositiveNoun(selectedReview.tags);
                negativeNoun = getNegativeNoun(selectedReview.tags);
            } else {
                console.log("No Tags Found");
            }

            let positiveResponseCreated = false;
            //iterate through all phrase categories to build a sentence (there is 1,2,3,4,6)
            for (var i = 1; i < 6; i++) {
                let rating = selectedReview.rating;
                console.log('for (var i', 'for :', i)
                //find a random phrase for each category
                //need to insert more logic to pick phrase based on other attributes of a review (length, sentiment? etc)

                //category 3 contains phrases regarding positive (and negative) nouns found in the review
                if (i === 3) {
                    console.log('Index === 3');
                    //check if a positive noun is found
                    if (positiveNoun) {
                        //5 is a positive phrase
                        rating = 5;
                        nounPhrases[0] = findNounPhrase(i, rating);
                    }
                    //check if a negative noun is found
                    else if (negativeNoun) {
                        //1 is a negative phrase
                        rating = 1;
                        nounPhrases[1] = findNounPhrase(i, rating);
                    }

                } else {
                    findPhrase(i,rating);
                }

            }
        })
        .then(function(req, res) {
            // console.log('### Response:', phrases);
            console.log('### phrases.length:', phrases.length);

            db.Review
                .findOneAndUpdate({ _id: reviewID }, { response_text: phrases })
                .catch(err => res.status(422).json(err));
        })
        .catch(err => console.log(err));
}

function findPhrase (category, rating){
    db.Phrase
        .find({ category: 1, rating: 1 })
        .exec()
        .then(res => {
            console.log("findPhrase()");
            //select a random response from the phrases
            const randomIndex = Math.floor(Math.random() * res.length);
            //this is a phrase relating to a positive noun
            phrases[category] = res[randomIndex].text
            console.log('phrases[category]', phrases[category])
        })
        .catch(err => console.log(err));
}


function findNounPhrase (category, rating, noun){
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
                nounPhrases[0] = res[randomIndex].text.replace(/-NOUN-/g, noun);
                console.log('nounPhrases[0]', nounPhrases[0])
                //this is a phrase relating to a positive noun
            } else if (rating === 1) {
                //insert the positive noun into the phrase
                nounPhrases[1] = res[randomIndex].text.replace(/-NOUN-/g, noun);
                console.log('nounPhrases[1]', nounPhrases[1])
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

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reviewbutler", {
        useMongoClient: true
    }
);


//const TestID = "5a44421835f71f0d265c7d30";
//const TestID =  5a44421835f71f0d265c7d31
//ObjectId("5a44421835f71f0d265c7d3a")
//ObjectId("5a44421835f71f0d265c7d39")

//get the third parameter [2] and run generateReponse() for that parameter and any afer it
//provide an object ID from robo 3t to make this work
for (var i = 2; i < process.argv.length; i++) {
    generateResponse(process.argv[i]);

    console.log(process.argv[i]);
}