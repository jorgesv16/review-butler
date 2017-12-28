const db = require("./models");
const mongoose = require("mongoose");

let phrases = "";

let selectedReview = {};

//create a review response by selected phrases from DB
function generateResponse(reviewID) {
    console.log('***generateResponse, id:', reviewID)
    //Load the review from the database so we can read attributes (length etc, to generate response)
    db.Review
        .findById(reviewID)
        .exec()
        .then(function(review) {
            //save the review as a variable, so we can do stuff later with it
            selectedReview = review;
        })
        .then(function(review) {
          //iterate through all phrase categories to build a sentence (there is 1,2,3,4)
          for (var i = 1; i < 5; i++) {
            console.log('for (var i', 'for :', i )
            //find a random phrase for each category
            //need to insert logic to pick phrase based on attributes of a review (length, rating etc)
             
            console.log('L28', 'selectedReview.rating:', selectedReview.rating)
             db.Phrase
            .find({ category: i , rating: selectedReview.rating})
            .exec()   
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
            })
            .then (function(req, res) {
              console.log('### Response:', phrases);
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