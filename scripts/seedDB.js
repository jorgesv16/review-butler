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

  const userSeed = [{
    "_id" : "5a4d4e2de3f93f0e151833f6",
    "salt" : "0872b17b913a2457636e4cd4f91fc78fe6d2ced2b7e785a4eec3ffb8766990b4",
    "hash" : "2b66ed0eff67337f73d7f3895c5be7f44fca9627db76500dbef1507a9bd8e913769d1a1c76172b5a65d28e868d40ccad6701ea297526edeb0bb7e93bb61597be13a88f5d5761f59cf3ee1ff7cd1f4f3a38d9892e971be82474290a42db79192535b4cb6f5d0b4912fbf692b86bca4eb8318895588e74437bdf1fd6c79b175f6d3bf3186cb09a65b51ff6578ed2c1f36a6f45277be465a5b9d0e2cc27e79e5694bd23fc78f48ff54be6ff2bff15b4d23d648163a947eddc1416455b98450bac44c182bf53177a58dab3d1ebf70f58d389ed362abaffb73ec2393d031f02a577491f08135a94b4eae301b9a617be3b37d68a91d76c6fbd8ee9b4d48297f4f1e9e94e543d838bbc8184d0d66fd0c760fc3e441c707cff12e880a78f815cc388ed43bd3de6c05487c6cf225b96480af02ac4f8643ffada394ef3b7eb9297ea7876f287299558d88c597b95bc9cc664f0d7d4247dd4a5c5995f0a6e9f21474940a2058ccc92c4d9709281708550ea5fa7c4db87ffbd63eebd895947a542900d84be3f246f3ac631e7a3f331634b2bdee7862d2e70ac3eda7769ce27383f2d67485d64419c6cb32afcfe71f287f9c32953b65d9a633cb8cff38ad43e1c3adcca8104daad8efb93907706c287b6afec04e05a7a6001a5c586f06a0729448143767b0f093e034fae2ade111ee28ad7aa01d88ee4b297e960f4df61a505255f1b73205bc1",
    "first_name" : "John",
    "last_name" : "Smith",
    "email" : "vu@busy.com",
    "phone" : "123",
    "business_id" : "ks-internet-cafe-berkeley",
    "username" : "a",
    "password" : "$2a$10$kMzB/np9zESWN403ZnjcfejEsoBBcABfktnHzEB3A8yobF1aimW1m",
    "reviews" : [],
    "__v" : 0
}];

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
const reviewSeed = [
/* 1 */
{
    "_id" : "5a4e7bf4651dfbd5bed84678",
    "external_id" : "0u0cETyb4BlPnO3aRisVSw",
    "tags" : [ 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.397521704435349,
            "type" : "OTHER",
            "name" : "spot",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "spot"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.299112975597382,
            "type" : "EVENT",
            "name" : "class",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "class"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.170617029070854,
            "type" : "OTHER",
            "name" : "cup",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "cup"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.132748275995255,
            "type" : "OTHER",
            "name" : "coffee",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee"
                    }
                }
            ]
        }
    ],
    "sentiment_score" : 0.5,
    "text" : "I like that I don't have to walk too far. It's nice clean and safe spot to get a cup of coffee right before class and reasonably priced.",
    "word_count" : 28,
    "title" : "I like that I don't",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : 0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I like that I don't have to walk too far."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "It's nice clean and safe spot to get a cup of coffee right before class and reasonably priced."
            }
        }
    ],
    "review_date" : Date("2020-10-05T07:00:00.000Z"),
    "response_date" : null,
    "photos" : 10,
    "rating" : 5,
    "user_name" : "Fashions M.",
    "platform" : "Yelp",
    "response_text" : "Thanks for sharing your experience, We work really hard to offer the best experience for our guests so I'm grateful to see that you enjoyed the spot. ,Thanks again for your comments,Kind Regards,",
    "review_read" : null,
    "business_id" : "ks-internet-cafe-berkeley",
    "timestamp" : Date("2018-01-04T19:09:39.681Z"),
    "__v" : 0
},{
    "_id" : "5a4e7bf4651dfbd5bed8467a",
    "external_id" : "geuSRyQycl1dgs81J6mEfA",
    "tags" : [ 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.597265601158142,
            "type" : "OTHER",
            "name" : "bagel",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "bagel"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.181095749139786,
            "type" : "LOCATION",
            "name" : "bagel street cafe",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "bagel street cafe"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.166153430938721,
            "type" : "OTHER",
            "name" : "blocks",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "blocks"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.055485226213932,
            "type" : "OTHER",
            "name" : "price",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "price"
                    }
                }
            ]
        }
    ],
    "sentiment_score" : -0.200000002980232,
    "text" : "Charged me $4.50 for an unprepared bagel. I can get that from bagel street cafe two blocks away for 1/3 the price, lol. Won't be back.",
    "word_count" : 26,
    "title" : "Charged me $4.50 for an",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Charged me $4.50 for an unprepared bagel."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I can get that from bagel street cafe two blocks away for 1/3 the price, lol."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Won't be back."
            }
        }
    ],
    "review_date" : Date("2020-09-13T07:00:00.000Z"),
    "response_date" : null,
    "photos" : 3,
    "rating" : 1,
    "user_name" : "Jade M.",
    "platform" : "Yelp",
    "response_text" : "Thank you for your comments,Apologies about the bagel this is far below the standard that we set ourselves. We hope to have the opportunity to show you the quality of service that we are known for. ,Once again, I apologise for the experience you received,Thanks,",
    "review_read" : null,
    "business_id" : "ks-internet-cafe-berkeley",
    "timestamp" : Date("2018-01-04T19:09:39.702Z"),
    "__v" : 0
},{
    "_id" : "5a4e7bf4651dfbd5bed8467c",
    "external_id" : "ftyqh8Siwstzx9dzhbRhQw",
    "tags" : [ 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.537837445735931,
            "type" : "OTHER",
            "name" : "fact",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "fact"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "door"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0.300000011920929
            },
            "salience" : 0.150092750787735,
            "type" : "PERSON",
            "name" : "guy",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "guy"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0.300000011920929
            },
            "salience" : 0.0610183887183666,
            "type" : "OTHER",
            "name" : "iced tea portion cup",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "iced tea portion cup"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : -0.300000011920929,
                        "magnitude" : 0.300000011920929
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "smh"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0568932183086872,
            "type" : "ORGANIZATION",
            "name" : "mySchool BCC",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "mySchool BCC"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0179053880274296,
            "type" : "OTHER",
            "name" : "bagel",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "bagel"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0177671760320663,
            "type" : "OTHER",
            "name" : "menu",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "menu"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0166843626648188,
            "type" : "OTHER",
            "name" : "items",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "items"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "salience" : 0.0150136798620224,
            "type" : "OTHER",
            "name" : "raisin bagel",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.400000005960464,
                        "magnitude" : 0.400000005960464
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "raisin bagel"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0148217501118779,
            "type" : "OTHER",
            "name" : "kind",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "kind"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "salience" : 0.0137466881424189,
            "type" : "OTHER",
            "name" : "bagel",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.300000011920929,
                        "magnitude" : 0.300000011920929
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "bagel"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0136638507246971,
            "type" : "OTHER",
            "name" : "raisin",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "raisin"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0136638507246971,
            "type" : "OTHER",
            "name" : "iced tea",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "iced tea"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0127420732751489,
            "type" : "PERSON",
            "name" : "berry",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "berry"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0126906223595142,
            "type" : "LOCATION",
            "name" : "Thai",
            "metadata" : {
                "wikipedia_url" : "https://en.wikipedia.org/wiki/Thai_cuisine",
                "mid" : "/m/07hxn"
            },
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Thai"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : 0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Thai"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0119636030867696,
            "type" : "OTHER",
            "name" : "counter",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "counter"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0109525378793478,
            "type" : "OTHER",
            "name" : "attitude",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "attitude"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0109525378793478,
            "type" : "OTHER",
            "name" : "reply",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "reply"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00799071416258812,
            "type" : "OTHER",
            "name" : "cup",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "cup"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00359934405423701,
            "type" : "OTHER",
            "name" : "strawberry cream cheese",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "strawberry cream cheese"
                    }
                }
            ]
        }
    ],
    "sentiment_score" : -0.100000001490116,
    "text" : "It's convenient due to the fact it's next door to mySchool BCC. But other than that the items on the menu are over priced. Ordered a medium Thai iced tea and a raisin bagel, I was unsure if the bagel was blue berry or raisin so I asked the guy behind the counter what kind of bagel is it he had an attitude and was snappy with his reply, then, when I asked if he had strawberry cream cheese he seemed even more agitated. Oh! And the medium Thai iced tea portion cup is not a medium sized cup it's a small smh which cost me $3.50.",
    "word_count" : 107,
    "title" : "It's convenient due to the",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "It's convenient due to the fact it's next door to mySchool BCC."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "But other than that the items on the menu are over priced."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Ordered a medium Thai iced tea and a raisin bagel, I was unsure if the bagel was blue berry or raisin so I asked the guy behind the counter what kind of bagel is it he had an attitude and was snappy with his reply, then, when I asked if he had strawberry cream cheese he seemed even more agitated."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Oh!"
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "And the medium Thai iced tea portion cup is not a medium sized cup it's a small smh which cost me $3.50."
            }
        }
    ],
    "review_date" : Date("2020-01-23T08:00:00.000Z"),
    "response_date" : Date("2018-01-04T20:09:17.528Z"),
    "photos" : 12,
    "rating" : 2,
    "user_name" : "Tay B.",
    "platform" : "Yelp",
    "response_text" : "Thank you for your comments,Apologies about the experience that you had,,Thanks again for your feedback,Kind Regards,",
    "review_read" : null,
    "business_id" : "ks-internet-cafe-berkeley",
    "timestamp" : Date("2018-01-04T19:09:39.714Z"),
    "__v" : 0
},{
    "_id" : "5a4e7bf4651dfbd5bed8467e",
    "external_id" : "31tE8wDw2NTBlcPtc9LISw",
    "tags" : [ 
        {
            "sentiment" : {
                "score" : 0.400000005960464,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.365271866321564,
            "type" : "OTHER",
            "name" : "place",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "place"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.11542359739542,
            "type" : "PERSON",
            "name" : "students",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "students"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.11542359739542,
            "type" : "PERSON",
            "name" : "neighbors",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "neighbors"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0926016345620155,
            "type" : "PERSON",
            "name" : "friend",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "friend"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "friend"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0793628767132759,
            "type" : "ORGANIZATION",
            "name" : "Berkeley City College",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Berkeley City College"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.400000005960464,
                "magnitude" : 1.29999995231628
            },
            "salience" : 0.0557169951498508,
            "type" : "OTHER",
            "name" : "place",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "place"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.0265017636120319,
            "type" : "LOCATION",
            "name" : "cafe",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "cafe"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0217888951301575,
            "type" : "OTHER",
            "name" : "class",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "class"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0183463972061872,
            "type" : "OTHER",
            "name" : "peanut butter cookie",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "peanut butter cookie"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0183463972061872,
            "type" : "CONSUMER_GOOD",
            "name" : "oatmeal cookie",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "oatmeal cookie"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0166972577571869,
            "type" : "OTHER",
            "name" : "hot chocolate",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "hot chocolate"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "salience" : 0.0146730337291956,
            "type" : "OTHER",
            "name" : "internet",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.400000005960464,
                        "magnitude" : 0.400000005960464
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "internet"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0133469244465232,
            "type" : "OTHER",
            "name" : "bit",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "bit"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0113056609407067,
            "type" : "OTHER",
            "name" : "college",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "college"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.00989619083702564,
            "type" : "OTHER",
            "name" : "snack",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "snack"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.00728005031123757,
            "type" : "OTHER",
            "name" : "cookies",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "cookies"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00685852998867631,
            "type" : "OTHER",
            "name" : "convenience",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "convenience"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00595970591530204,
            "type" : "OTHER",
            "name" : "hot chocolate",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "hot chocolate"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.00519862957298756,
            "type" : "OTHER",
            "name" : "Service",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Service"
                    }
                }
            ]
        }
    ],
    "sentiment_score" : 0,
    "text" : "This place is convenient for students as it neighbors Berkeley City College. I came here around 8pm on a Wednesday while waiting for my friend to finish his class. The cafe is warm and cozy and offers free internet. I decided to order an oatmeal cookie for myself, a peanut butter cookie for my friend, and a small hot chocolate. Total came out to $7.05, a bit overpriced in my opinion.The cookies were stale. They didn't seem fresh and were not worth $2 each. The hot chocolate was mediocre. Overall, 2/5. Service was quick. This place is nice if you're at the college and want a quick snack; however, besides its convenience I don't really find it to be that great.",
    "word_count" : 121,
    "title" : "This place is convenient for",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : 0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "This place is convenient for students as it neighbors Berkeley City College."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I came here around 8pm on a Wednesday while waiting for my friend to finish his class."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The cafe is warm and cozy and offers free internet."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I decided to order an oatmeal cookie for myself, a peanut butter cookie for my friend, and a small hot chocolate."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Total came out to $7.05, a bit overpriced in my opinion.The cookies were stale."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "They didn't seem fresh and were not worth $2 each."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The hot chocolate was mediocre."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Overall, 2/5."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.5,
                "magnitude" : 0.5
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Service was quick."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "This place is nice if you're at the college and want a quick snack; however, besides its convenience I don't really find it to be that great."
            }
        }
    ],
    "review_date" : Date("2020-12-01T08:00:00.000Z"),
    "response_date" : null,
    "photos" : 164,
    "rating" : 2,
    "user_name" : "Pariya N.",
    "platform" : "Yelp",
    "response_text" : "Thank you for taking the time to share your feedback,Apologies about the experience that you had,Thank you for informing us about the cookies. We hope we have the opportunity to show you an improvement in our cookies on your next visit. ,Thanks again for reaching out,Kind Regards,",
    "review_read" : null,
    "business_id" : "ks-internet-cafe-berkeley",
    "timestamp" : Date("2018-01-04T19:09:39.725Z"),
    "__v" : 0
},{
    "_id" : "5a4e7bf4651dfbd5bed84680",
    "external_id" : "VOtmV1Qe3nAaNHhXErpnGg",
    "tags" : [ 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.588032007217407,
            "type" : "EVENT",
            "name" : "class",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "class"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.115311019122601,
            "type" : "OTHER",
            "name" : "variety",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "variety"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "salience" : 0.0782788321375847,
            "type" : "OTHER",
            "name" : "food",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.400000005960464,
                        "magnitude" : 0.400000005960464
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "food"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0782788321375847,
            "type" : "OTHER",
            "name" : "beef piroshki",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "beef piroshki"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "salience" : 0.066999539732933,
            "type" : "CONSUMER_GOOD",
            "name" : "espresso drinks",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.300000011920929,
                        "magnitude" : 0.300000011920929
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "espresso drinks"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.045204047113657,
            "type" : "OTHER",
            "name" : "Service",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Service"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.013947855681181,
            "type" : "ORGANIZATION",
            "name" : "peets",
            "metadata" : {
                "mid" : "/m/04_zkn",
                "wikipedia_url" : "https://en.wikipedia.org/wiki/Peet%27s_Coffee"
            },
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "peets"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.013947855681181,
            "type" : "ORGANIZATION",
            "name" : "starbucks",
            "metadata" : {
                "mid" : "/m/018c_r",
                "wikipedia_url" : "https://en.wikipedia.org/wiki/Starbucks"
            },
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "starbucks"
                    }
                }
            ]
        }
    ],
    "sentiment_score" : 0.5,
    "text" : "I come here occasionally before class. I've had a variety of their food and it's always yummy, especially their beef piroshki. Their espresso drinks are stronger than you'd get at peets or starbucks, and I think it's reasonably priced! Service is fast too.",
    "word_count" : 43,
    "title" : "I come here occasionally before",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I come here occasionally before class."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I've had a variety of their food and it's always yummy, especially their beef piroshki."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Their espresso drinks are stronger than you'd get at peets or starbucks, and I think it's reasonably priced!"
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Service is fast too."
            }
        }
    ],
    "review_date" : Date("2020-01-04T08:00:00.000Z"),
    "response_date" : null,
    "photos" : null,
    "rating" : 5,
    "user_name" : "Philip H.",
    "platform" : "Yelp",
    "response_text" : "Thank you for taking the time to share your experience,I'm glad you enjoyed your visit,I love to read that you enjoyed the Service. ,We look forward to seeing you again,Thanks,",
    "review_read" : null,
    "business_id" : "ks-internet-cafe-berkeley",
    "timestamp" : Date("2018-01-04T19:09:39.740Z"),
    "__v" : 0
},{
    "_id" : "5a4e7bf4651dfbd5bed84682",
    "external_id" : "o0X1yxm0az1j4FakQi9Jjw",
    "tags" : [ 
        {
            "sentiment" : {
                "score" : 0.5,
                "magnitude" : 1.70000004768372
            },
            "salience" : 0.390371918678284,
            "type" : "LOCATION",
            "name" : "stop",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "stop"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.113719962537289,
            "type" : "OTHER",
            "name" : "business",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "business"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0892141461372375,
            "type" : "ORGANIZATION",
            "name" : "BCC",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "BCC"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "BCC"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 1.70000004768372
            },
            "salience" : 0.0847624540328979,
            "type" : "PERSON",
            "name" : "folks",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.200000002980232,
                        "magnitude" : 0.200000002980232
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "folks"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0598212890326977,
            "type" : "LOCATION",
            "name" : "cafe",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "cafe"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0461415611207485,
            "type" : "OTHER",
            "name" : "business",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "business"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.200000002980232
            },
            "salience" : 0.0215514283627272,
            "type" : "PERSON",
            "name" : "Homeboys",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.200000002980232,
                        "magnitude" : 0.200000002980232
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Homeboys"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0213148090988398,
            "type" : "OTHER",
            "name" : "coffee",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.0186643209308386,
            "type" : "OTHER",
            "name" : "brews",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "brews"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "salience" : 0.0186643209308386,
            "type" : "OTHER",
            "name" : "drinks",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.699999988079071,
                        "magnitude" : 0.699999988079071
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "drinks"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "salience" : 0.0145942820236087,
            "type" : "OTHER",
            "name" : "classes",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.200000002980232,
                        "magnitude" : 0.200000002980232
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "classes"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0143460314720869,
            "type" : "OTHER",
            "name" : "counter",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "counter"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "salience" : 0.0130481636151671,
            "type" : "OTHER",
            "name" : "lunch time rush",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.300000011920929,
                        "magnitude" : 0.300000011920929
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "lunch time rush"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0117466524243355,
            "type" : "PERSON",
            "name" : "workers",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "workers"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "salience" : 0.0114212855696678,
            "type" : "OTHER",
            "name" : "pain",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.200000002980232,
                        "magnitude" : 0.200000002980232
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "pain"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0114212855696678,
            "type" : "OTHER",
            "name" : "food service",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "food service"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00969946943223476,
            "type" : "OTHER",
            "name" : "counter",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "counter"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.5,
                "magnitude" : 0.5
            },
            "salience" : 0.00968503579497337,
            "type" : "OTHER",
            "name" : "breaks",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.5,
                        "magnitude" : 0.5
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "breaks"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00671065412461758,
            "type" : "CONSUMER_GOOD",
            "name" : "banana bread",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "banana bread"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00671065412461758,
            "type" : "CONSUMER_GOOD",
            "name" : "coffee",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0058722416870296,
            "type" : "LOCATION",
            "name" : "floor",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "floor"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00585690094158053,
            "type" : "OTHER",
            "name" : "Food",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Food"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00427563907578588,
            "type" : "OTHER",
            "name" : "all",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "all"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "salience" : 0.00374103221111,
            "type" : "OTHER",
            "name" : "place",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.699999988079071,
                        "magnitude" : 0.699999988079071
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "place"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.00374103221111,
            "type" : "OTHER",
            "name" : "haste",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "haste"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.00290342117659748,
            "type" : "OTHER",
            "name" : "latte",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "latte"
                    }
                }
            ]
        }
    ],
    "sentiment_score" : 0.400000005960464,
    "text" : "I've been at BCC for three years and I fully support this business. This is not a bougie cafe with fancy brews and drinks, but it's a great quick stop when you're fiending for coffee. Take some time to get to know the folks behind the counter- they're actually quite friendly and they always remember me. They may come off as stressed during rush hours, but only because it's a small business and there are so few workers. I've personally worked in fast-paced food service so I know the pain of lunch time rush. All in all, this place makes a decent latte with incredible haste. Food might take a little longer if it's busy. Homeboys behind the counter will treat you however you treat them. My 3hr classes offer 10 minute breaks, and that's just enough time to rush down from the 4th floor of BCC and grab a banana bread and iced coffee.",
    "word_count" : 155,
    "title" : "I've been at BCC for",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : 0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I've been at BCC for three years and I fully support this business."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "This is not a bougie cafe with fancy brews and drinks, but it's a great quick stop when you're fiending for coffee."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Take some time to get to know the folks behind the counter- they're actually quite friendly and they always remember me."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "They may come off as stressed during rush hours, but only because it's a small business and there are so few workers."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I've personally worked in fast-paced food service so I know the pain of lunch time rush."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "All in all, this place makes a decent latte with incredible haste."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Food might take a little longer if it's busy."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Homeboys behind the counter will treat you however you treat them."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "My 3hr classes offer 10 minute breaks, and that's just enough time to rush down from the 4th floor of BCC and grab a banana bread and iced coffee."
            }
        }
    ],
    "review_date" : Date("2020-03-18T07:00:00.000Z"),
    "response_date" : null,
    "photos" : 61,
    "rating" : 4,
    "user_name" : "Chrystal N.",
    "platform" : "Yelp",
    "response_text" : "Thank you for your review,I'm glad you enjoyed your visit,It was nice to read about your experience with our brews. ,We hope to see you back soon,Kind Regards,",
    "review_read" : null,
    "business_id" : "ks-internet-cafe-berkeley",
    "timestamp" : Date("2018-01-04T19:09:39.752Z"),
    "__v" : 0
},{
    "_id" : "5a4e7bf4651dfbd5bed84684",
    "external_id" : "2be-R1izm9Non1pfS-IhKg",
    "tags" : [ 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.131043821573257,
            "type" : "LOCATION",
            "name" : "Internet cafe",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Internet cafe"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.115188241004944,
            "type" : "LOCATION",
            "name" : "street",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "street"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.5
            },
            "salience" : 0.113270044326782,
            "type" : "PERSON",
            "name" : "students",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "students"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0774737671017647,
            "type" : "LOCATION",
            "name" : "cafe",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "cafe"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0691103264689445,
            "type" : "PERSON",
            "name" : "K",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "K"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0691103264689445,
            "type" : "ORGANIZATION",
            "name" : "Berkeley City College",
            "metadata" : {
                "mid" : "/m/0dv80t",
                "wikipedia_url" : "https://en.wikipedia.org/wiki/Berkeley_City_College"
            },
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Berkeley City College"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0691103264689445,
            "type" : "ORGANIZATION",
            "name" : "Center",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Center"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.0486663691699505,
            "type" : "PERSON",
            "name" : "owners",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.5,
                        "magnitude" : 0.5
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "owners"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0243652034550905,
            "type" : "OTHER",
            "name" : "white chocolate mocha",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "white chocolate mocha"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.0226393528282642,
            "type" : "OTHER",
            "name" : "coffee",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0214428640902042,
            "type" : "PERSON",
            "name" : "customers",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "customers"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.021333510056138,
            "type" : "OTHER",
            "name" : "drinks",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "drinks"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.021333510056138,
            "type" : "OTHER",
            "name" : "share",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "share"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0181114785373211,
            "type" : "OTHER",
            "name" : "raspberry pomegranate tea",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "raspberry pomegranate tea"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0164794605225325,
            "type" : "OTHER",
            "name" : "mocha",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "mocha"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.014424804598093,
            "type" : "OTHER",
            "name" : "chai tea latte",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "chai tea latte"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0143319983035326,
            "type" : "OTHER",
            "name" : "prices",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "prices"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0134544130414724,
            "type" : "OTHER",
            "name" : "menu items",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "menu items"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0131185548380017,
            "type" : "ORGANIZATION",
            "name" : "schools",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "schools"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0131185548380017,
            "type" : "OTHER",
            "name" : "Disappointment",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Disappointment"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0131185548380017,
            "type" : "OTHER",
            "name" : "breakfast burritos",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "breakfast burritos"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0122661096975207,
            "type" : "CONSUMER_GOOD",
            "name" : "tea",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "tea"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0112717682495713,
            "type" : "CONSUMER_GOOD",
            "name" : "computer",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "computer"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.00976587459445,
            "type" : "OTHER",
            "name" : "cookie",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "cookie"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "salience" : 0.00976587459445,
            "type" : "OTHER",
            "name" : "keepit",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.699999988079071,
                        "magnitude" : 0.699999988079071
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "keepit"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00785031355917454,
            "type" : "OTHER",
            "name" : "charge cards",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "charge cards"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00675377249717712,
            "type" : "OTHER",
            "name" : "paper",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "paper"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00674370629712939,
            "type" : "OTHER",
            "name" : "star",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "star"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00674370629712939,
            "type" : "LOCATION",
            "name" : "location",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "location"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "salience" : 0.00430586421862245,
            "type" : "CONSUMER_GOOD",
            "name" : "fast food",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.699999988079071,
                        "magnitude" : 0.699999988079071
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "fast food"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.00428754277527332,
            "type" : "OTHER",
            "name" : "pastry",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "pastry"
                    }
                }
            ]
        }
    ],
    "sentiment_score" : 0.100000001490116,
    "text" : "K's Internet cafe is positioned right next to Berkeley City College on Center street. The cafe is always busy and bustling with customers throughout the day. I've had my share of drinks here: white chocolate mocha, chai tea latte, and mocha as well as the raspberry pomegranate tea. The coffee has been decent.. Not worth the prices here though, it seems that the menu items are way overpriced.I see students in here working all the time, I skip bringing my computer and just work in my schools library.Disappointment: They microwave the \"breakfast burritos\" and they taste like fast food. For around $4 that's not cool. I usually grab a pastry (pre-wrapped) or a cookie and tea if I'm desperate and keepit moving. The owners here are not necessarily friendly, they're straightforward and seem all about their paper. One star for location and they take charge cards.",
    "word_count" : 146,
    "title" : "K's Internet cafe is positioned",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "K's Internet cafe is positioned right next to Berkeley City College on Center street."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The cafe is always busy and bustling with customers throughout the day."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I've had my share of drinks here: white chocolate mocha, chai tea latte, and mocha as well as the raspberry pomegranate tea."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The coffee has been decent.."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Not worth the prices here though, it seems that the menu items are way overpriced.I see students in here working all the time, I skip bringing my computer and just work in my schools library.Disappointment: They microwave the \"breakfast burritos\" and they taste like fast food."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "For around $4 that's not cool."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I usually grab a pastry (pre-wrapped) or a cookie and tea if I'm desperate and keepit moving."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The owners here are not necessarily friendly, they're straightforward and seem all about their paper."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.5,
                "magnitude" : 0.5
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "One star for location and they take charge cards."
            }
        }
    ],
    "review_date" : Date("2020-04-06T07:00:00.000Z"),
    "response_date" : null,
    "photos" : 566,
    "rating" : 2,
    "user_name" : "Zaneta S.",
    "platform" : "Yelp",
    "response_text" : "Thank you for your comments,Apologies about the experience that you had,Thank you for informing us about the keepit. It is only through feedback such as yours that we are able to maintain and indeed, where necessary, improve upon the service that we provide to our valued guests.. ,Thanks again for reaching out,Sincerely,",
    "review_read" : null,
    "business_id" : "ks-internet-cafe-berkeley",
    "timestamp" : Date("2018-01-04T19:09:39.783Z"),
    "__v" : 0
},{
    "_id" : "5a4e7bf4651dfbd5bed84686",
    "external_id" : "eyiuHPiTZdXFW8_HDme0VQ",
    "tags" : [ 
        {
            "sentiment" : {
                "score" : 0.200000002980232,
                "magnitude" : 0.800000011920929
            },
            "salience" : 0.154476955533028,
            "type" : "LOCATION",
            "name" : "Internet Cafe",
            "metadata" : {
                "wikipedia_url" : "https://en.wikipedia.org/wiki/Internet_caf%C3%A9",
                "mid" : "/m/01scr9"
            },
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Internet Cafe"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Internet Cafe"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Internet Cafe"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : 0.800000011920929,
                        "magnitude" : 0.800000011920929
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Internet Cafe"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.200000002980232,
                "magnitude" : 0.800000011920929
            },
            "salience" : 0.122348435223103,
            "type" : "PERSON",
            "name" : "K",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "K"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "K"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "K"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : 0.800000011920929,
                        "magnitude" : 0.800000011920929
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "K"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0719123557209969,
            "type" : "PERSON",
            "name" : "instructors",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "instructors"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0719123557209969,
            "type" : "PERSON",
            "name" : "students",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "students"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.05343858897686,
            "type" : "OTHER",
            "name" : "office",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "office"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.05343858897686,
            "type" : "OTHER",
            "name" : "study hall",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "study hall"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0404520519077778,
            "type" : "ORGANIZATION",
            "name" : "Berkeley City College",
            "metadata" : {
                "wikipedia_url" : "https://en.wikipedia.org/wiki/Berkeley,_California",
                "mid" : "/m/01jr6"
            },
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Berkeley City College"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Berkeley City College"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Berkeley City College"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0338984094560146,
            "type" : "OTHER",
            "name" : "thing",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "thing"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0320929996669292,
            "type" : "PERSON",
            "name" : "customers",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "customers"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "salience" : 0.0292114112526178,
            "type" : "OTHER",
            "name" : "wi-fi",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.800000011920929,
                        "magnitude" : 0.800000011920929
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "wi-fi"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.025064043700695,
            "type" : "OTHER",
            "name" : "order",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "order"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "order"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0241407826542854,
            "type" : "OTHER",
            "name" : "sandwiches",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "sandwiches"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0202532764524221,
            "type" : "OTHER",
            "name" : "sandwiches",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "sandwiches"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0131255378946662,
            "type" : "PERSON",
            "name" : "instructors",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "instructors"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.0122416717931628,
            "type" : "OTHER",
            "name" : "coffee",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0115648554638028,
            "type" : "OTHER",
            "name" : "order",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "order"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0110963257029653,
            "type" : "OTHER",
            "name" : "coffee chats",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee chats"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0097462572157383,
            "type" : "OTHER",
            "name" : "chips",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "chips"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0097462572157383,
            "type" : "OTHER",
            "name" : "water",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "water"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.00971084367483854,
            "type" : "PERSON",
            "name" : "couple",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "couple"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00971084367483854,
            "type" : "EVENT",
            "name" : "occasions",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "occasions"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00971084367483854,
            "type" : "OTHER",
            "name" : "philosophies",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "philosophies"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00971084367483854,
            "type" : "OTHER",
            "name" : "life",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "life"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00971084367483854,
            "type" : "OTHER",
            "name" : "class subject",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "class subject"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00971084367483854,
            "type" : "OTHER",
            "name" : "goings",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "goings"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00819768942892551,
            "type" : "PERSON",
            "name" : "customers",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "customers"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0080089932307601,
            "type" : "OTHER",
            "name" : "Customer service",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Customer service"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00664797145873308,
            "type" : "OTHER",
            "name" : "other",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "other"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00652508018538356,
            "type" : "OTHER",
            "name" : "much",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "much"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00649165734648705,
            "type" : "OTHER",
            "name" : "cut",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "cut"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00647517945617437,
            "type" : "EVENT",
            "name" : "meeting",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "meeting"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00646804738789797,
            "type" : "OTHER",
            "name" : "order forms",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "order forms"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0064614936709404,
            "type" : "PERSON",
            "name" : "staff member",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "staff member"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0059132450260222,
            "type" : "OTHER",
            "name" : "name",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "name"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0059132450260222,
            "type" : "OTHER",
            "name" : "wrapper",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "wrapper"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00552900321781635,
            "type" : "OTHER",
            "name" : "class",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "class"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.00502909766510129,
            "type" : "OTHER",
            "name" : "chat",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "chat"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "salience" : 0.00502565363422036,
            "type" : "PERSON",
            "name" : "people",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.300000011920929,
                        "magnitude" : 0.300000011920929
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "people"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.00502565363422036,
            "type" : "PERSON",
            "name" : "people",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "people"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00411530630663037,
            "type" : "PERSON",
            "name" : "instructor",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "instructor"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00411530630663037,
            "type" : "PERSON",
            "name" : "student",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "student"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00383449206128716,
            "type" : "ORGANIZATION",
            "name" : "Department",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Department"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00383449206128716,
            "type" : "OTHER",
            "name" : "English",
            "metadata" : {
                "wikipedia_url" : "https://en.wikipedia.org/wiki/English_language",
                "mid" : "/m/02h40lc"
            },
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "English"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00382354762405157,
            "type" : "OTHER",
            "name" : "class",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "class"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00380361382849514,
            "type" : "WORK_OF_ART",
            "name" : "films",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "films"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.00328401057049632,
            "type" : "OTHER",
            "name" : "coffee",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "salience" : 0.00304461340419948,
            "type" : "ORGANIZATION",
            "name" : "businesses",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.200000002980232,
                        "magnitude" : 0.200000002980232
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "businesses"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0026127474848181,
            "type" : "PERSON",
            "name" : "instructors",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "instructors"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0026127474848181,
            "type" : "PERSON",
            "name" : "students",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "students"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00243129581212997,
            "type" : "CONSUMER_GOOD",
            "name" : "computer",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "computer"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.00242930697277188,
            "type" : "CONSUMER_GOOD",
            "name" : "computers",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "computers"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00230852235108614,
            "type" : "OTHER",
            "name" : "card",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "card"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00221129227429628,
            "type" : "OTHER",
            "name" : "wi-fi",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "wi-fi"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0019345753826201,
            "type" : "CONSUMER_GOOD",
            "name" : "device",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "device"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00193299259990454,
            "type" : "OTHER",
            "name" : "use",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "use"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00193299259990454,
            "type" : "OTHER",
            "name" : "computer stations",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "computer stations"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "salience" : 0.00179995992220938,
            "type" : "OTHER",
            "name" : "Thanks K",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.400000005960464,
                        "magnitude" : 0.400000005960464
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Thanks K"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00179995992220938,
            "type" : "ORGANIZATION",
            "name" : "Fresh Yelp Review",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Fresh Yelp Review"
                    }
                }
            ]
        }
    ],
    "sentiment_score" : 0,
    "text" : "K's Internet Cafe . . . the other adjunct office for adjunct instructors at Berkeley City College as well as a study hall for students.  And they have free wi-fi for paying customers.  I have been in here a few times for coffee, water, and/or chips.  I have been treated to coffee chats with a couple of instructors here at K's Internet Cafe on separate occasions to chat about philosophies of life, the class subject and/or goings-on, and what films to see. Customer service is okay, I guess.  They do not interact much with the customers.  I wonder if it is a cultural thing or what.  Who knows?  Pretty cut and dry.  I just give them my order and I pay for it.  That is all.I once brought in an order for an English Department meeting.  So many order forms.  They not only made the sandwiches, they put the staff member's first name and initial on the wrapper.  It certainly made it easy to distribute the sandwiches, that is for certain.Usually when I am here, I just get my order to stay in or take out.  I would have my own computer or other electrical device if I stayed in to use their wi-fi.  They do have computer stations for use, just buy a card to use the computers.  I have run into other instructors or other students I actually like here at K's Internet Cafe.  We usually have a quick chat to catch up before one or the other have to rush off to class.  Lunch hours are usually crowded with Berkeley City College people or people from other nearby businesses.  I do recommend K's Internet Cafe for a quick coffee to go before rushing off to a Berkeley City College class whether or not instructor or student.   Thanks K's!Fresh Yelp Review #89 for 2013",
    "word_count" : 307,
    "title" : "K's Internet Cafe . .",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : 0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "K's Internet Cafe . . . the other adjunct office for adjunct instructors at Berkeley City College as well as a study hall for students."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.5,
                "magnitude" : 0.5
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "And they have free wi-fi for paying customers."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I have been in here a few times for coffee, water, and/or chips."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I have been treated to coffee chats with a couple of instructors here at K's Internet Cafe on separate occasions to chat about philosophies of life, the class subject and/or goings-on, and what films to see."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Customer service is okay, I guess."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "They do not interact much with the customers."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I wonder if it is a cultural thing or what."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Who knows?"
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Pretty cut and dry."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I just give them my order and I pay for it."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "That is all.I once brought in an order for an English Department meeting."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "So many order forms."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.5,
                "magnitude" : 0.5
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "They not only made the sandwiches, they put the staff member's first name and initial on the wrapper."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "It certainly made it easy to distribute the sandwiches, that is for certain.Usually when I am here, I just get my order to stay in or take out."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I would have my own computer or other electrical device if I stayed in to use their wi-fi."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "They do have computer stations for use, just buy a card to use the computers."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I have run into other instructors or other students I actually like here at K's Internet Cafe."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.600000023841858,
                "magnitude" : 0.600000023841858
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "We usually have a quick chat to catch up before one or the other have to rush off to class."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Lunch hours are usually crowded with Berkeley City College people or people from other nearby businesses."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I do recommend K's Internet Cafe for a quick coffee to go before rushing off to a Berkeley City College class whether or not instructor or student."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Thanks K's!Fresh Yelp Review #89 for 2013"
            }
        }
    ],
    "review_date" : Date("2020-12-26T08:00:00.000Z"),
    "response_date" : null,
    "photos" : 394,
    "rating" : 3,
    "user_name" : "Chiara A.",
    "platform" : "Yelp",
    "response_text" : "Thanks for the comments,,We work really hard to offer the best experience for our guests so I'm grateful to see that you enjoyed the coffee. ,We hope to see you back soon,Kind Regards,",
    "review_read" : null,
    "business_id" : "ks-internet-cafe-berkeley",
    "timestamp" : Date("2018-01-04T19:09:39.800Z"),
    "__v" : 0
},{
    "_id" : "5a4e7bf4651dfbd5bed84688",
    "external_id" : "cxQ2IxtVbQfw7qfaS7LZ6A",
    "tags" : [ 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.279972851276398,
            "type" : "LOCATION",
            "name" : "Berkeley",
            "metadata" : {
                "mid" : "/m/01jr6",
                "wikipedia_url" : "https://en.wikipedia.org/wiki/Berkeley,_California"
            },
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Berkeley"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.5,
                "magnitude" : 1
            },
            "salience" : 0.274815380573273,
            "type" : "OTHER",
            "name" : "cup",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "cup"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.1834587007761,
            "type" : "LOCATION",
            "name" : "city college",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "city college"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0698085278272629,
            "type" : "OTHER",
            "name" : "cream",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "cream"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0600486397743225,
            "type" : "OTHER",
            "name" : "top",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "top"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0407523773610592,
            "type" : "PERSON",
            "name" : "Mocha",
            "metadata" : {
                "mid" : "/m/06jdrl",
                "wikipedia_url" : "https://en.wikipedia.org/wiki/Caff%C3%A8_mocha"
            },
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Mocha"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "salience" : 0.0283070374280214,
            "type" : "EVENT",
            "name" : "lesson break",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.300000011920929,
                        "magnitude" : 0.300000011920929
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "lesson break"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "salience" : 0.0242178197950125,
            "type" : "CONSUMER_GOOD",
            "name" : "Wifi",
            "metadata" : {
                "wikipedia_url" : "https://en.wikipedia.org/wiki/Wi-Fi",
                "mid" : "/m/0h4d9"
            },
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.200000002980232,
                        "magnitude" : 0.200000002980232
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Wifi"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0205946993082762,
            "type" : "OTHER",
            "name" : "mocha",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "mocha"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.0180239398032427,
            "type" : "OTHER",
            "name" : "deal",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "deal"
                    }
                }
            ]
        }
    ],
    "sentiment_score" : 0.600000023841858,
    "text" : "I always go there cause I study in Berkeley city college. I order a cup of Mocha every time...though there's no whipped cream on top, I still enjoy it. It's just 3.25 for a small mocha, what a good deal!! Wifi is provided and I like spending my time there during a lesson break",
    "word_count" : 54,
    "title" : "I always go there cause",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : 0.5,
                "magnitude" : 0.5
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I always go there cause I study in Berkeley city college."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I order a cup of Mocha every time...though there's no whipped cream on top, I still enjoy it."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "It's just 3.25 for a small mocha, what a good deal!!"
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Wifi is provided and I like spending my time there during a lesson break"
            }
        }
    ],
    "review_date" : Date("2020-07-30T07:00:00.000Z"),
    "response_date" : null,
    "photos" : 27,
    "rating" : 3,
    "user_name" : "Yuki M.",
    "platform" : "Yelp",
    "response_text" : "Thanks for sharing your feedback from your visit,,Many of our guests comment on our excellent deal, so I'm glad you did too. ,We hope to see you soon,Thanks,",
    "review_read" : null,
    "business_id" : "ks-internet-cafe-berkeley",
    "timestamp" : Date("2018-01-04T19:09:39.822Z"),
    "__v" : 0
},
{
    "_id" : "5a4e7bf4651dfbd5bed8468a",
    "external_id" : "MMXOZ3CV9XoG9vJ-5Xo0dw",
    "tags" : [ 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.600790798664093,
            "type" : "OTHER",
            "name" : "service",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "service"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.268536627292633,
            "type" : "OTHER",
            "name" : "coffee",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0665475949645042,
            "type" : "OTHER",
            "name" : "effort",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "effort"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0641250088810921,
            "type" : "OTHER",
            "name" : "conversation",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "conversation"
                    }
                }
            ]
        }
    ],
    "sentiment_score" : 0.5,
    "text" : "Nice service and good coffee. They always make the effort to have a small conversation with you.",
    "word_count" : 17,
    "title" : "Nice service and good coffee.",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Nice service and good coffee."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "They always make the effort to have a small conversation with you."
            }
        }
    ],
    "review_date" : Date("2020-09-21T07:00:00.000Z"),
    "response_date" : null,
    "photos" : 2,
    "rating" : 5,
    "user_name" : "Kaylin N.",
    "platform" : "Yelp",
    "response_text" : "Thanks for sharing your feedback,We work really hard to offer the best experience for our customers so I'm grateful to see that you enjoyed your visit,I appreciate your comments about the service. ,We look forward to welcoming back for your next visit,Kind Regards,",
    "review_read" : null,
    "business_id" : "ks-internet-cafe-berkeley",
    "timestamp" : Date("2018-01-04T19:09:39.841Z"),
    "__v" : 0
},
{
    "_id" : "5a4e7bf4651dfbd5bed8468c",
    "external_id" : "8xwS-Q6pXjgg8iHK8A-Y8Q",
    "tags" : [ 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.170982897281647,
            "type" : "OTHER",
            "name" : "place",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "place"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.128114968538284,
            "type" : "LOCATION",
            "name" : "downtown",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "downtown"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "salience" : 0.119951941072941,
            "type" : "OTHER",
            "name" : "ratings",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.300000011920929,
                        "magnitude" : 0.300000011920929
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "ratings"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0827815905213356,
            "type" : "OTHER",
            "name" : "place",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "place"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0770030841231346,
            "type" : "OTHER",
            "name" : "way",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "way"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.0328519195318222,
            "type" : "OTHER",
            "name" : "service",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "service"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0244387090206146,
            "type" : "OTHER",
            "name" : "Yelp",
            "metadata" : {
                "wikipedia_url" : "https://en.wikipedia.org/wiki/Yelp",
                "mid" : "/m/0bngkg"
            },
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Yelp"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Yelp"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0236260257661343,
            "type" : "OTHER",
            "name" : "warnings",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "warnings"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0198233332484961,
            "type" : "OTHER",
            "name" : "way",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "way"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0187617726624012,
            "type" : "PERSON",
            "name" : "Au Coquelet",
            "metadata" : {
                "mid" : "/m/01zbsw4"
            },
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Au Coquelet"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "salience" : 0.0183707717806101,
            "type" : "OTHER",
            "name" : "something",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.699999988079071,
                        "magnitude" : 0.699999988079071
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "something"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.5,
                "magnitude" : 0.5
            },
            "salience" : 0.0180353485047817,
            "type" : "OTHER",
            "name" : "compliment",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.5,
                        "magnitude" : 0.5
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "compliment"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.0179938320070505,
            "type" : "OTHER",
            "name" : "service",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "service"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.0179938320070505,
            "type" : "OTHER",
            "name" : "pastries",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "pastries"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "salience" : 0.017556257545948,
            "type" : "OTHER",
            "name" : "thing",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.300000011920929,
                        "magnitude" : 0.300000011920929
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "thing"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0164378117769957,
            "type" : "OTHER",
            "name" : "coffee",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.600000023841858,
                "magnitude" : 0.600000023841858
            },
            "salience" : 0.0158294215798378,
            "type" : "OTHER",
            "name" : "time",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.600000023841858,
                        "magnitude" : 0.600000023841858
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "time"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0158294215798378,
            "type" : "PERSON",
            "name" : "cashier",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "cashier"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "salience" : 0.015784814953804,
            "type" : "OTHER",
            "name" : "smile",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.300000011920929,
                        "magnitude" : 0.300000011920929
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "smile"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.015784814953804,
            "type" : "OTHER",
            "name" : "hug",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "hug"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.0154046099632978,
            "type" : "OTHER",
            "name" : "pastries",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "pastries"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0144140906631947,
            "type" : "OTHER",
            "name" : "noooopeee",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "noooopeee"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "salience" : 0.01438601128757,
            "type" : "OTHER",
            "name" : "dirt",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.200000002980232,
                        "magnitude" : 0.200000002980232
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "dirt"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "salience" : 0.0108409794047475,
            "type" : "OTHER",
            "name" : "lot",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.400000005960464,
                        "magnitude" : 0.400000005960464
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "lot"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.600000023841858,
                "magnitude" : 0.600000023841858
            },
            "salience" : 0.0107046002522111,
            "type" : "PERSON",
            "name" : "people",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.600000023841858,
                        "magnitude" : 0.600000023841858
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "people"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0100134443491697,
            "type" : "LOCATION",
            "name" : "places",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "places"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.00930416956543922,
            "type" : "OTHER",
            "name" : "way",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "way"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.00780482497066259,
            "type" : "OTHER",
            "name" : "coffee",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00634021824225783,
            "type" : "ORGANIZATION",
            "name" : "Berkeley City College.",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Berkeley City College."
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00633256556466222,
            "type" : "PERSON",
            "name" : "Nuha",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Nuha"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "salience" : 0.0053770337253809,
            "type" : "OTHER",
            "name" : "complaints",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.200000002980232,
                        "magnitude" : 0.200000002980232
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "complaints"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00487589556723833,
            "type" : "OTHER",
            "name" : "place",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "place"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0046981880441308,
            "type" : "LOCATION",
            "name" : "location",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "location"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00438479147851467,
            "type" : "ORGANIZATION",
            "name" : "Starbucks",
            "metadata" : {
                "wikipedia_url" : "https://en.wikipedia.org/wiki/Starbucks",
                "mid" : "/m/018c_r"
            },
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Starbucks"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00438479147851467,
            "type" : "PERSON",
            "name" : "Peet",
            "metadata" : {
                "wikipedia_url" : "https://en.wikipedia.org/wiki/Peet%27s_Coffee",
                "mid" : "/m/04_zkn"
            },
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Peet"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00278122490271926,
            "type" : "PERSON",
            "name" : "K",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "K"
                    }
                }
            ]
        }
    ],
    "sentiment_score" : -0.100000001490116,
    "text" : "I finally understand why the ratings are so low for this place. I always pass by this place on my way to work and I finally decided to check it out, despite all the warnings on Yelp. The service is horrible. I don't know why but I almost want to cry every time I interact with the cashier. There's something so cold and intimidating about the way he speaks with you and I'm not asking for a hug or a compliment but a smile couldn't hurt. I could overlook bad service if the coffee and pastries were good but noooopeee. Their coffee tastes like diluted dirt. Their pastries are also stale and hard to digest. The odd thing is that for so many complaints on Yelp this place gets quite packed in the morning and around noon. I suppose K's lucked out with location because it's downtown where a lot of people work and it's also beside Berkeley City College.I strongly advise against coming here. Check out Nuha's or Au Coquelet which are nearby or if you happen to pass by Starbucks or Peet's on your way downtown definitely stick to those places!",
    "word_count" : 193,
    "title" : "I finally understand why the",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : -0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I finally understand why the ratings are so low for this place."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I always pass by this place on my way to work and I finally decided to check it out, despite all the warnings on Yelp."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The service is horrible."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I don't know why but I almost want to cry every time I interact with the cashier."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "There's something so cold and intimidating about the way he speaks with you and I'm not asking for a hug or a compliment but a smile couldn't hurt."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I could overlook bad service if the coffee and pastries were good but noooopeee."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.5,
                "magnitude" : 0.5
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Their coffee tastes like diluted dirt."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Their pastries are also stale and hard to digest."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The odd thing is that for so many complaints on Yelp this place gets quite packed in the morning and around noon."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I suppose K's lucked out with location because it's downtown where a lot of people work and it's also beside Berkeley City College.I strongly advise against coming here."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Check out Nuha's or Au Coquelet which are nearby or if you happen to pass by Starbucks or Peet's on your way downtown definitely stick to those places!"
            }
        }
    ],
    "review_date" : Date("2020-03-23T07:00:00.000Z"),
    "response_date" : null,
    "photos" : 394,
    "rating" : 2,
    "user_name" : "Cassie X.",
    "platform" : "Yelp",
    "response_text" : "Thank you for your comments,Apologies about the experience that you had,With regard to your concern about the service, INSERT CUSTOM RESPONSE. ,Once again, I apologise for the experience you received,Sincerely,",
    "review_read" : null,
    "business_id" : "ks-internet-cafe-berkeley",
    "timestamp" : Date("2018-01-04T19:09:39.864Z"),
    "__v" : 0
},
{
    "_id" : "5a4e7bf4651dfbd5bed8468e",
    "external_id" : "qpPmTvUqkNNr2URD8RHxHA",
    "tags" : [ 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.246242374181747,
            "type" : "OTHER",
            "name" : "BCC.",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Service"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "BCC."
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 1.29999995231628
            },
            "salience" : 0.145474791526794,
            "type" : "PERSON",
            "name" : "cashier",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "cashier"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "salience" : 0.113376520574093,
            "type" : "OTHER",
            "name" : "customer service",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.400000005960464,
                        "magnitude" : 0.400000005960464
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "customer service"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.113376520574093,
            "type" : "OTHER",
            "name" : "place",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "place"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "salience" : 0.113376520574093,
            "type" : "LOCATION",
            "name" : "coffee shop",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.400000005960464,
                        "magnitude" : 0.400000005960464
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee shop"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0182676240801811,
            "type" : "OTHER",
            "name" : "anything",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "anything"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0181161984801292,
            "type" : "OTHER",
            "name" : "coffee",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0166653227061033,
            "type" : "OTHER",
            "name" : "drink",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "drink"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.600000023841858,
                "magnitude" : 0.600000023841858
            },
            "salience" : 0.0160286147147417,
            "type" : "OTHER",
            "name" : "coffee",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.600000023841858,
                        "magnitude" : 0.600000023841858
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0146956751123071,
            "type" : "OTHER",
            "name" : "all",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "all"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0138325719162822,
            "type" : "OTHER",
            "name" : "pastries",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "pastries"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0123117286711931,
            "type" : "OTHER",
            "name" : "transaction",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "transaction"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0122594488784671,
            "type" : "OTHER",
            "name" : "change",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "change"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0122406352311373,
            "type" : "OTHER",
            "name" : "cash",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "cash"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0122387623414397,
            "type" : "OTHER",
            "name" : "words",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "words"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0122387623414397,
            "type" : "OTHER",
            "name" : "part",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "part"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "salience" : 0.0122205447405577,
            "type" : "OTHER",
            "name" : "Food",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.400000005960464,
                        "magnitude" : 0.400000005960464
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Food"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.600000023841858,
                "magnitude" : 0.600000023841858
            },
            "salience" : 0.0119233028963208,
            "type" : "OTHER",
            "name" : "coffee",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.600000023841858,
                        "magnitude" : 0.600000023841858
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0111566642299294,
            "type" : "CONSUMER_GOOD",
            "name" : "windows",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "windows"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0111443903297186,
            "type" : "OTHER",
            "name" : "Note",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Note"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0103402975946665,
            "type" : "OTHER",
            "name" : "drink",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "drink"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00643763924017549,
            "type" : "PERSON",
            "name" : "one",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "one"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.00616173911839724,
            "type" : "LOCATION",
            "name" : "coffee shops",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee shops"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00578798539936543,
            "type" : "OTHER",
            "name" : "place",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "place"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.00574837019667029,
            "type" : "PERSON",
            "name" : "anyone",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "anyone"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00574395665898919,
            "type" : "LOCATION",
            "name" : "corner",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "corner"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00530690094456077,
            "type" : "OTHER",
            "name" : "exchanges",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "exchanges"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.00513754226267338,
            "type" : "PERSON",
            "name" : "employees",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "employees"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0048368857242167,
            "type" : "OTHER",
            "name" : "flies",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "flies"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00365584786050022,
            "type" : "OTHER",
            "name" : "Internet cafe",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Internet cafe"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00365584786050022,
            "type" : "PERSON",
            "name" : "friends",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "friends"
                    }
                }
            ]
        }
    ],
    "sentiment_score" : -0.400000005960464,
    "text" : "Small coffee shop right next to BCC.Service:I'm very disappointed in the customer service at this place. The cashier was rude and unprofessional. Seemed like he just wanted me out of there. He didn't say anything to me at all! I went up and said \"Hi, I would like a small coffee please\" and all he did was ring up transaction and waited for me to hand him cash. I did. He gave me my change and got my drink. There were no exchanges of words on this part! Food:The drink was bland. I didn't think you can make coffee bland. There were flies in the glass windows were the pastries were held, so I didn't even think of trying other. Note:The name Internet cafe sounds like you can sit down and study or chat with your friends. WRONG! The employees will stare you down and make you feel as uncomfortable can be. Is it because I only order a small coffee? Needless to say, I never went back.Overall:I would never recommend this place to anyone! There are so many other inexpensive coffee shops just around the corner (literally) that this one cannot even begin to compete.",
    "word_count" : 196,
    "title" : "Small coffee shop right next",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Small coffee shop right next to BCC.Service:I'm very disappointed in the customer service at this place."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The cashier was rude and unprofessional."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Seemed like he just wanted me out of there."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "He didn't say anything to me at all!"
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I went up and said \"Hi, I would like a small coffee please\" and all he did was ring up transaction and waited for me to hand him cash."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I did."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "He gave me my change and got my drink."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "There were no exchanges of words on this part!"
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Food:The drink was bland."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I didn't think you can make coffee bland."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "There were flies in the glass windows were the pastries were held, so I didn't even think of trying other."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.600000023841858,
                "magnitude" : 0.600000023841858
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Note:The name Internet cafe sounds like you can sit down and study or chat with your friends."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "WRONG!"
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The employees will stare you down and make you feel as uncomfortable can be."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Is it because I only order a small coffee?"
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Needless to say, I never went back.Overall:I would never recommend this place to anyone!"
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "There are so many other inexpensive coffee shops just around the corner (literally) that this one cannot even begin to compete."
            }
        }
    ],
    "review_date" : Date("2020-05-08T07:00:00.000Z"),
    "response_date" : null,
    "photos" : 168,
    "rating" : 1,
    "user_name" : "Christina L.",
    "platform" : "Yelp",
    "response_text" : "Thank you for your comments,Apologies about the experience that you had,With regard to your concern about the employees, INSERT CUSTOM RESPONSE. ,Once again, I apologise for the experience you received,Kind Regards,",
    "review_read" : null,
    "business_id" : "ks-internet-cafe-berkeley",
    "timestamp" : Date("2018-01-04T19:09:39.891Z"),
    "__v" : 0
},
{
    "_id" : "5a4e7bf4651dfbd5bed84690",
    "external_id" : "eYk4EsA9y7ZwYUaARRvuvQ",
    "tags" : [ 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.494599848985672,
            "type" : "PERSON",
            "name" : "Students",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Students"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.188985049724579,
            "type" : "LOCATION",
            "name" : "cafe",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "cafe"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0966296941041946,
            "type" : "ORGANIZATION",
            "name" : "Berkeley City College",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Berkeley City College"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "salience" : 0.026633383706212,
            "type" : "OTHER",
            "name" : "service",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.800000011920929,
                        "magnitude" : 0.800000011920929
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "service"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "salience" : 0.0218001678586006,
            "type" : "EVENT",
            "name" : "lunch break",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.300000011920929,
                        "magnitude" : 0.300000011920929
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "lunch break"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0208533592522144,
            "type" : "OTHER",
            "name" : "menu",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "menu"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "salience" : 0.0208533592522144,
            "type" : "OTHER",
            "name" : "items",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.200000002980232,
                        "magnitude" : 0.200000002980232
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "items"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0208533592522144,
            "type" : "OTHER",
            "name" : "granola",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "granola"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.0208533592522144,
            "type" : "OTHER",
            "name" : "comfort food",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "comfort food"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "salience" : 0.0208533592522144,
            "type" : "OTHER",
            "name" : "coffee",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.300000011920929,
                        "magnitude" : 0.300000011920929
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "salience" : 0.0161915179342031,
            "type" : "EVENT",
            "name" : "lunch break",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.300000011920929,
                        "magnitude" : 0.300000011920929
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "lunch break"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.600000023841858,
                "magnitude" : 0.600000023841858
            },
            "salience" : 0.0141805047169328,
            "type" : "OTHER",
            "name" : "worth",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.600000023841858,
                        "magnitude" : 0.600000023841858
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "worth"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.600000023841858,
                "magnitude" : 0.600000023841858
            },
            "salience" : 0.00987487565726042,
            "type" : "OTHER",
            "name" : "business",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.600000023841858,
                        "magnitude" : 0.600000023841858
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "business"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "salience" : 0.00983909517526627,
            "type" : "OTHER",
            "name" : "place",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.200000002980232,
                        "magnitude" : 0.200000002980232
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "place"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "salience" : 0.00983909517526627,
            "type" : "EVENT",
            "name" : "class",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.200000002980232,
                        "magnitude" : 0.200000002980232
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "class"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "salience" : 0.00715995859354734,
            "type" : "OTHER",
            "name" : "customer service",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.800000011920929,
                        "magnitude" : 0.800000011920929
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "customer service"
                    }
                }
            ]
        }
    ],
    "sentiment_score" : 0.699999988079071,
    "text" : "Considering who this cafe is for - primarily Berkeley City College Students - it's just about as good as they come. The menu ranges from granola locally made items to quick comfort food, the coffee's hot (or cold), and the service is speedy enough for a half hour lunch break. Finding a locally owned business with good customer service is rare. Very much worth the occasional lunch break in-between, or a place to hang out before a class.",
    "word_count" : 78,
    "title" : "Considering who this cafe is",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : 0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Considering who this cafe is for - primarily Berkeley City College Students - it's just about as good as they come."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The menu ranges from granola locally made items to quick comfort food, the coffee's hot (or cold), and the service is speedy enough for a half hour lunch break."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Finding a locally owned business with good customer service is rare."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Very much worth the occasional lunch break in-between, or a place to hang out before a class."
            }
        }
    ],
    "review_date" : Date("2020-09-02T07:00:00.000Z"),
    "response_date" : null,
    "photos" : null,
    "rating" : 5,
    "user_name" : "Nathan D.",
    "platform" : "Yelp",
    "response_text" : "Thanks for sharing your feedback from your visit,I'm glad you enjoyed your experience,I was very disappointed to read of your experience during your visit. The issue of the worth is certainly not acceptable and we have put procedures in place to prevent this happening in the future. ,We hope to see you back soon,Thanks,",
    "review_read" : null,
    "business_id" : "ks-internet-cafe-berkeley",
    "timestamp" : Date("2018-01-04T19:09:39.921Z"),
    "__v" : 0
},
{
    "_id" : "5a4e7bf4651dfbd5bed84692",
    "external_id" : "99L7kGFaqAhb0li4UecatA",
    "tags" : [ 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0.200000002980232
            },
            "salience" : 0.341669768095016,
            "type" : "OTHER",
            "name" : "type",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "type"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0.600000023841858
            },
            "salience" : 0.191685408353806,
            "type" : "PERSON",
            "name" : "guys",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "guys"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.134483382105827,
            "type" : "LOCATION",
            "name" : "coffee shop",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee shop"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.095854289829731,
            "type" : "OTHER",
            "name" : "forward",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "forward"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0954358577728271,
            "type" : "OTHER",
            "name" : "coffee",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0464212037622929,
            "type" : "PERSON",
            "name" : "friend",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "friend"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "salience" : 0.0150537956506014,
            "type" : "OTHER",
            "name" : "pastry",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.200000002980232,
                        "magnitude" : 0.200000002980232
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "pastry"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0149769801646471,
            "type" : "PERSON",
            "name" : "people",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "people"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0149769801646471,
            "type" : "OTHER",
            "name" : "hurry",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "hurry"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.600000023841858,
                "magnitude" : 0.600000023841858
            },
            "salience" : 0.0136609440669417,
            "type" : "OTHER",
            "name" : "mood",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.600000023841858,
                        "magnitude" : 0.600000023841858
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "mood"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0095416596159339,
            "type" : "OTHER",
            "name" : "job",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "job"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.00888292584568262,
            "type" : "PERSON",
            "name" : "BART",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "BART"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00661141192540526,
            "type" : "OTHER",
            "name" : "order",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "order"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00563083775341511,
            "type" : "WORK_OF_ART",
            "name" : "Black Coffee",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Black Coffee"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00511453952640295,
            "type" : "LOCATION",
            "name" : "shop",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "shop"
                    }
                }
            ]
        }
    ],
    "sentiment_score" : 0,
    "text" : "This is not the type of coffee shop where you want to linger or have a catch up with a friend. This is your straight forward, grab your coffee and pastry and leave as fast as you can. I usually come here in the mornings after getting off BART and it's ALWAYS crowded with people in a hurry. There are usually 2 or 3 guys working here and they are never in a good mood. They just want to give you your coffee and get you out of their shop so they can get back to chatting amongst themselves. But they get the job done and never get your order done. Black Coffee and a Muffin. 2/5",
    "word_count" : 117,
    "title" : "This is not the type",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : -0.5,
                "magnitude" : 0.5
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "This is not the type of coffee shop where you want to linger or have a catch up with a friend."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "This is your straight forward, grab your coffee and pastry and leave as fast as you can."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I usually come here in the mornings after getting off BART and it's ALWAYS crowded with people in a hurry."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "There are usually 2 or 3 guys working here and they are never in a good mood."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "They just want to give you your coffee and get you out of their shop so they can get back to chatting amongst themselves."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "But they get the job done and never get your order done."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Black Coffee and a Muffin. 2/5"
            }
        }
    ],
    "review_date" : Date("2020-04-20T07:00:00.000Z"),
    "response_date" : null,
    "photos" : 161,
    "rating" : 2,
    "user_name" : "Michelle L.",
    "platform" : "Yelp",
    "response_text" : "Thank you for your review,Apologies about the experience that you had,Thank you for informing us about the mood. It is only through feedback such as yours that we are able to maintain and indeed, where necessary, improve upon the service that we provide to our valued guests.. ,We hope to have the opportunity to show you the level of service that we are known for.,Thanks,",
    "review_read" : null,
    "business_id" : "ks-internet-cafe-berkeley",
    "timestamp" : Date("2018-01-04T19:09:39.948Z"),
    "__v" : 0
},
{
    "_id" : "5a4e7bf4651dfbd5bed84694",
    "external_id" : "NFDt5W8jItfdzkFLEprhtg",
    "tags" : [ 
        {
            "sentiment" : {
                "score" : -0.699999988079071,
                "magnitude" : 1.39999997615814
            },
            "salience" : 0.159528091549873,
            "type" : "PERSON",
            "name" : "people",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "people"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.103564605116844,
            "type" : "OTHER",
            "name" : "door",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "door"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.103564605116844,
            "type" : "ORGANIZATION",
            "name" : "school",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "school"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0784385278820992,
            "type" : "LOCATION",
            "name" : "coffee shop",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee shop"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0702395737171173,
            "type" : "LOCATION",
            "name" : "coffee shop",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee shop"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.5,
                "magnitude" : 0.5
            },
            "salience" : 0.06087701395154,
            "type" : "OTHER",
            "name" : "service",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.5,
                        "magnitude" : 0.5
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "service"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0485903695225716,
            "type" : "PERSON",
            "name" : "everyone",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "everyone"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0295071955770254,
            "type" : "LOCATION",
            "name" : "coffee shop",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee shop"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0269501488655806,
            "type" : "OTHER",
            "name" : "place",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "place"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0189683679491282,
            "type" : "OTHER",
            "name" : "track lighting",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "track lighting"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0189683679491282,
            "type" : "OTHER",
            "name" : "cards",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "cards"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0189683679491282,
            "type" : "PERSON",
            "name" : "dudes",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "dudes"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.0181064940989017,
            "type" : "PERSON",
            "name" : "students",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "students"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0160540323704481,
            "type" : "PERSON",
            "name" : "people",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "people"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.699999988079071,
                "magnitude" : 1.39999997615814
            },
            "salience" : 0.0160540323704481,
            "type" : "PERSON",
            "name" : "people",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "people"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "salience" : 0.0154085354879498,
            "type" : "OTHER",
            "name" : "coffee",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.300000011920929,
                        "magnitude" : 0.300000011920929
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0145434709265828,
            "type" : "OTHER",
            "name" : "studies",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "studies"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0132690668106079,
            "type" : "EVENT",
            "name" : "mornings",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "mornings"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "salience" : 0.0132690668106079,
            "type" : "OTHER",
            "name" : "place",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.400000005960464,
                        "magnitude" : 0.400000005960464
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "place"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0127823445945978,
            "type" : "OTHER",
            "name" : "kinds",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "kinds"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0127823445945978,
            "type" : "PERSON",
            "name" : "folks",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "folks"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0127823445945978,
            "type" : "LOCATION",
            "name" : "downtown area",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "downtown area"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.012728052213788,
            "type" : "PERSON",
            "name" : "daughter",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "daughter"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.012728052213788,
            "type" : "OTHER",
            "name" : "health",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "health"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "salience" : 0.0119711635634303,
            "type" : "PERSON",
            "name" : "staff",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.200000002980232,
                        "magnitude" : 0.200000002980232
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "staff"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.011629605665803,
            "type" : "OTHER",
            "name" : "respect",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "respect"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0112450374290347,
            "type" : "OTHER",
            "name" : "iTunes",
            "metadata" : {
                "mid" : "/m/019g58",
                "wikipedia_url" : "https://en.wikipedia.org/wiki/ITunes"
            },
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "iTunes"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.00865708291530609,
            "type" : "LOCATION",
            "name" : "street",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "street"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00742079271003604,
            "type" : "OTHER",
            "name" : "need",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "need"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00688945548608899,
            "type" : "OTHER",
            "name" : "Arabic",
            "metadata" : {
                "wikipedia_url" : "https://en.wikipedia.org/wiki/Arabic",
                "mid" : "/m/0jzc"
            },
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Arabic"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "salience" : 0.00627259351313114,
            "type" : "OTHER",
            "name" : "coffee",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.300000011920929,
                        "magnitude" : 0.300000011920929
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00598296895623207,
            "type" : "WORK_OF_ART",
            "name" : "review",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "review"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00465891603380442,
            "type" : "OTHER",
            "name" : "tv",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "tv"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.00465891603380442,
            "type" : "OTHER",
            "name" : "sound",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "sound"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00434225471690297,
            "type" : "OTHER",
            "name" : "whatever",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "whatever"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00379906524904072,
            "type" : "OTHER",
            "name" : "cup",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "cup"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "salience" : 0.00379906524904072,
            "type" : "OTHER",
            "name" : "drip",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.800000011920929,
                        "magnitude" : 0.800000011920929
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "drip"
                    }
                }
            ]
        }
    ],
    "sentiment_score" : 0.100000001490116,
    "text" : "I go to school next door, and come here every morning. I don't know why everyone says that the service is poor and the people are rude: they are not. And it is not a dirty place. This is not a bougie coffee shop with track lighting and free iTunes cards, dudes. This is a coffee shop in a downtown area frequented by working class people, broke students, homeless folks, and all other kinds of people. The staff are not unfriendly. They ask about my daughter, my health, and my studies. But then again, I go there every day and treat them with respect and thank them in Arabic. I find this place comfortable, warm, and quiet when I need to study or center myself in the mornings. There is a tv and the sound is off. The coffee isn't made with whatever hipster gourmet slow drip single cup whatever that you can get on 4th street (which is totally great, really)...it is just coffee. And it's fine. I like it, it's affordable, and it's comfortable.I felt the need to post this review because this is a great coffee shop to study in, to read in, and to frequent.",
    "word_count" : 199,
    "title" : "I go to school next",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : 0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I go to school next door, and come here every morning."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I don't know why everyone says that the service is poor and the people are rude: they are not."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "And it is not a dirty place."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "This is not a bougie coffee shop with track lighting and free iTunes cards, dudes."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "This is a coffee shop in a downtown area frequented by working class people, broke students, homeless folks, and all other kinds of people."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.5,
                "magnitude" : 0.5
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The staff are not unfriendly."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "They ask about my daughter, my health, and my studies."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "But then again, I go there every day and treat them with respect and thank them in Arabic."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I find this place comfortable, warm, and quiet when I need to study or center myself in the mornings."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "There is a tv and the sound is off."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The coffee isn't made with whatever hipster gourmet slow drip single cup whatever that you can get on 4th street (which is totally great, really)...it is just coffee."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "And it's fine."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I like it, it's affordable, and it's comfortable.I felt the need to post this review because this is a great coffee shop to study in, to read in, and to frequent."
            }
        }
    ],
    "review_date" : Date("2020-04-04T07:00:00.000Z"),
    "response_date" : null,
    "photos" : 1,
    "rating" : 4,
    "user_name" : "Bonnie C.",
    "platform" : "Yelp",
    "response_text" : "Thank you for your review,I'm glad you enjoyed your experience,Thank you for informing us about the students. We hope we have the opportunity to show you an improvement in our students on your next visit. ,We look forward to welcoming back for your next visit,Sincerely,",
    "review_read" : null,
    "business_id" : "ks-internet-cafe-berkeley",
    "timestamp" : Date("2018-01-04T19:09:39.978Z"),
    "__v" : 0
},
{
    "_id" : "5a4e7bf4651dfbd5bed84696",
    "external_id" : "Jgn_8u52QOi9P5xFuR-ZiA",
    "tags" : [ 
        {
            "sentiment" : {
                "score" : 0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "salience" : 0.49018120765686,
            "type" : "OTHER",
            "name" : "cup",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.400000005960464,
                        "magnitude" : 0.400000005960464
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "cup"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.341088861227036,
            "type" : "OTHER",
            "name" : "water",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "water"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0806599780917168,
            "type" : "LOCATION",
            "name" : "corner",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "corner"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0507292784750462,
            "type" : "PERSON",
            "name" : "people",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "people"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.03734065964818,
            "type" : "ORGANIZATION",
            "name" : "Starbucks",
            "metadata" : {
                "mid" : "/m/018c_r",
                "wikipedia_url" : "https://en.wikipedia.org/wiki/Starbucks"
            },
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Starbucks"
                    }
                }
            ]
        }
    ],
    "sentiment_score" : -0.200000002980232,
    "text" : "charged me a $1 for a cup of hot water. it's not wise to rip people off when Starbucks is just around the corner.",
    "word_count" : 24,
    "title" : "charged me a $1 for",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "charged me a $1 for a cup of hot water."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "it's not wise to rip people off when Starbucks is just around the corner."
            }
        }
    ],
    "review_date" : Date("2020-06-23T07:00:00.000Z"),
    "response_date" : null,
    "photos" : null,
    "rating" : 1,
    "user_name" : "E R.",
    "platform" : "Yelp",
    "response_text" : "Thank you for the feedback from your visit,Apologies about the experience that you had,,We hope to have the opportunity to show you the level of service that we are known for,Thanks,",
    "review_read" : null,
    "business_id" : "ks-internet-cafe-berkeley",
    "timestamp" : Date("2018-01-04T19:09:40.003Z"),
    "__v" : 0
},
{
    "_id" : "5a4e7bf4651dfbd5bed84698",
    "external_id" : "386hkzw4a4TDgFHuYrfPmA",
    "tags" : [ 
        {
            "sentiment" : {
                "score" : -0.600000023841858,
                "magnitude" : 1.29999995231628
            },
            "salience" : 0.685363709926605,
            "type" : "OTHER",
            "name" : "quality",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.800000011920929,
                        "magnitude" : 0.800000011920929
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "food"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : -0.400000005960464,
                        "magnitude" : 0.400000005960464
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "quality"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0836126431822777,
            "type" : "OTHER",
            "name" : "microwave burrito",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "microwave burrito"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.600000023841858,
                "magnitude" : 1.29999995231628
            },
            "salience" : 0.0527897700667381,
            "type" : "OTHER",
            "name" : "option",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.699999988079071,
                        "magnitude" : 0.699999988079071
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "place"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : 0.600000023841858,
                        "magnitude" : 0.600000023841858
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "option"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0372168645262718,
            "type" : "OTHER",
            "name" : "breakfast burrito",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "breakfast burrito"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0351716279983521,
            "type" : "PERSON",
            "name" : "guy",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "guy"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0284993331879377,
            "type" : "OTHER",
            "name" : "food",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "food"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0252766143530607,
            "type" : "CONSUMER_GOOD",
            "name" : "microwave",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "microwave"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "salience" : 0.0221491809934378,
            "type" : "OTHER",
            "name" : "degree",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.200000002980232,
                        "magnitude" : 0.200000002980232
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "degree"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0151163144037127,
            "type" : "OTHER",
            "name" : "anything",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "anything"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "salience" : 0.00814785063266754,
            "type" : "OTHER",
            "name" : "nothing",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.400000005960464,
                        "magnitude" : 0.400000005960464
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "nothing"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00665606977418065,
            "type" : "OTHER",
            "name" : "cafe.",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "cafe."
                    }
                }
            ]
        }
    ],
    "sentiment_score" : -0.699999988079071,
    "text" : "The food is really poor quality.  I ordered a breakfast burrito, the guy put a cheap microwave burrito in the microwave and have it to me at like 300 degree.  It is basically 7-11 food disguised as a cafe.If you are starving and nothing else is open and you will eat anything, then this place is a viable option",
    "word_count" : 59,
    "title" : "The food is really poor",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The food is really poor quality."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I ordered a breakfast burrito, the guy put a cheap microwave burrito in the microwave and have it to me at like 300 degree."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "It is basically 7-11 food disguised as a cafe.If you are starving and nothing else is open and you will eat anything, then this place is a viable option"
            }
        }
    ],
    "review_date" : Date("2020-07-30T07:00:00.000Z"),
    "response_date" : null,
    "photos" : 1,
    "rating" : 2,
    "user_name" : "Lloyd M.",
    "platform" : "Yelp",
    "response_text" : "Thank you for taking the time to share your experience,Apologies about the experience that you had,I was very disappointed to read of your experience during your visit. The issue of the quality is certainly not acceptable and we have put procedures in place to prevent this happening in the future. ,We hope to have the opportunity to show you the level of service that we are known for.,Sincerely,",
    "review_read" : null,
    "business_id" : "ks-internet-cafe-berkeley",
    "timestamp" : Date("2018-01-04T19:09:40.030Z"),
    "__v" : 0
},
{
    "_id" : "5a4e7bf4651dfbd5bed8469a",
    "external_id" : "NpUxN1GMEuGIHTUza0HH2A",
    "tags" : [ 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.589177370071411,
            "type" : "OTHER",
            "name" : "service",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "service"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "salience" : 0.122646383941174,
            "type" : "OTHER",
            "name" : "cheapscapes",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.699999988079071,
                        "magnitude" : 0.699999988079071
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "cheapscapes"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "salience" : 0.0763130784034729,
            "type" : "OTHER",
            "name" : "quality",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.200000002980232,
                        "magnitude" : 0.200000002980232
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "quality"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0763130784034729,
            "type" : "OTHER",
            "name" : "food",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "food"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0651179105043411,
            "type" : "LOCATION",
            "name" : "places",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "places"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.0451890118420124,
            "type" : "OTHER",
            "name" : "place",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : -0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "place"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0252431482076645,
            "type" : "OTHER",
            "name" : "Plenty",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Plenty"
                    }
                }
            ]
        }
    ],
    "sentiment_score" : -0.600000023841858,
    "text" : "Very poor service. Very rude and cheapscapes. Wouldn't recommend because they're overpriced for the quality of their food. Plenty of other places.  I would AVOID this place.",
    "word_count" : 27,
    "title" : "Very poor service. Very rude",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Very poor service."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Very rude and cheapscapes."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Wouldn't recommend because they're overpriced for the quality of their food."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Plenty of other places."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I would AVOID this place."
            }
        }
    ],
    "review_date" : Date("2020-02-21T08:00:00.000Z"),
    "response_date" : null,
    "photos" : null,
    "rating" : 1,
    "user_name" : "Dominick M.",
    "platform" : "Yelp",
    "response_text" : "Thank you for taking the time to share your experience,Apologies about the experience that you had,Apologies about the place this is far below the standard that we set ourselves. We hope to have the opportunity to show you the quality of service that we are known for. ,We hope to have the opportunity to show you the level of service that we are known for,Thanks,",
    "review_read" : null,
    "business_id" : "ks-internet-cafe-berkeley",
    "timestamp" : Date("2018-01-04T19:09:40.057Z"),
    "__v" : 0
},
{
    "_id" : "5a4e7bf4651dfbd5bed8469c",
    "external_id" : "DjTGyH31-81OUBqz6wLhyQ",
    "tags" : [ 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.220575571060181,
            "type" : "OTHER",
            "name" : "Customer service",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Customer service"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "salience" : 0.220575571060181,
            "type" : "OTHER",
            "name" : "work",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.800000011920929,
                        "magnitude" : 0.800000011920929
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "work"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.220575571060181,
            "type" : "OTHER",
            "name" : "def",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "def"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.0419847741723061,
            "type" : "LOCATION",
            "name" : "cafe",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "cafe"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0324784927070141,
            "type" : "OTHER",
            "name" : "salad",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "salad"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0284463763237,
            "type" : "OTHER",
            "name" : "door",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "door"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0284463763237,
            "type" : "OTHER",
            "name" : "office",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "office"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0284463763237,
            "type" : "OTHER",
            "name" : "aid",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "aid"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0284463763237,
            "type" : "OTHER",
            "name" : "bcc",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "bcc"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0260473936796188,
            "type" : "OTHER",
            "name" : "olives",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "olives"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0193673949688673,
            "type" : "OTHER",
            "name" : "pasta salad ect",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "pasta salad ect"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0193673949688673,
            "type" : "OTHER",
            "name" : "sandwiches",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "sandwiches"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0193673949688673,
            "type" : "OTHER",
            "name" : "tea",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "tea"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0193673949688673,
            "type" : "OTHER",
            "name" : "calzones",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "calzones"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.016891110688448,
            "type" : "LOCATION",
            "name" : "Greek",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Greek"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.0113672027364373,
            "type" : "OTHER",
            "name" : "touch",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "touch"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.00973235256969929,
            "type" : "OTHER",
            "name" : "bite pastries",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "bite pastries"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.00851687975227833,
            "type" : "OTHER",
            "name" : "coffees",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffees"
                    }
                }
            ]
        }
    ],
    "sentiment_score" : 0.300000011920929,
    "text" : "Customer service could def use some work. Not rude, just not friendly... It's odd.Cute clean quiet cafe right next door to bcc financial aid office- I stopped in to grab a Greek salad- it was yummy although they forgot to put my olives on it. $3.95 for it. They have quick bite pastries, coffees, tea, calzones, sandwiches, pasta salad ect. Has potential just needs some friendly touch and faces!",
    "word_count" : 69,
    "title" : "Customer service could def use",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : 0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Customer service could def use some work."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Not rude, just not friendly..."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "It's odd.Cute clean quiet cafe right next door to bcc financial aid office- I stopped in to grab a Greek salad- it was yummy although they forgot to put my olives on it."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "$3.95 for it."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "They have quick bite pastries, coffees, tea, calzones, sandwiches, pasta salad ect."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Has potential just needs some friendly touch and faces!"
            }
        }
    ],
    "review_date" : Date("2020-05-23T07:00:00.000Z"),
    "response_date" : null,
    "photos" : 59,
    "rating" : 3,
    "user_name" : "Janae L.",
    "platform" : "Yelp",
    "response_text" : "Hi,,It was nice to read about your experience with our cafe. ,Thanks again for your comments,Thanks,",
    "review_read" : null,
    "business_id" : "ks-internet-cafe-berkeley",
    "timestamp" : Date("2018-01-04T19:09:40.082Z"),
    "__v" : 0
},
{
    "_id" : "5a4e7bf4651dfbd5bed8469e",
    "external_id" : "IMIiMbe46gWgDyx581pB7g",
    "tags" : [ 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.753027021884918,
            "type" : "OTHER",
            "name" : "door",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "door"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0796980410814285,
            "type" : "ORGANIZATION",
            "name" : "Berkeley City College",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Berkeley City College"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.0441813468933105,
            "type" : "OTHER",
            "name" : "spot",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "spot"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0441813468933105,
            "type" : "OTHER",
            "name" : "coffee",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "coffee"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0405228920280933,
            "type" : "OTHER",
            "name" : "Internet access",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0,
                        "magnitude" : 0
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Internet access"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "salience" : 0.0257770195603371,
            "type" : "LOCATION",
            "name" : "cafe",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.300000011920929,
                        "magnitude" : 0.300000011920929
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "cafe"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.012612315826118,
            "type" : "PERSON",
            "name" : "guys",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.100000001490116,
                        "magnitude" : 0.100000001490116
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "guys"
                    }
                }
            ]
        }
    ],
    "sentiment_score" : 0.600000023841858,
    "text" : "This is next door to Berkeley City College.  A great spot for coffee with Internet access. The two guys running the cafe are really nice.",
    "word_count" : 25,
    "title" : "This is next door to",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "This is next door to Berkeley City College."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "A great spot for coffee with Internet access."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The two guys running the cafe are really nice."
            }
        }
    ],
    "review_date" : Date("2020-10-17T07:00:00.000Z"),
    "response_date" : null,
    "photos" : 25,
    "rating" : 4,
    "user_name" : "Mary P.",
    "platform" : "Yelp",
    "response_text" : "Thank you for taking the time to share your experience,I'm glad you enjoyed your visit,I love to read that you enjoyed the spot. ,We look forward to welcoming back for your next visit,Thanks,",
    "review_read" : null,
    "business_id" : "ks-internet-cafe-berkeley",
    "timestamp" : Date("2018-01-04T19:09:40.111Z"),
    "__v" : 0
}
];

db.Review
  .remove({})
  .then(() => db.Review.collection.insertMany(reviewSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
