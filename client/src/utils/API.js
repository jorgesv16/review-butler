import axios from "axios";

export default {

    // Gets all reviews
    getReviews: function() {
      console.log('API.js: getReviews')
        return axios.get("/api/reviews");
    },
    // Gets the review with the given id
    getReview: function(id) {
      console.log('API.js: getReview', 'id:', id)
        return axios.get("/api/reviews/" + id);
    },
    // Deletes the review with the given id
    deleteReview: function(id) {
      console.log('API.js: deleteReview', 'id:', id)
        return axios.delete("/api/reviews/" + id);
    },
    // Saves an article to the database
    saveReview: function(reviewData) {
      console.log('API.js: saveReview', 'reviewData:', reviewData)
        return axios.post("/api/reviews", reviewData);
    },
    // Saves an article to the database
    updateReview: function(id, reviewData) {
      console.log('updateReview', 'id:', id, 'reviewData:', reviewData)
      console.log('API.js: updateReview, ID, reviewData',id, reviewData)
        return axios.put("/api/reviews/" + id, reviewData);
    }
};
