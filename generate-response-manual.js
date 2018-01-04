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



let phrases = "";
let selectedReview = {};

//start
getBusinessIDs();

//get the business IDs from the users collection in mongodb
function getBusinessIDs() {
    console.log('getBusinessIDs()')
    db.Review
        .find()
        .then(function(reviewData) {
            for (var i = 0; i < reviewData.length; i++) {
                console.log("about to generateResponse(): ", reviewData[i]._id);
                generateResponse(reviewData[i]._id);
            }
        })
        .catch(function(err) {
            console.log(err)
        });
}

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
             
            console.log('L56', 'selectedReview.rating:', selectedReview.rating)
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
