const db = require("./models");
const mongoose = require("mongoose");

let phrases = "";

let selectedReview = {};


function generateResponse(reviewID) {
    console.log('***generateResponse, id:', reviewID)

    let response = "";
    //Load the review from the database so we can read attributes (length etc, to generate response)
    console.log('db.Reviews.find())');
    db.Review
        .findById(reviewID)
        .exec()
        .then(function(review) {
            //save the review as a variable, so we can do stuff later with it
            selectedReview = review;
            //console.log("ReviewText:", selectedReview.text)
        })
        .then(function(review) {
          //iterate through all phrase categories to build a sentence
          for (var i = 1; i < 5; i++) {
            console.log('for (var i', 'for :', i )
            //find a random greeting phrase
             db.Phrase
            .find({ category: i })    
            .then(res => {
                //select a random response from the phrases
                const randomIndex = Math.floor(Math.random() * res.length);
                //this is the first phrase
                if (res[randomIndex].category === 1) {
                  phrases = res[randomIndex].text;
                }
                else {
                  //this is not the first phrase
                   phrases = phrases + ". " + res[randomIndex].text;
                }
                //insert logic to pick phrase based on attribute of review (length, rating)
                console.log('phrases:', phrases);
            })
            .then (function(req, res) {
              db.Review
                .findOneAndUpdate({ _id: reviewID }, {response_text: phrases})
                
                .catch(err => res.status(422).json(err));
            })
            .catch(err => console.log(err));
            

        } 

      })
        .catch(err => console.log(err));
}


// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reviewbutler", {
        useMongoClient: true
    }
);

const TestID = "5a44421835f71f0d265c7d30";
//const TestID =  5a44421835f71f0d265c7d31

for (var i = 2; i < process.argv.length; i++) {
  generateResponse(process.argv[i]);
  console.log(process.argv[i]);
}