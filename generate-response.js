const db = require("./models");
const mongoose = require("mongoose");

let selectedReview = {};
let response = "";

function generateResponse(reviewID) {
    console.log('***generateResponse, id:', reviewID)

    //Load the review from the database
    console.log('db.Reviews.find())');
    db.Review
        .findById(reviewID)
        .then(res => {
            //Select the first review (for now)
            selectedReview = res;
            console.log("ReviewText:", selectedReview.text)
            let response = "";

            db.Phrase
                .find({ category: "1" })
                .then(res => {
                    //select a random response from the phrases
                    const randomIndex = Math.floor(Math.random() * res.length + 1);
                    const phrase = res[randomIndex];
                    console.log('phrase:', phrase.text);
                    response += phrase.text;

                })
                .catch(err => console.log(err));
            
            console.log('response', response);


        })
        .catch(err => console.log(err));
}

function getPhrase(selectedCategory) {
    console.log('***getPhrase():', selectedCategory)
    db.Phrase
        .find({ category: selectedCategory })
        .then(res => {
            //select a random response from the phrases
            const randomIndex = Math.floor(Math.random() * res.length + 1);
            const phrase = res[randomIndex];
            console.log('phrase:', phrase.text);
            return phrase.text;

        })
        .catch(err => console.log(err));

    return "no phrase found";
}


// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reviewbutler", {
        useMongoClient: true
    }
);

const TestID = "5a430b55883f4506ef3853c5";
generateResponse(TestID);
getPhrase("greeting");