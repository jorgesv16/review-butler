const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Reviews collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reviewbutler",
  {
    useMongoClient: true
  }
);

const phraseSeed = [
{text:'Hi',writing_style:'casual',category:1,length_type:1,rating:3},
{text:'Hi',writing_style:'casual',category:1,length_type:1,rating:2},
{text:'Hi',writing_style:'casual',category:1,length_type:1,rating:4},
{text:'Thank you for taking the time to share your feedback',writing_style:'formal',category:1,length_type:5,rating:1},
{text:'Thank you for taking the time to share your feedback',writing_style:'formal',category:1,length_type:5,rating:2},
{text:'Thank you for taking the time to share your feedback',writing_style:'formal',category:1,length_type:5,rating:3},
{text:'Thank you for taking the time to share your feedback',writing_style:'formal',category:1,length_type:5,rating:4},
{text:'Thank you for taking the time to share your feedback',writing_style:'formal',category:1,length_type:5,rating:5},
{text:'Thank you for taking the time to share your experience',writing_style:'formal',category:1,length_type:5,rating:1},
{text:'Thank you for taking the time to share your experience',writing_style:'formal',category:1,length_type:5,rating:2},
{text:'Thank you for taking the time to share your experience',writing_style:'formal',category:1,length_type:5,rating:3},
{text:'Thank you for taking the time to share your experience',writing_style:'formal',category:1,length_type:5,rating:4},
{text:'Thank you for taking the time to share your experience',writing_style:'formal',category:1,length_type:5,rating:5},
{text:'Thanks for your review',writing_style:'casual',category:1,length_type:1,rating:3},
{text:'Thanks for your review',writing_style:'casual',category:1,length_type:1,rating:4},
{text:'Thanks for your review',writing_style:'casual',category:1,length_type:1,rating:5},
{text:'Thanks for the comments',writing_style:'casual',category:1,length_type:2,rating:2},
{text:'Thanks for the comments',writing_style:'casual',category:1,length_type:2,rating:3},
{text:'Thanks for the comments',writing_style:'casual',category:1,length_type:2,rating:4},
{text:'Thanks for the comments',writing_style:'casual',category:1,length_type:2,rating:5},
{text:'Thanks for sharing your experience',writing_style:'casual',category:1,length_type:3,rating:3},
{text:'Thanks for sharing your experience',writing_style:'casual',category:1,length_type:3,rating:4},
{text:'Thanks for sharing your experience',writing_style:'casual',category:1,length_type:3,rating:5},
{text:'Thanks for sharing your feedback',writing_style:'casual',category:1,length_type:3,rating:3},
{text:'Thanks for sharing your feedback',writing_style:'casual',category:1,length_type:3,rating:4},
{text:'Thanks for sharing your feedback',writing_style:'casual',category:1,length_type:3,rating:5},
{text:'Thank you for your review',writing_style:'formal',category:1,length_type:3,rating:2},
{text:'Thank you for your review',writing_style:'formal',category:1,length_type:3,rating:3},
{text:'Thank you for your review',writing_style:'formal',category:1,length_type:3,rating:4},
{text:'Thank you for the feedback from your visit',writing_style:'',category:1,length_type:3,rating:1},
{text:'Thank you for the feedback from your visit',writing_style:'',category:1,length_type:3,rating:2},
{text:'Thank you for the feedback from your visit',writing_style:'',category:1,length_type:3,rating:3},
{text:'Thank you for the feedback from your visit',writing_style:'',category:1,length_type:3,rating:4},
{text:'Thanks for sharing your feedback from your visit',writing_style:'',category:1,length_type:4,rating:3},
{text:'Thanks for sharing your feedback from your visit',writing_style:'',category:1,length_type:4,rating:4},
{text:'Thanks for sharing your feedback from your visit',writing_style:'',category:1,length_type:4,rating:5},
{text:'Thanks for your excellent review',writing_style:'',category:1,length_type:3,rating:4},
{text:'Thanks for your excellent review',writing_style:'',category:1,length_type:3,rating:5},
{text:'Thank you for your comments',writing_style:'',category:1,length_type:3,rating:1},
{text:'Thank you for your comments',writing_style:'',category:1,length_type:3,rating:2},
{text:'Thank you for your comments',writing_style:'',category:1,length_type:3,rating:3},
{text:'Apologies about the experience that you had',writing_style:'',category:2,length_type:3,rating:1},
{text:'Apologies about the experience that you had',writing_style:'',category:2,length_type:3,rating:2},
{text:'I\'m glad you enjoyed your visit',writing_style:'',category:2,length_type:3,rating:4},
{text:'I\'m glad you enjoyed your experience',writing_style:'',category:2,length_type:3,rating:4},
{text:'I\'m glad you enjoyed your visit',writing_style:'',category:2,length_type:3,rating:5},
{text:'I\'m glad you enjoyed your experience',writing_style:'',category:2,length_type:3,rating:5},
{text:'We work really hard to offer the best experience for our customers so I\'m grateful to see that you enjoyed your visit',writing_style:'formal',category:2,length_type:5,rating:5},
{text:'I’m glad you enjoyed the -NOUN-',writing_style:'',category:3,length_type:3,rating:5},
{text:'I appreciate your comments about the -NOUN-',writing_style:'formal',category:3,length_type:3,rating:5},
{text:'I love to read that you enjoyed the -NOUN-',writing_style:'casual',category:3,length_type:3,rating:5},
{text:'We work really hard to offer the best experience for our guests so I\'m grateful to see that you enjoyed the -NOUN-',writing_style:'',category:3,length_type:3,rating:5},
{text:'It was nice to read about your experience with our -NOUN-',writing_style:'',category:3,length_type:5,rating:5},
{text:'Many of our guests comment on our excellent -NOUN-, so I\'m glad you did too',writing_style:'forma',category:3,length_type:5,rating:5},
{text:'Apologies about the -NOUN- this is far below the standard that we set ourselves. We hope to have the opportunity to show you the quality of service that we are known for',writing_style:'',category:3,length_type:5,rating:1},
{text:'The management of INSERT BUSINESS NAME take your issue of the -NOUN- seriously',writing_style:'formal',category:3,length_type:3,rating:1},
{text:'With regard to your concern about the -NOUN-, INSERT CUSTOM RESPONSE',writing_style:'',category:3,length_type:3,rating:1},
{text:'I was very disappointed to read of your experience during your visit. The issue of the -NOUN- is certainly not acceptable and we have put procedures in place to prevent this happening in the future',writing_style:'formal',category:3,length_type:5,rating:1},
{text:'Thank you for informing us about the -NOUN-. It is only through feedback such as yours that we are able to maintain and indeed, where necessary, improve upon the service that we provide to our valued guests.',writing_style:'formal',category:3,length_type:5,rating:1},
{text:'Thank you for informing us about the -NOUN-. We hope we have the opportunity to show you an improvement in our -NOUN- on your next visit',writing_style:'',category:3,length_type:5,rating:1},
{text:'I appreciate your feedback on the -NOUN-, I have spoken to the staff regarding this matter.',writing_style:'',category:3,length_type:3,rating:1},
{text:'We hope to see you back soon',writing_style:'casual',category:4,length_type:3,rating:3},
{text:'We hope to see you back soon',writing_style:'casual',category:4,length_type:3,rating:4},
{text:'We hope to see you back soon',writing_style:'casual',category:4,length_type:3,rating:5},
{text:'Thanks again for your review',writing_style:'casual',category:4,length_type:3,rating:3},
{text:'Thanks again for your review',writing_style:'casual',category:4,length_type:3,rating:4},
{text:'Thanks again for your review',writing_style:'casual',category:4,length_type:3,rating:5},
{text:'Thanks again for your review, I have passed on your comments to our team',writing_style:'',category:4,length_type:5,rating:3},
{text:'Thanks again for your review, I have passed on your comments to our team',writing_style:'',category:4,length_type:5,rating:4},
{text:'Thanks again for your review, I have passed on your comments to our team',category:4,length_type:5,rating:5},
{text:'We look forward to seeing you again',writing_style:'formal',category:4,length_type:3,rating:4},
{text:'We look forward to seeing you again',writing_style:'formal',category:4,length_type:3,rating:5},
{text:'We hope to see you soon',writing_style:'',category:4,length_type:2,rating:3},
{text:'We hope to see you soon',writing_style:'',category:4,length_type:2,rating:4},
{text:'We hope to see you soon',writing_style:'',category:4,length_type:2,rating:5},
{text:'Thanks again for your feedback',writing_style:'casual',category:4,length_type:3,rating:2},
{text:'Thanks again for your feedback',writing_style:'casual',category:4,length_type:3,rating:3},
{text:'Thanks again for your feedback',writing_style:'casual',category:4,length_type:3,rating:4},
{text:'Thanks again for your comments',writing_style:'casual',category:4,length_type:3,rating:3},
{text:'Thanks again for your comments',writing_style:'casual',category:4,length_type:3,rating:4},
{text:'Thanks again for your comments',writing_style:'casual',category:4,length_type:3,rating:5},
{text:'We look forward to welcoming back for your next visit',writing_style:'formal',category:4,length_type:5,rating:4},
{text:'We look forward to welcoming back for your next visit',writing_style:'formal',category:4,length_type:5,rating:5},
{text:'Thanks again for reaching out',writing_style:'casual',category:4,length_type:3,rating:2},
{text:'Thanks again for reaching out',writing_style:'casual',category:4,length_type:3,rating:3},
{text:'Thanks again for reaching out',writing_style:'casual',category:4,length_type:3,rating:4},
{text:'We hope to have the opportunity to show you the level of service that we are known for',writing_style:'formal',category:4,length_type:5,rating:1},
{text:'We hope to have the opportunity to show you the level of service that we are known for.',writing_style:'formal',category:4,length_type:5,rating:2},
{text:'Once again, I apologise for the experience you received',writing_style:'formal',category:4,length_type:5,rating:1},
{text:'Once again, I apologise for the experience you received',writing_style:'formal',category:4,length_type:5,rating:2},
{text:'Thanks,',writing_style:'casual',category:5,length_type:1,rating:1},
{text:'Thanks,',writing_style:'casual',category:5,length_type:1,rating:2},
{text:'Thanks,',writing_style:'casual',category:5,length_type:1,rating:3},
{text:'Thanks,',writing_style:'casual',category:5,length_type:1,rating:4},
{text:'Thanks,',writing_style:'casual',category:5,length_type:1,rating:5},
{text:'Kind Regards,',writing_style:'formal',category:5,length_type:1,rating:1},
{text:'Kind Regards,',writing_style:'formal',category:5,length_type:1,rating:2},
{text:'Kind Regards,',writing_style:'formal',category:5,length_type:1,rating:3},
{text:'Kind Regards,',writing_style:'formal',category:5,length_type:1,rating:4},
{text:'Kind Regards,',writing_style:'formal',category:5,length_type:1,rating:5},
{text:'Sincerely,',writing_style:'formal',category:5,length_type:1,rating:1},
{text:'Sincerely,',writing_style:'formal',category:5,length_type:1,rating:2},
{text:'Sincerely,',writing_style:'formal',category:5,length_type:1,rating:3},
{text:'Sincerely,',writing_style:'formal',category:5,length_type:1,rating:4},
{text:'Sincerely,',writing_style:'formal',category:5,length_type:1,rating:5}
];

db.Phrase
  .remove({})
  .then(() => db.Phrase.collection.insertMany(phraseSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  const userSeed = [
{username:'Piatti',password:'',first_name:"Piatti",last_name:" ",phone:"+14153802525", email: "piatti@piatti.com", address: "", platform_url: " ", display_name: "Piatti", url: " ", display_occupation: " ", business_id: "piatti-mill-valley-3", reviews: " "},
{username:'Soul Food',password:'',first_name:" ",last_name:" ",phone:"+14154514765", email: "piatti@piatti.com", address: "", platform_url: " ", display_name: "Piatti", url: " ", display_occupation: " ", business_id: "sol-food-san-rafael-3", reviews: " "},
{username:'Cafe del Soul',password:'',first_name:" ",last_name:" ",phone:"+14154575400", email: "piatti@piatti.com", address: "", platform_url: " ", display_name: "Piatti", url: " ", display_occupation: " ", business_id: "cafe-del-soul-san-rafael-2", reviews: " "}
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });