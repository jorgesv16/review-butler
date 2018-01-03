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

const reviewSeed = [
{   "sentiment_score" : 0.400000005960464,
    "text" : "Pros: I love coming here to study! There are outlets everywhere, it's open late, and the wifi is pretty good. The coffee is also pretty decent and they have a really big menu for food (it gets a little pricey though). I love their Mexican taco salad, tiger burger and chicken strips. Cons: Seating is sometimes really hard to find. They divide the place into the cafe area and restaurant area. If you go there to study, all the plugs are located in the cafe area and the place is really full at night time. Also, there's this really rude Asian man who works at the drinks counter at night time (other people on staff are pretty nice though!).",
    "word_count" : 136,
    "title" : "I love coming here to study!",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Pros: I love coming here to study!"
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "There are outlets everywhere, it's open late, and the wifi is pretty good."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The coffee is also pretty decent and they have a really big menu for food (it gets a little pricey though)."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I love their Mexican taco salad, tiger burger and chicken strips."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.5,
                "magnitude" : 0.5
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Cons: Seating is sometimes really hard to find."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "They divide the place into the cafe area and restaurant area."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.5,
                "magnitude" : 0.5
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "If you go there to study, all the plugs are located in the cafe area and the place is really full at night time."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Also, there's this really rude Asian man who works at the drinks counter at night time (other people on staff are pretty nice though!)."
            }
        }
    ],
    "review_date" : Date("2017-12-28T04:24:18.420Z"),
    "response_date" : Date("2017-12-28T18:46:04.523Z"),
    "photos" : 14,
    "rating" : 5,
    "user_name" : "Meg P.",
    "platform" : "Yelp",
    "response_text" : "Thanks for sharing your feedback from your visit. We look forward to seeing you again. Kind Regards,. I'm glad you enjoyed your experience",
    "review_read" : null,
    "business_id" : "wood-tavern-oakland",
    "timestamp" : "Wed Dec 27 2017 17:00:07 GMT-0800 (PST)",
    "__v" : 0,
    "tags" : [ 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.218022406101227,
            "type" : "PERSON",
            "name" : "Pros",
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
                        "content" : "Pros"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.106018088757992,
            "type" : "LOCATION",
            "name" : "everywhere",
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
                        "content" : "everywhere"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0996339246630669,
            "type" : "OTHER",
            "name" : "outlets",
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
                        "content" : "outlets"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.400000005960464,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.0697443336248398,
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
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.0500954315066338,
            "type" : "OTHER",
            "name" : "wifi",
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
                        "content" : "wifi"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "salience" : 0.0498409830033779,
            "type" : "OTHER",
            "name" : "coffee",
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
                        "content" : "coffee"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 1.79999995231628
            },
            "salience" : 0.0478919595479965,
            "type" : "PERSON",
            "name" : "man",
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
                        "content" : "man"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "salience" : 0.0335277244448662,
            "type" : "OTHER",
            "name" : "Seating",
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
                        "content" : "Seating"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0314163118600845,
            "type" : "LOCATION",
            "name" : "cafe area",
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
                        "content" : "cafe area"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0314163118600845,
            "type" : "LOCATION",
            "name" : "restaurant area",
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
                        "content" : "restaurant area"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0285883937031031,
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
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.0285391639918089,
            "type" : "OTHER",
            "name" : "taco salad",
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
                        "content" : "taco salad"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.027579115703702,
            "type" : "OTHER",
            "name" : "food",
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
            "salience" : 0.0274791922420263,
            "type" : "OTHER",
            "name" : "tiger burger",
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
                        "content" : "tiger burger"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0274791922420263,
            "type" : "OTHER",
            "name" : "chicken strips",
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
                        "content" : "chicken strips"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0274019315838814,
            "type" : "OTHER",
            "name" : "Cons",
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
                        "content" : "Cons"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0162979159504175,
            "type" : "LOCATION",
            "name" : "Mexican",
            "metadata" : {
                "wikipedia_url" : "https://en.wikipedia.org/wiki/Mexican_cuisine",
                "mid" : "/m/051zk"
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
                        "content" : "Mexican"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0129226595163345,
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
                "score" : 0.600000023841858,
                "magnitude" : 0.600000023841858
            },
            "salience" : 0.0129226595163345,
            "type" : "PERSON",
            "name" : "staff",
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
                        "content" : "staff"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.012130226008594,
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
            "salience" : 0.0114840753376484,
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
            "salience" : 0.0110524436458945,
            "type" : "LOCATION",
            "name" : "Asian",
            "metadata" : {
                "wikipedia_url" : "https://en.wikipedia.org/wiki/Asia",
                "mid" : "/m/0j0k"
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
                        "content" : "Asian"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0103097418323159,
            "type" : "LOCATION",
            "name" : "cafe area",
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
                        "content" : "cafe area"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00820581428706646,
            "type" : "OTHER",
            "name" : "plugs",
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
                        "content" : "plugs"
                    }
                }
            ]
        }
    ]
},

/* 2 */
{   "title" : null,
    "user_name" : "Diane W.",
    "rating" : 5,
    "text" : "OVERRATED! Don't believe the hype. 2 stars for service. We had dinner reservations tonight, Saturday and seated immediately. Started off with 2 drinks (meh), cheese (yay) and soup (meh). It took longer than expected for our food to come out. The bread was not warm and the oil was horrible. He ordered the chicken which supposedly was 'the best'... Sorry, but it was bland and on the dry side. I had risotto and scallops (meh), also bland. The ambiance and service was the only thing I liked. This is not the place for people that like flavor. Now I need to redeem myself with a good meal. LaViga!! Here we come..",
    "timestamp" : Date("2017-12-28T01:00:07.960Z"),
    "review_date" : "11/27/2017",
    "response_text" : "Thanks for sharing your feedback. I'm glad you enjoyed your visit. We look forward to seeing you again. Sincerely,",
    "review_read" : null,
    "response_date" : null,
    "sentiment_score" : 0.200000002980232,
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : -0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Reservations are tough to get so I logged on 60 days before we were scheduled to be in San Francisco and got a reservation for 5:30."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Too early?"
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Not if you want a guarantee you will see all of the cart food."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Once diners start getting staggered, as groups from the 5:30 slot start leaving, those fill-in tables won't always get to see all of the cart food  (according to our server)."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "So I was happy we had an early spot."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "We really enjoyed our meal."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "With only 2 of us, the cart approach with the small plates, gave us the opportunity to try a wide variety of dishes."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "If anyone in your party has food allergies/restrictions, the restaurant will provide a printed list of the cart food, otherwise part of the experience is the 'surprise' of the cart contents."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "We tried the majority of the cart items and most of them were excellent (oyster, fry bread with burrata, tempura squash were the standouts)."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "From the menu we ordered:   - Beef tongue pastrami on buckwheat poppy seed pancake (one of my favorite dishes) - State bird (crispy and tender but would not order it again - too plain) - Beef and broccoli (tender meat, my husband did not like the sauce) - Ice cream sandwiches (light, delicious) The restaurant did get very noisy and the tables are fairly close together, so don't expect a romantic private meal, just good food with a few surprises."
            }
        }
    ],
    "tags" : [ 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.121711976826191,
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
                "score" : 0.100000001490116,
                "magnitude" : 0.300000011920929
            },
            "salience" : 0.110685355961323,
            "type" : "OTHER",
            "name" : "ambiance",
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
                        "content" : "ambiance"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : 0.100000001490116,
                        "magnitude" : 0.100000001490116
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
                "score" : -0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "salience" : 0.107360117137432,
            "type" : "OTHER",
            "name" : "hype",
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
                        "content" : "hype"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.106821797788143,
            "type" : "OTHER",
            "name" : "stars",
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
                        "content" : "stars"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.10644144564867,
            "type" : "OTHER",
            "name" : "dinner reservations",
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
                        "content" : "dinner reservations"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0831247270107269,
            "type" : "OTHER",
            "name" : "chicken",
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
                        "content" : "chicken"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.041044183075428,
            "type" : "OTHER",
            "name" : "cheese",
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
                        "content" : "cheese"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.041044183075428,
            "type" : "CONSUMER_GOOD",
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
            "salience" : 0.0370286516845226,
            "type" : "OTHER",
            "name" : "food",
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
                        "content" : "food"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.0329966582357883,
            "type" : "CONSUMER_GOOD",
            "name" : "bread",
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
                        "content" : "bread"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "salience" : 0.0329966582357883,
            "type" : "OTHER",
            "name" : "oil",
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
                        "content" : "oil"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0277755688875914,
            "type" : "OTHER",
            "name" : "soup",
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
                        "content" : "soup"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0252773519605398,
            "type" : "OTHER",
            "name" : "best",
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
                        "content" : "best"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0252398066222668,
            "type" : "OTHER",
            "name" : "side",
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
                        "content" : "side"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0233139805495739,
            "type" : "OTHER",
            "name" : "place",
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
                        "content" : "place"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.5,
                "magnitude" : 0.5
            },
            "salience" : 0.0192899685353041,
            "type" : "OTHER",
            "name" : "flavor",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.5,
                        "magnitude" : 0.5
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "flavor"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0188085380941629,
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
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.0130209550261497,
            "type" : "OTHER",
            "name" : "meal",
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
                        "content" : "meal"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00945375021547079,
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
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.00828216224908829,
            "type" : "OTHER",
            "name" : "risotto",
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
                        "content" : "risotto"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "salience" : 0.00828216224908829,
            "type" : "OTHER",
            "name" : "scallops",
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
                        "content" : "scallops"
                    }
                }
            ]
        }
    ]
},

/* 3 */
{   "sentiment_score" : 0.400000005960464,
    "text" : "Took the bf here for his bday celebration, which was a good choice. Even though the menu is fairly limited, you can tell that a lot of love is put into each of the dishes they do have. The staff all seem to love what they do, as they were making genuine conversation with all the tables and providing their favorite recommendations. We started off by getting a bottle of Pinot Noir to share and their grilled squid appetizer. For our mains, the bf ordered their rib eye and said that it was the best rib eye dish he's ever had. For someone that can be very critical about small details, this is saying something. I ordered their chicken, which our waiter said was one of their signature dishes. The chicken was very juicy and full of flavor, and I don't regret my choice at all. However, the reason why I gave this place 4 stars instead of 5 stars is that I felt my chicken dish and the squid appetizer were too salty. The salt overpowered the dish and made it less enjoyable than it could have been. Otherwise, the rest of our experience was great and I would recommend anyone to give this place a try.",
    "word_count" : 208,
    "title" : "Took the bf here for",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : 0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Took the bf here for his bday celebration, which was a good choice."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.600000023841858,
                "magnitude" : 0.600000023841858
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Even though the menu is fairly limited, you can tell that a lot of love is put into each of the dishes they do have."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The staff all seem to love what they do, as they were making genuine conversation with all the tables and providing their favorite recommendations."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "We started off by getting a bottle of Pinot Noir to share and their grilled squid appetizer."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.600000023841858,
                "magnitude" : 0.600000023841858
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "For our mains, the bf ordered their rib eye and said that it was the best rib eye dish he's ever had."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.5,
                "magnitude" : 0.5
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "For someone that can be very critical about small details, this is saying something."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I ordered their chicken, which our waiter said was one of their signature dishes."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The chicken was very juicy and full of flavor, and I don't regret my choice at all."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.5,
                "magnitude" : 0.5
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "However, the reason why I gave this place 4 stars instead of 5 stars is that I felt my chicken dish and the squid appetizer were too salty."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The salt overpowered the dish and made it less enjoyable than it could have been."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Otherwise, the rest of our experience was great and I would recommend anyone to give this place a try."
            }
        }
    ],
    "review_date" : "Wed Dec 27 2017 17:00:07 GMT-0800 (PST)",
    "response_date" : Date("2017-12-28T05:26:41.029Z"),
    "photos" : 377,
    "rating" : 4,
    "user_name" : "Anita L.",
    "platform" : "Yelp",
    "response_text" : "Thanks for sharing your feedback. I'm glad you enjoyed your visit. We look forward to seeing you again. Sincerely,",
    "review_read" : null,
    "business_id" : "wood-tavern-oakland",
    "timestamp" : "Wed Dec 27 2017 17:00:07 GMT-0800 (PST)",
    "__v" : 0,
    "tags" : [ 
        {
            "sentiment" : {
                "score" : 0.600000023841858,
                "magnitude" : 1.89999997615814
            },
            "salience" : 0.465446710586548,
            "type" : "EVENT",
            "name" : "bday celebration",
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
                        "content" : "bday celebration"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "choice"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0828595384955406,
            "type" : "OTHER",
            "name" : "bf",
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
                        "content" : "bf"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "salience" : 0.0386901423335075,
            "type" : "OTHER",
            "name" : "menu",
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
                        "content" : "menu"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 1.70000004768372
            },
            "salience" : 0.0328360535204411,
            "type" : "OTHER",
            "name" : "rib eye dish",
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
                        "content" : "rib eye dish"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.600000023841858,
                "magnitude" : 0.600000023841858
            },
            "salience" : 0.0316582582890987,
            "type" : "OTHER",
            "name" : "lot",
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
                        "content" : "lot"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0296593066304922,
            "type" : "OTHER",
            "name" : "each",
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
                        "content" : "each"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.200000002980232,
                "magnitude" : 0.699999988079071
            },
            "salience" : 0.0288601294159889,
            "type" : "OTHER",
            "name" : "salt",
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
                        "content" : "salt"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0264106746762991,
            "type" : "OTHER",
            "name" : "chicken",
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
                        "content" : "chicken"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0235409382730722,
            "type" : "PERSON",
            "name" : "bf",
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
                        "content" : "bf"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0206142514944077,
            "type" : "OTHER",
            "name" : "mains",
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
                        "content" : "mains"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0174266286194324,
            "type" : "OTHER",
            "name" : "dishes",
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
                        "content" : "dishes"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0155619578436017,
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
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0127150388434529,
            "type" : "PERSON",
            "name" : "staff",
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
                        "content" : "staff"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0121504804119468,
            "type" : "OTHER",
            "name" : "love",
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
                        "content" : "love"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0106149790808558,
            "type" : "OTHER",
            "name" : "signature dishes",
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
                        "content" : "signature dishes"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00929952599108219,
            "type" : "OTHER",
            "name" : "squid appetizer",
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
                        "content" : "squid appetizer"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00927331577986479,
            "type" : "OTHER",
            "name" : "rib eye",
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
                        "content" : "rib eye"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00925195496529341,
            "type" : "PERSON",
            "name" : "someone",
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
                        "content" : "someone"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00846788939088583,
            "type" : "OTHER",
            "name" : "something",
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
                        "content" : "something"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00816808175295591,
            "type" : "OTHER",
            "name" : "tables",
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
                        "content" : "tables"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00813840236514807,
            "type" : "CONSUMER_GOOD",
            "name" : "bottle",
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
                        "content" : "bottle"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.00789971463382244,
            "type" : "OTHER",
            "name" : "dish",
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
                        "content" : "dish"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00787902437150478,
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
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00741033814847469,
            "type" : "OTHER",
            "name" : "details",
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
                        "content" : "details"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0068549900315702,
            "type" : "PERSON",
            "name" : "waiter",
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
                        "content" : "waiter"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00629676040261984,
            "type" : "PERSON",
            "name" : "squid appetizer",
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
                        "content" : "squid appetizer"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00629676040261984,
            "type" : "PERSON",
            "name" : "stars",
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
                        "content" : "stars"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00629676040261984,
            "type" : "OTHER",
            "name" : "stars",
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
                        "content" : "stars"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00626150192692876,
            "type" : "OTHER",
            "name" : "recommendations",
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
                        "content" : "recommendations"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00482126651331782,
            "type" : "CONSUMER_GOOD",
            "name" : "Pinot Noir",
            "metadata" : {
                "wikipedia_url" : "https://en.wikipedia.org/wiki/Pinot_noir",
                "mid" : "/m/01c2z6"
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
                        "content" : "Pinot Noir"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "salience" : 0.00454481458291411,
            "type" : "OTHER",
            "name" : "rest",
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
                        "content" : "rest"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00451852520927787,
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
                "score" : 0.600000023841858,
                "magnitude" : 0.600000023841858
            },
            "salience" : 0.00420468859374523,
            "type" : "OTHER",
            "name" : "choice",
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
                        "content" : "choice"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.5,
                "magnitude" : 0.5
            },
            "salience" : 0.00380606018006802,
            "type" : "OTHER",
            "name" : "experience",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.5,
                        "magnitude" : 0.5
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "experience"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00363356992602348,
            "type" : "OTHER",
            "name" : "chicken",
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
                        "content" : "chicken"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00342885009013116,
            "type" : "OTHER",
            "name" : "chicken dish",
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
                        "content" : "chicken dish"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.00335301551967859,
            "type" : "PERSON",
            "name" : "anyone",
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
            "salience" : 0.00296136667020619,
            "type" : "OTHER",
            "name" : "reason",
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
                        "content" : "reason"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00276340451091528,
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
            "salience" : 0.00270302151329815,
            "type" : "OTHER",
            "name" : "try",
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
                        "content" : "try"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "salience" : 0.00242130551487207,
            "type" : "OTHER",
            "name" : "flavor",
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
                        "content" : "flavor"
                    }
                }
            ]
        }
    ]
},

/* 4 */
{   "sentiment_score" : 0.600000023841858,
    "text" : "Meeting up with my Cal college roomie (from  45 years ago) Wood Tavern was our destination for a festive holiday lunch. Planning, with a reservation was the way to go, as the place was hopping on a Monday. The sandwich menu offers great value, with portions that won't send you directly into elastic waistband expando pants. The pork loin sandwich with garlicky, buttery, grilled broccoli rabe = PERFECTION. Served on a lightly toasted french roll, the tender meat and tasty greens combined delightfully with the warm bread.  A very fresh handmade slaw accompanies the plate.  Roomie opted for the traditional burger which came with a literal mountain of fries. Very shareable.The liveliness of the room is a blessing and a bane for those of us with older ears. Expect a few days of tinnitnus. But TOTALLY worth it for the food!",
    "word_count" : 141,
    "title" : "Meeting up with my Cal",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Meeting up with my Cal college roomie (from  45 years ago) Wood Tavern was our destination for a festive holiday lunch."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Planning, with a reservation was the way to go, as the place was hopping on a Monday."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.600000023841858,
                "magnitude" : 0.600000023841858
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The sandwich menu offers great value, with portions that won't send you directly into elastic waistband expando pants."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The pork loin sandwich with garlicky, buttery, grilled broccoli rabe = PERFECTION."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Served on a lightly toasted french roll, the tender meat and tasty greens combined delightfully with the warm bread."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "A very fresh handmade slaw accompanies the plate."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Roomie opted for the traditional burger which came with a literal mountain of fries."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Very shareable.The liveliness of the room is a blessing and a bane for those of us with older ears."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Expect a few days of tinnitnus."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "But TOTALLY worth it for the food!"
            }
        }
    ],
    "review_date" : "Wed Dec 27 2017 17:00:07 GMT-0800 (PST)",
    "response_date" : Date("2017-12-28T05:15:47.208Z"),
    "photos" : null,
    "rating" : 4,
    "user_name" : "Carol N.",
    "platform" : "Yelp",
    "response_text" : "Thank you for taking the time to share your feedback. I'm glad you enjoyed your visit. We look forward to seeing you again",
    "review_read" : null,
    "business_id" : "wood-tavern-oakland",
    "timestamp" : "Wed Dec 27 2017 17:00:07 GMT-0800 (PST)",
    "__v" : 0,
    "tags" : [ 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.296426117420197,
            "type" : "LOCATION",
            "name" : "Wood Tavern",
            "metadata" : {
                "mid" : "/g/11b6_gd8my"
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
                        "content" : "Wood Tavern"
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
                        "content" : "destination"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.138180643320084,
            "type" : "LOCATION",
            "name" : "college roomie",
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
                        "content" : "college roomie"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0874712392687798,
            "type" : "OTHER",
            "name" : "Planning",
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
                        "content" : "Planning"
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
            "salience" : 0.0668268948793411,
            "type" : "LOCATION",
            "name" : "Cal",
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
                        "content" : "Cal"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.200000002980232,
                "magnitude" : 0.5
            },
            "salience" : 0.0480393208563328,
            "type" : "OTHER",
            "name" : "liveliness",
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
                        "content" : "liveliness"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : 0.200000002980232,
                        "magnitude" : 0.200000002980232
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "blessing"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0434282645583153,
            "type" : "EVENT",
            "name" : "holiday lunch",
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
                        "content" : "holiday lunch"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0354213789105415,
            "type" : "OTHER",
            "name" : "portions",
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
                        "content" : "portions"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0240611415356398,
            "type" : "OTHER",
            "name" : "sandwich menu",
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
                        "content" : "sandwich menu"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0207941476255655,
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
            "salience" : 0.0207941476255655,
            "type" : "OTHER",
            "name" : "reservation",
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
                        "content" : "reservation"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0159277897328138,
            "type" : "OTHER",
            "name" : "pork loin sandwich",
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
                        "content" : "pork loin sandwich"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.0139943463727832,
            "type" : "OTHER",
            "name" : "value",
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
                        "content" : "value"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0139943463727832,
            "type" : "CONSUMER_GOOD",
            "name" : "expando pants",
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
                        "content" : "expando pants"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0139943463727832,
            "type" : "OTHER",
            "name" : "waistband",
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
                        "content" : "waistband"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.013943612575531,
            "type" : "OTHER",
            "name" : "PERFECTION",
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
                        "content" : "PERFECTION"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.013943612575531,
            "type" : "OTHER",
            "name" : "broccoli rabe",
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
                        "content" : "broccoli rabe"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.012728082947433,
            "type" : "OTHER",
            "name" : "tender meat",
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
                        "content" : "tender meat"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.012728082947433,
            "type" : "OTHER",
            "name" : "bread",
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
                        "content" : "bread"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.012728082947433,
            "type" : "OTHER",
            "name" : "french roll",
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
                        "content" : "french roll"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.600000023841858,
                "magnitude" : 0.600000023841858
            },
            "salience" : 0.012728082947433,
            "type" : "OTHER",
            "name" : "greens",
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
                        "content" : "greens"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "salience" : 0.0118815619498491,
            "type" : "LOCATION",
            "name" : "room",
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
                        "content" : "room"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.200000002980232,
                "magnitude" : 0.400000005960464
            },
            "salience" : 0.0117200957611203,
            "type" : "OTHER",
            "name" : "burger",
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
                        "content" : "burger"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.00947711709886789,
            "type" : "OTHER",
            "name" : "mountain",
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
                        "content" : "mountain"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.00947711709886789,
            "type" : "CONSUMER_GOOD",
            "name" : "fries",
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
                        "content" : "fries"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.5,
                "magnitude" : 0.5
            },
            "salience" : 0.00946112815290689,
            "type" : "OTHER",
            "name" : "bane",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.5,
                        "magnitude" : 0.5
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "bane"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00655527133494616,
            "type" : "OTHER",
            "name" : "ears",
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
                        "content" : "ears"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00654550455510616,
            "type" : "OTHER",
            "name" : "tinnitnus",
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
                        "content" : "tinnitnus"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00653678039088845,
            "type" : "OTHER",
            "name" : "food",
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
            "salience" : 0.00417028507217765,
            "type" : "CONSUMER_GOOD",
            "name" : "plate",
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
                        "content" : "plate"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0030968994833529,
            "type" : "PERSON",
            "name" : "Roomie",
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
                        "content" : "Roomie"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "salience" : 0.00292456522583961,
            "type" : "OTHER",
            "name" : "slaw",
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
                        "content" : "slaw"
                    }
                }
            ]
        }
    ]
},

/* 5 */
{   "sentiment_score" : 0.5,
    "text" : "Plan ahead if you want to have dinner here. I booked a table for 3 for Friday night about a week in advance. We were seated right away when we arrived, at the table by the window on the left when you first walk in.In our usual style, we shared our entrees:-Ling Cod: There are so many pictures of the Alaskan Halibut on Yelp but none of ling cod. We ordered it anyway and it was a great choice. The fish was cooked perfectly.-Duck Breast: Beautiful color and served with a lovely sunchoke puree and cute balsamic glazed grapes.-Pork Chop: This is a house special and it was fantastic. Get it!Even though we were full, we wanted to try one of the desserts. The one that sounded the most unique was the lemon crepe cake. It was luxurious, refreshing, and so delicious. We all agreed that the meal was special and Wood Tavern is an excellent spot.",
    "word_count" : 157,
    "title" : "Plan ahead if you want",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : 0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Plan ahead if you want to have dinner here."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "I booked a table for 3 for Friday night about a week in advance."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "We were seated right away when we arrived, at the table by the window on the left when you first walk in.In our usual style, we shared our entrees:-Ling Cod: There are so many pictures of the Alaskan Halibut on Yelp but none of ling cod."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "We ordered it anyway and it was a great choice."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The fish was cooked perfectly.-Duck Breast: Beautiful color and served with a lovely sunchoke puree and cute balsamic glazed grapes.-Pork Chop: This is a house special and it was fantastic."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Get it!Even though we were full, we wanted to try one of the desserts."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The one that sounded the most unique was the lemon crepe cake."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "It was luxurious, refreshing, and so delicious."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "We all agreed that the meal was special and Wood Tavern is an excellent spot."
            }
        }
    ],
    "review_date" : "Wed Dec 27 2017 17:00:07 GMT-0800 (PST)",
    "response_date" : Date("2017-12-28T05:21:36.450Z"),
    "photos" : 1018,
    "rating" : 5,
    "user_name" : "Yi Z.",
    "platform" : "Yelp",
    "response_text" : "Thanks for your review. We work really hard to offer the best experience for our customers so I'm grateful to see that you enjoyed your visit. We look forward to seeing you again. Thanks,",
    "review_read" : null,
    "business_id" : "wood-tavern-oakland",
    "timestamp" : "Wed Dec 27 2017 17:00:07 GMT-0800 (PST)",
    "__v" : 0,
    "tags" : [ 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.130224466323853,
            "type" : "OTHER",
            "name" : "dinner",
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
                        "content" : "dinner"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.130224466323853,
            "type" : "OTHER",
            "name" : "Plan",
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
                        "content" : "Plan"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.600000023841858,
                "magnitude" : 1.89999997615814
            },
            "salience" : 0.12772174179554,
            "type" : "OTHER",
            "name" : "choice",
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
                        "content" : "choice"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.300000011920929,
                "magnitude" : 1
            },
            "salience" : 0.123425327241421,
            "type" : "OTHER",
            "name" : "fish",
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
                        "content" : "fish"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.300000011920929,
                "magnitude" : 1.10000002384186
            },
            "salience" : 0.0888741388916969,
            "type" : "OTHER",
            "name" : "lemon crepe cake",
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
                        "content" : "one"
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
                        "content" : "lemon crepe cake"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0649783909320831,
            "type" : "OTHER",
            "name" : "table",
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
                        "content" : "table"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0275457408279181,
            "type" : "OTHER",
            "name" : "table",
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
                        "content" : "table"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0242419317364693,
            "type" : "OTHER",
            "name" : "advance",
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
                        "content" : "advance"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0241183023899794,
            "type" : "OTHER",
            "name" : "window",
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
                        "content" : "window"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0241183023899794,
            "type" : "OTHER",
            "name" : "left",
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
                        "content" : "left"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.018738666549325,
            "type" : "OTHER",
            "name" : "entrees",
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
                        "content" : "entrees"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.018630625680089,
            "type" : "OTHER",
            "name" : "ling cod",
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
                        "content" : "ling cod"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0183422602713108,
            "type" : "OTHER",
            "name" : "one",
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
                        "content" : "one"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0163077618926764,
            "type" : "OTHER",
            "name" : "none",
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
                        "content" : "none"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0163077618926764,
            "type" : "OTHER",
            "name" : "style",
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
                        "content" : "style"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.015309221111238,
            "type" : "WORK_OF_ART",
            "name" : "pictures",
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
                        "content" : "pictures"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.014831000007689,
            "type" : "OTHER",
            "name" : "Breast",
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
                        "content" : "Breast"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "salience" : 0.014831000007689,
            "type" : "OTHER",
            "name" : "color",
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
                        "content" : "color"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "salience" : 0.014831000007689,
            "type" : "OTHER",
            "name" : "sunchoke puree",
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
                        "content" : "sunchoke puree"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.014831000007689,
            "type" : "OTHER",
            "name" : "Pork Chop",
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
                        "content" : "Pork Chop"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.011062229052186,
            "type" : "CONSUMER_GOOD",
            "name" : "desserts",
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
                        "content" : "desserts"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0110461069270968,
            "type" : "LOCATION",
            "name" : "Ling Cod",
            "metadata" : {
                "wikipedia_url" : "https://en.wikipedia.org/wiki/Lingcod",
                "mid" : "/m/0cmvft"
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
                        "content" : "Ling Cod"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0096665071323514,
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
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0096665071323514,
            "type" : "ORGANIZATION",
            "name" : "Alaskan Halibut",
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
                        "content" : "Alaskan Halibut"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.00945496652275324,
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
            "salience" : 0.00910263974219561,
            "type" : "OTHER",
            "name" : "meal",
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
                        "content" : "meal"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00603804225102067,
            "type" : "LOCATION",
            "name" : "house",
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
                        "content" : "house"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "salience" : 0.00552990939468145,
            "type" : "LOCATION",
            "name" : "Wood Tavern",
            "metadata" : {
                "mid" : "/g/11b6_gd8my"
            },
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.699999988079071,
                        "magnitude" : 0.699999988079071
                    },
                    "type" : "PROPER",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "Wood Tavern"
                    }
                }
            ]
        }
    ]
},

/* 6 */
{   "sentiment_score" : 0.400000005960464,
    "text" : "Upscale yet cozy spot on College. Right across from Safeway, parking in this area can be tough, but there is free street parking in the surrounding neighborhoods. Since this place is on the pricier side of things and the location quite small, I would suggest making reservations in advance. We had a reservation for 6PM but we got there 15 minutes earlier and they still sat us down at our table. We were seated near the window which was a great option since we had fresh air while we enjoyed our meal. The location has a great ambiance. There's bar seating where you can see the grill, tables near the window, and tables under a huge mirror that opens the space up and allows for natural lighting. Service here is great! Our waiter was attentive, but hands off enough to ensure he wasn't intrusive in our convos. Drinks here average $13 and are refreshing. We ordered 3 of their speciality cocktails and all tasted like quality. Dishes averaged around $30 each and are great to share. Our waiter brought us extra plates without us even asking in case we wanted to share which was attentive of him. Since we were here to celebrate my friend's birthday our waiter even brought us the ice cream dessert as a complimentary dish. Thank you! FOOD: - Halibut - Fave dish! The fish was nice and flaky and was well seasoned. It wasn't as heavy in comparison to our other 2 dishes so it's a nice dish to include in your meal.- Duck - The duck was tender and not oily with what i'm used to with peking duck and other places. The grapes add a nice texture and taste contrast to the duck.- Pork Chop - This was the heaviest of the 3 dishes. The pork chop is HUGE. It takes around 30 mins to prepare this so be sure to order this early if it's something you prefer. It has a bacon cream sauce that tops the pork chop so you get full quickly! The only con with this dish is that I thought it was closer to the saltier side of things even with the peaches.Had a great meal here and I will be sure coming back. Since it is on the pricier side of things I'll be back for an occasion more so than a weeknight meal.",
    "word_count" : 397,
    "title" : "Upscale yet cozy spot on",
    "sentences_object" : [ 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Upscale yet cozy spot on College."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Right across from Safeway, parking in this area can be tough, but there is free street parking in the surrounding neighborhoods."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Since this place is on the pricier side of things and the location quite small, I would suggest making reservations in advance."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "We had a reservation for 6PM but we got there 15 minutes earlier and they still sat us down at our table."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "We were seated near the window which was a great option since we had fresh air while we enjoyed our meal."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The location has a great ambiance."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "There's bar seating where you can see the grill, tables near the window, and tables under a huge mirror that opens the space up and allows for natural lighting."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Service here is great!"
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Our waiter was attentive, but hands off enough to ensure he wasn't intrusive in our convos."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Drinks here average $13 and are refreshing."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "We ordered 3 of their speciality cocktails and all tasted like quality."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Dishes averaged around $30 each and are great to share."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Our waiter brought us extra plates without us even asking in case we wanted to share which was attentive of him."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.5,
                "magnitude" : 0.5
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Since we were here to celebrate my friend's birthday our waiter even brought us the ice cream dessert as a complimentary dish."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Thank you!"
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.5,
                "magnitude" : 0.5
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "FOOD: - Halibut - Fave dish!"
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The fish was nice and flaky and was well seasoned."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "It wasn't as heavy in comparison to our other 2 dishes so it's a nice dish to include in your meal.- Duck - The duck was tender and not oily with what i'm used to with peking duck and other places."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.600000023841858,
                "magnitude" : 0.600000023841858
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The grapes add a nice texture and taste contrast to the duck.- Pork Chop - This was the heaviest of the 3 dishes."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The pork chop is HUGE."
            }
        }, 
        {
            "sentiment" : {
                "score" : -0.5,
                "magnitude" : 0.5
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "It takes around 30 mins to prepare this so be sure to order this early if it's something you prefer."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "It has a bacon cream sauce that tops the pork chop so you get full quickly!"
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.800000011920929,
                "magnitude" : 0.800000011920929
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "The only con with this dish is that I thought it was closer to the saltier side of things even with the peaches.Had a great meal here and I will be sure coming back."
            }
        }, 
        {
            "sentiment" : {
                "score" : 0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "text" : {
                "beginOffset" : -1,
                "content" : "Since it is on the pricier side of things I'll be back for an occasion more so than a weeknight meal."
            }
        }
    ],
    "review_date" : "Wed Dec 27 2017 17:00:07 GMT-0800 (PST)",
    "response_date" : null,
    "photos" : 571,
    "rating" : 4,
    "user_name" : "Keizzel C.",
    "platform" : "Yelp",
    "response_text" : "Thanks for sharing your experience. I'm glad you enjoyed your visit. Thanks again for your comments",
    "review_read" : null,
    "business_id" : "wood-tavern-oakland",
    "timestamp" : "Wed Dec 27 2017 17:00:07 GMT-0800 (PST)",
    "__v" : 0,
    "tags" : [ 
        {
            "sentiment" : {
                "score" : 0.5,
                "magnitude" : 1.60000002384186
            },
            "salience" : 0.08920868486166,
            "type" : "OTHER",
            "name" : "window",
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
                        "content" : "window"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : 0.899999976158142,
                        "magnitude" : 0.899999976158142
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
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0535226538777351,
            "type" : "OTHER",
            "name" : "College",
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
                        "content" : "College"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.0535226538777351,
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
                "score" : 0.100000001490116,
                "magnitude" : 1.70000004768372
            },
            "salience" : 0.0493359453976154,
            "type" : "PERSON",
            "name" : "waiter",
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
                        "content" : "waiter"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : -0.5,
                        "magnitude" : 0.5
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "waiter"
                    }
                }, 
                {
                    "sentiment" : {
                        "score" : 0.200000002980232,
                        "magnitude" : 0.200000002980232
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "waiter"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0395263433456421,
            "type" : "OTHER",
            "name" : "mirror",
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
                        "content" : "mirror"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0373905599117279,
            "type" : "OTHER",
            "name" : "reservations",
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
                        "content" : "reservations"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0357368476688862,
            "type" : "OTHER",
            "name" : "street parking",
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
                        "content" : "street parking"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0357368476688862,
            "type" : "OTHER",
            "name" : "parking",
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
                        "content" : "parking"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.5,
                "magnitude" : 0.5
            },
            "salience" : 0.0355549231171608,
            "type" : "OTHER",
            "name" : "place",
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
                        "content" : "place"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.0319376327097416,
            "type" : "OTHER",
            "name" : "side",
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
                        "content" : "side"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "salience" : 0.0319376327097416,
            "type" : "OTHER",
            "name" : "things",
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
                        "content" : "things"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "salience" : 0.0290647353976965,
            "type" : "LOCATION",
            "name" : "location",
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
            "salience" : 0.0255769491195679,
            "type" : "LOCATION",
            "name" : "neighborhoods",
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
                        "content" : "neighborhoods"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0255769491195679,
            "type" : "LOCATION",
            "name" : "area",
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
                        "content" : "area"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0254464466124773,
            "type" : "OTHER",
            "name" : "advance",
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
                        "content" : "advance"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0205066744238138,
            "type" : "OTHER",
            "name" : "something",
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
                        "content" : "something"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0192648749798536,
            "type" : "OTHER",
            "name" : "bar seating",
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
                        "content" : "bar seating"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0151704177260399,
            "type" : "ORGANIZATION",
            "name" : "Safeway",
            "metadata" : {
                "wikipedia_url" : "https://en.wikipedia.org/wiki/Safeway_Inc.",
                "mid" : "/m/03lpnx"
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
                        "content" : "Safeway"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0136417550966144,
            "type" : "OTHER",
            "name" : "Dishes",
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
                        "content" : "Dishes"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.0133845461532474,
            "type" : "OTHER",
            "name" : "space",
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
                        "content" : "space"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.200000002980232,
                "magnitude" : 0.200000002980232
            },
            "salience" : 0.0131655931472778,
            "type" : "LOCATION",
            "name" : "location",
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
                        "content" : "location"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.012912180274725,
            "type" : "OTHER",
            "name" : "meal",
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
                        "content" : "meal"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0121853854507208,
            "type" : "OTHER",
            "name" : "table",
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
                        "content" : "table"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0111634414643049,
            "type" : "OTHER",
            "name" : "bacon cream sauce",
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
                        "content" : "bacon cream sauce"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0110848061740398,
            "type" : "OTHER",
            "name" : "reservation",
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
                        "content" : "reservation"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.009672568179667,
            "type" : "OTHER",
            "name" : "air",
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
                        "content" : "air"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.00965026579797268,
            "type" : "OTHER",
            "name" : "ambiance",
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
                        "content" : "ambiance"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00931369513273239,
            "type" : "OTHER",
            "name" : "dish",
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
                        "content" : "dish"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "salience" : 0.00930854864418507,
            "type" : "EVENT",
            "name" : "birthday",
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
                        "content" : "birthday"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00929796043783426,
            "type" : "OTHER",
            "name" : "dish",
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
                        "content" : "dish"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00852690823376179,
            "type" : "CONSUMER_GOOD",
            "name" : "plates",
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
                        "content" : "plates"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00817174836993217,
            "type" : "OTHER",
            "name" : "tables",
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
                        "content" : "tables"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00817174836993217,
            "type" : "OTHER",
            "name" : "tables",
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
                        "content" : "tables"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.00795167963951826,
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
            "salience" : 0.00779613619670272,
            "type" : "OTHER",
            "name" : "ice cream dessert",
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
                        "content" : "ice cream dessert"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.5,
                "magnitude" : 1.60000002384186
            },
            "salience" : 0.00743307080119848,
            "type" : "OTHER",
            "name" : "window",
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
                        "content" : "window"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.00702746398746967,
            "type" : "OTHER",
            "name" : "fish",
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
                        "content" : "fish"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00693305674940348,
            "type" : "OTHER",
            "name" : "dishes",
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
                        "content" : "dishes"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00675572454929352,
            "type" : "CONSUMER_GOOD",
            "name" : "grill",
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
                        "content" : "grill"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00675332872197032,
            "type" : "OTHER",
            "name" : "pork chop",
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
                        "content" : "pork chop"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00650375708937645,
            "type" : "OTHER",
            "name" : "lighting",
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
                        "content" : "lighting"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00648308033123612,
            "type" : "OTHER",
            "name" : "convos",
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
                        "content" : "convos"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00647443113848567,
            "type" : "CONSUMER_GOOD",
            "name" : "Drinks",
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
                        "content" : "Drinks"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "salience" : 0.00646661734208465,
            "type" : "OTHER",
            "name" : "quality",
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
            "salience" : 0.00646661734208465,
            "type" : "PERSON",
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
            "salience" : 0.00646661734208465,
            "type" : "OTHER",
            "name" : "speciality cocktails",
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
                        "content" : "speciality cocktails"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00645294412970543,
            "type" : "OTHER",
            "name" : "case",
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
                        "content" : "case"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "salience" : 0.00589967845007777,
            "type" : "PERSON",
            "name" : "friend",
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
            "salience" : 0.00588970398530364,
            "type" : "OTHER",
            "name" : "FOOD",
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
                        "content" : "FOOD"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00588091975077987,
            "type" : "OTHER",
            "name" : "comparison",
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
                        "content" : "comparison"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00550734717398882,
            "type" : "OTHER",
            "name" : "pork chop",
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
                        "content" : "pork chop"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00536499870941043,
            "type" : "PERSON",
            "name" : "con",
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
                        "content" : "con"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00478927418589592,
            "type" : "OTHER",
            "name" : "dish",
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
                        "content" : "dish"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.00410199351608753,
            "type" : "OTHER",
            "name" : "meal",
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
                        "content" : "meal"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00409978069365025,
            "type" : "OTHER",
            "name" : "weeknight meal",
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
                        "content" : "weeknight meal"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "salience" : 0.00381110981106758,
            "type" : "OTHER",
            "name" : "things",
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
                        "content" : "things"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.699999988079071,
                "magnitude" : 0.699999988079071
            },
            "salience" : 0.00381110981106758,
            "type" : "OTHER",
            "name" : "side",
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
                        "content" : "side"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.00380905391648412,
            "type" : "OTHER",
            "name" : "things",
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
                        "content" : "things"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : -0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.00380905391648412,
            "type" : "OTHER",
            "name" : "side",
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
                        "content" : "side"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0036349359434098,
            "type" : "OTHER",
            "name" : "dish",
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
                        "content" : "dish"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.300000011920929,
                "magnitude" : 0.300000011920929
            },
            "salience" : 0.00323108257725835,
            "type" : "OTHER",
            "name" : "peaches.",
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
                        "content" : "peaches."
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00304371491074562,
            "type" : "OTHER",
            "name" : "dishes",
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
                        "content" : "dishes"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.0030309536959976,
            "type" : "EVENT",
            "name" : "occasion",
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
                        "content" : "occasion"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00260678213089705,
            "type" : "OTHER",
            "name" : "duck",
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
                        "content" : "duck"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00260678213089705,
            "type" : "OTHER",
            "name" : "meal.",
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
                        "content" : "meal."
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00260678213089705,
            "type" : "OTHER",
            "name" : "peking duck",
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
                        "content" : "peking duck"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00234528281725943,
            "type" : "EVENT",
            "name" : "heaviest",
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
                        "content" : "heaviest"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.100000001490116,
                "magnitude" : 0.100000001490116
            },
            "salience" : 0.00220268964767456,
            "type" : "LOCATION",
            "name" : "places",
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
                        "content" : "places"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.5,
                "magnitude" : 0.5
            },
            "salience" : 0.00192569510545582,
            "type" : "OTHER",
            "name" : "contrast",
            "metadata" : {},
            "mentions" : [ 
                {
                    "sentiment" : {
                        "score" : 0.5,
                        "magnitude" : 0.5
                    },
                    "type" : "COMMON",
                    "text" : {
                        "beginOffset" : -1,
                        "content" : "contrast"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.899999976158142,
                "magnitude" : 0.899999976158142
            },
            "salience" : 0.00192569510545582,
            "type" : "OTHER",
            "name" : "texture",
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
                        "content" : "texture"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00154289428610355,
            "type" : "PERSON",
            "name" : "Duck",
            "metadata" : {
                "wikipedia_url" : "https://en.wikipedia.org/wiki/Duck",
                "mid" : "/m/09ddx"
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
                        "content" : "Duck"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0.400000005960464,
                "magnitude" : 0.400000005960464
            },
            "salience" : 0.00145678932312876,
            "type" : "OTHER",
            "name" : "grapes",
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
                        "content" : "grapes"
                    }
                }
            ]
        }, 
        {
            "sentiment" : {
                "score" : 0,
                "magnitude" : 0
            },
            "salience" : 0.00143244210630655,
            "type" : "ORGANIZATION",
            "name" : "Pork Chop",
            "metadata" : {
                "wikipedia_url" : "https://en.wikipedia.org/wiki/Pork_chop",
                "mid" : "/m/05hc9_"
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
                        "content" : "Pork Chop"
                    }
                }
            ]
        }
    ]
},

/* 7 */
{   "sentiment_score" : 0,
    "text" : "I had been interested in checking out Wood Tavern for a while, but the place is pretty hip and reservations are needed.  Finally made it over for lunch on a Saturday.  The place is smaller than I imagined and packed, a bit loud and not the most comfortable, but the great service, and good food makes up for it. Pork Belly stole the show.  I am still dreaming of it and usually I am not even a fan of pork belly.  Really good stuff.  The pastrami sandwich was really nice as well.  The beef sandwich was good, but the burger was probably better.  Interesting cocktails but nothing that knocked my socks off. Solid place to impress a date or eat Pork Belly.",
    "word_count" : 122,
    "title" : "I had been interested in",
    "sentences_object" : [],
    "review_date" : "Wed Dec 27 2017 17:00:07 GMT-0800 (PST)",
    "response_date" : null,
    "photos" : 95,
    "rating" : 4,
    "user_name" : "Chelsey G.",
    "platform" : "Yelp",
    "response_text" : "Thanks for sharing your feedback from your visit. I'm glad you enjoyed your experience. Thanks again for reaching out",
    "review_read" : null,
    "business_id" : "wood-tavern-oakland",
    "timestamp" : "Wed Dec 27 2017 17:00:07 GMT-0800 (PST)",
    "__v" : 0
},

/* 8 */
{   "sentiment_score" : 0,
    "text" : "3:00pm first time meet up with a new friend. I get there early as to not keep a woman at the bar by herself. I thought before arriving, \"who's drinking at 3?\"The house is packed! No seats except table service.Kindly I described my first date scenario and this kind host said she would seat us at a window table. Lucky me, a two spot opened at the bar! The superior mixologists let me save a seat and poured up a Club Soda w/Bitters for me. When my friend arrived, she enjoyed a tart lemonade. No pressure to intoxicate or  or snacks, we enjoyed a couple of hours relaxing in conversation. I did eye a gigantic Pastrami sandwich w/Garlic fries!$15 and it was ordered for carry-out for my son. Not just a lovely afternoon with a friend, but just a pleasant opportunity to relax! I mentioned to the bartender it was a first meeting and she suggested, \"Come on back for dinner!\"",
    "word_count" : 161,
    "title" : "3:00pm first time meet up",
    "sentences_object" : [],
    "review_date" : "Wed Dec 27 2017 17:00:07 GMT-0800 (PST)",
    "response_date" : null,
    "photos" : 880,
    "rating" : 5,
    "user_name" : "David N.",
    "platform" : "Yelp",
    "response_text" : "Thanks for your review. I'm glad you enjoyed your visit. Thanks again for your review",
    "review_read" : null,
    "business_id" : "wood-tavern-oakland",
    "timestamp" : "Wed Dec 27 2017 17:00:07 GMT-0800 (PST)",
    "__v" : 0
},

/* 9 */
{   "sentiment_score" : 0,
    "text" : "This now-classic East Bay eatery has been around for over a decade, and I just never got around to trying it until recently when I decided to take out a retiring colleague and her husband for a celebratory dinner there. Now the challenge was that I am on a flexitarian regimen, and the first thing I think of with Wood Tavern is their famous grilled double-cut pork chop. \"Does not compute. Does not compute. Danger, Will Robinson!\" In more gluttonous days, I would have easily ordered that as one of three courses with a cocktail or two to wash it down. In other words, I would have been the ideal customer for Rich and Rebekah Wood's destination dining.I made a 5:30PM reservation on a Monday when there were just a few people at the bar. We scored a table next to the front window where we saw Rockridge life walk past us. We decided to start with the $20 Cheese Board which provided bites of unmitigated joy even without the crusty bread that accompanied it (photo: bit.ly/2ex2eZ2). Along with honey-dipped raw almonds and thin slices of red apple, the board was comprised of four farm-fresh milk cheeses - two cow, one goat, one sheep - with my personal favorite being the St. Angel, a French cow's milk cheese that was indulgently creamy (photo: bit.ly/2eOeuBj).After much encouragement from me, the guest of honor did order the $33 Grilled Double-Cut Pork Chop. According to long-timers, this menu staple has changed over the years, but there isn't consensus on whether it has improved over time. Current chef Esteban Escobar (formerly of Town Hall) accessorized this version with a Marsala cream sauce with pancetta, farro, summer squash and Fresno chiles, all of it topped by half a peach fanned on top of the pork (photo: bit.ly/2eO87Ox). She generously allowed me a couple of bites, and the robust combination of flavors worked completely for me because nothing could overshadow the juicy tenderness of the pork.Perhaps because it has been months since I tasted pork, I was quite enthralled. Her husband ordered the $32 Pan-Seared Alaskan Halibut which was greatly enhanced by a mushroom-Parmesan brodo complemented by white corn, chanterelle mushrooms, cornbread panzanella salad, and English peas (photo: bit.ly/2iQrJGd). Again, it was packed with flavors that worked with each other seamlessly and brought out the freshness of the fish as well. And what did I have? I decided to focus on the starters and began with the $13 Summer Melon & Prosciutto Salad which was mixed with Sausalito Springs watercress, toasted almonds and a plum vinaigrette (photo: bit.ly/2wvGqSi).It was very light and fresh with the prosciutto providing just the right level of meatiness. I segued into a simply executed Mediterranean dish, the $8 Spiced Eggplant and Nardello Peppers with cherry tomato confit, lovage (a celery-like parsley), sesame seeds and a squeeze of lemon (photo: bit.ly/2gxiERH). I found it the perfect vegetarian option for me as I stared enviously at the pork chop she couldn't finish. I had visions of me racing back to the restaurant and rifling through the kitchen garbage to find the leftover meat after we parted ways. But amazingly I didn't. Maybe I have turned over a new leaf.FOOD - 5 stars...just six appetizers and seven entrees on the menu (photo: bit.ly/2wrVouc) - but that's enoughAMBIANCE - 4.5 stars...warm, casual Rockridge vibeSERVICE - 4 stars...helpful, not too intrusiveTOTAL - 5 stars...how many times can you type \"pork chop\" in one review?...5 would be the answer",
    "word_count" : 582,
    "title" : "This now-classic East Bay eatery",
    "sentences_object" : [],
    "review_date" : "Wed Dec 27 2017 17:00:07 GMT-0800 (PST)",
    "response_date" : null,
    "photos" : 29769,
    "rating" : 5,
    "user_name" : "Ed U.",
    "platform" : "Yelp",
    "response_text" : "Thanks for the comments. We work really hard to offer the best experience for our customers so I'm grateful to see that you enjoyed your visit. Thanks again for your comments. Sincerely,",
    "review_read" : null,
    "business_id" : "wood-tavern-oakland",
    "timestamp" : "Wed Dec 27 2017 17:00:07 GMT-0800 (PST)",
    "__v" : 0
},

/* 10 */
{   "sentiment_score" : 0,
    "text" : "I love this place but it is hard as hell to get a reservation here although with the Oakland restaurant boom the last few years it has become a bit easier. I try and make it here about once or twice a year -- it is fancy but not overwhelmingly so. It also seems like I see a celebrity/athlete every time I eat here.I am a huge fan of the giant pork chop but everything I get has been fantastic. I think it is possible for a party of two to get out for less than $100 but that would be substantially limiting your experience.",
    "word_count" : 105,
    "title" : "I love this place but",
    "sentences_object" : [],
    "review_date" : "Wed Dec 27 2017 17:00:07 GMT-0800 (PST)",
    "response_date" : null,
    "photos" : 42,
    "rating" : 5,
    "user_name" : "Chris R.",
    "platform" : "Yelp",
    "response_text" : "Thanks for sharing your feedback from your visit. We work really hard to offer the best experience for our customers so I'm grateful to see that you enjoyed your visit. We hope to see you soon. Sincerely,",
    "review_read" : null,
    "business_id" : "wood-tavern-oakland",
    "timestamp" : "Wed Dec 27 2017 17:00:07 GMT-0800 (PST)",
    "__v" : 0
},

/* 11 */
{
    "sentiment_score" : 0,
    "text" : "The fried cod sandwich was really tasty and the meat in the burger was seasoned well. The fries would've been fantastic but they had much too much salt. Service was okay but it was apparent the quality of the food was high",
    "word_count" : 42,
    "title" : "The fried cod sandwich was",
    "sentences_object" : [],
    "review_date" : "Wed Dec 27 2017 17:00:07 GMT-0800 (PST)",
    "response_date" : "Wed Dec 27 2017 17:00:07 GMT-0800 (PST)",
    "photos" : 55,
    "rating" : 4,
    "user_name" : "Piper W.",
    "platform" : "Yelp",
    "response_text" : "Thanks for sharing your feedback. I'm glad you enjoyed your visit",
    "review_read" : null,
    "business_id" : "wood-tavern-oakland",
    "timestamp" : "Wed Dec 27 2017 17:00:07 GMT-0800 (PST)",
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