const db = require("./models");
const mongoose = require("mongoose");
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reviewbutler", {
        useMongoClient: true
    }
);

let positiveNoun = "";
let negativeNoun = "";
let phrases = [];
let nounPhrases = [];

generateResponse("RBvn88asafybX7ZCijYzQQ");

//create a review response by selected phrases from DB
function generateResponse(reviewID) {
    
    let selectedReview = {};
    let rating = "";

    // console.log('***generateResponse, id:', reviewID)
    //Load the review from the database so we can read attributes (length etc, to generate response)
    db.Review
        .find({_id: reviewID})
        .exec()
        .then(function(review) {
            console.log("review found");
            //save the review as a variable, so we can do stuff later with it
            selectedReview = review[0];
            // console.log('selectedReview', selectedReview)
            // console.log('L253', 'selectedReview.tags:', selectedReview.tags)
            
            rating = selectedReview.rating;
        })
        .then(function(review) {

            //check if tags exist
            if (selectedReview.tags) {
                console.log("Tags exist");
                
                positiveNoun = getPositiveNoun(selectedReview.tags);
                console.log('positiveNoun', positiveNoun)
                if (positiveNoun) {
                    //5 is a positive phrase
                    findNounPhrase(3, 5, positiveNoun);
                }

                negativeNoun = getNegativeNoun(selectedReview.tags);
                console.log('negativeNoun', negativeNoun)
                if (negativeNoun) {
                    //1 is a negative phrase
                    findNounPhrase(3, 1, negativeNoun);
                }
                
            } else {
                console.log("No Tags Found");
            }

            let positiveResponseCreated = false;
            //iterate through all phrase categories to build a sentence (there is 1,2,3,4,6)
            for (var i = 1; i < 6; i++) {
                //find a random phrase for each category
                //category 3 contains phrases regarding positive (and negative) nouns found in the review
                if (i != 3) {
                    findPhrase(i, rating);
                }
            }
        })
        .then(function(req, res) {
            //wait half a second to ensure all database calls are finished
            setTimeout(function() { updateResponse(reviewID); }, 1000);
        })
        .catch(err => console.log(err));
}

function findPhrase(category, rating) {
    console.log('findPhrase', 'category:', category, 'rating:', rating)
    db.Phrase
        .find({ category: category, rating: rating })
        .exec()
        .then(res => {
            //select a random response from the phrases
            const randomIndex = Math.floor(Math.random() * res.length);
            //this is a phrase relating to a positive noun
            console.log(`findPhrase(${category}) ${res[randomIndex].text}`);
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
                console.log(`nounPhrases[0] ${nounPhrases[0]}`);
                //this is a phrase relating to a positive noun
            } else if (rating === 1) {
                //insert the positive noun into the phrase
                // console.log('findNounPhrase(3 -)', res[randomIndex].text.replace(/-NOUN-/g, noun));
                nounPhrases[1] = res[randomIndex].text.replace(/-NOUN-/g, noun);
                console.log(`nounPhrases[1] ${nounPhrases[1]}`);
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
        const score = tag.sentiment.score || 0;
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
    console.log('L403', 'reviewID:', reviewID)
    console.log(phrases.join());
    db.Review
        .findOneAndUpdate({ _id: reviewID }, { response_text: phrases.join() })
        .catch(err => res.status(422).json(err));

console.log('L408 - all done')
    return;
}


//get the third parameter [2] and run generateReponse() for that parameter and any afer it
//provide an object ID from robo 3t to make this work
for (var i = 2; i < process.argv.length; i++) {
  generateResponse(process.argv[i]);
}