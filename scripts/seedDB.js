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
  {
    "sentiment_score" : 0,
    "text" : "Delicious duck breast with crispy skin!! Wow, what's not to like?I had to cozy up to the bar, and comfortably stood with my bar chair in front of me and my purse on top, in case my order came early, and I would have access to my purse.My duck order came with a delicious and delicate pureed potato with a hint of balsamic and some braised spinach.The bar scene was for those without a reservation, but it was a comfortable seat and there was access to the dinner menu...awesomely good.The staff was friendly and warm,and so wereThe patrons...one said I definitely needed to try the pork chop, but I went for the duck and was not disappointed!Give it a try...so cozy so nice!e the patrons for that matter! One guest is insisted in both to their",
    "word_count" : 136,
    "title" : "Delicious duck breast with crispy",
    "sentences_object" : [],
    "review_date" : Date("2020-12-18T08:00:00.000Z"),
    "response_date" : null,
    "photos" : 14,
    "rating" : 5,
    "user_name" : "Meg P.",
    "platform" : "Yelp",
    "response_text" : "",
    "review_read" : null,
    "business_id" : "wood-tavern-oakland",
    "timestamp" : Date("2017-12-27T02:45:39.599Z"),
    "__v" : 0

  },
  {
    title: null,
    user_name: "Diane W.",
    rating: 5,    
    text: "Reservations are tough to get so I logged on 60 days before we were scheduled to be in San Francisco and got a reservation for 5:30.   Too early?   Not if you want a guarantee you will see all of the cart food.   Once diners start getting staggered, as groups from the 5:30 slot start leaving, those fill-in tables won't always get to see all of the cart food  (according to our server).     So I was happy we had an early spot.  We really enjoyed our meal.  With only 2 of us, the cart approach with the small plates, gave us the opportunity to try a wide variety of dishes.   If anyone in your party has food allergies/restrictions, the restaurant will provide a printed list of the cart food, otherwise part of the experience is the 'surprise' of the cart contents.   We tried the majority of the cart items and most of them were excellent (oyster, fry bread with burrata, tempura squash were the standouts).   From the menu we ordered:   - Beef tongue pastrami on buckwheat poppy seed pancake (one of my favorite dishes) - State bird (crispy and tender but would not order it again - too plain) - Beef and broccoli (tender meat, my husband did not like the sauce) - Ice cream sandwiches (light, delicious) The restaurant did get very noisy and the tables are fairly close together, so don't expect a romantic private meal, just good food with a few surprises.",
    timestamp: new Date(Date.now()),
    review_date: "11/27/2017",

  },
  {
    "sentiment_score" : 0,
    "text" : "Took the bf here for his bday celebration, which was a good choice. Even though the menu is fairly limited, you can tell that a lot of love is put into each of the dishes they do have. The staff all seem to love what they do, as they were making genuine conversation with all the tables and providing their favorite recommendations. We started off by getting a bottle of Pinot Noir to share and their grilled squid appetizer. For our mains, the bf ordered their rib eye and said that it was the best rib eye dish he's ever had. For someone that can be very critical about small details, this is saying something. I ordered their chicken, which our waiter said was one of their signature dishes. The chicken was very juicy and full of flavor, and I don't regret my choice at all. However, the reason why I gave this place 4 stars instead of 5 stars is that I felt my chicken dish and the squid appetizer were too salty. The salt overpowered the dish and made it less enjoyable than it could have been. Otherwise, the rest of our experience was great and I would recommend anyone to give this place a try.",
    "word_count" : 208,
    "title" : "Took the bf here for",
    "sentences_object" : [],
    "review_date" : Date("2020-11-24T08:00:00.000Z"),
    "response_date" : null,
    "photos" : 377,
    "rating" : 4,
    "user_name" : "Anita L.",
    "platform" : "Yelp",
    "response_text" : "",
    "review_read" : null,
    "business_id" : "wood-tavern-oakland",
    "timestamp" : Date("2017-12-27T02:45:39.651Z"),
    "__v" : 0
  },
  {
    "sentiment_score" : 0,
    "text" : "Meeting up with my Cal college roomie (from  45 years ago) Wood Tavern was our destination for a festive holiday lunch. Planning, with a reservation was the way to go, as the place was hopping on a Monday. The sandwich menu offers great value, with portions that won't send you directly into elastic waistband expando pants. The pork loin sandwich with garlicky, buttery, grilled broccoli rabe = PERFECTION. Served on a lightly toasted french roll, the tender meat and tasty greens combined delightfully with the warm bread.  A very fresh handmade slaw accompanies the plate.  Roomie opted for the traditional burger which came with a literal mountain of fries. Very shareable.The liveliness of the room is a blessing and a bane for those of us with older ears. Expect a few days of tinnitnus. But TOTALLY worth it for the food!",
    "word_count" : 141,
    "title" : "Meeting up with my Cal",
    "sentences_object" : [],
    "review_date" : Date("2020-12-19T08:00:00.000Z"),
    "response_date" : null,
    "photos" : null,
    "rating" : 4,
    "user_name" : "Carol N.",
    "platform" : "Yelp",
    "response_text" : "",
    "review_read" : null,
    "business_id" : "wood-tavern-oakland",
    "timestamp" : Date("2017-12-27T02:45:39.623Z"),
    "__v" : 0
  },
   {
"sentiment_score" : 0,
    "text" : "Plan ahead if you want to have dinner here. I booked a table for 3 for Friday night about a week in advance. We were seated right away when we arrived, at the table by the window on the left when you first walk in.In our usual style, we shared our entrees:-Ling Cod: There are so many pictures of the Alaskan Halibut on Yelp but none of ling cod. We ordered it anyway and it was a great choice. The fish was cooked perfectly.-Duck Breast: Beautiful color and served with a lovely sunchoke puree and cute balsamic glazed grapes.-Pork Chop: This is a house special and it was fantastic. Get it!Even though we were full, we wanted to try one of the desserts. The one that sounded the most unique was the lemon crepe cake. It was luxurious, refreshing, and so delicious. We all agreed that the meal was special and Wood Tavern is an excellent spot.",
    "word_count" : 157,
    "title" : "Plan ahead if you want",
    "sentences_object" : [],
    "review_date" : Date("2020-11-25T08:00:00.000Z"),
    "response_date" : null,
    "photos" : 1018,
    "rating" : 5,
    "user_name" : "Yi Z.",
    "platform" : "Yelp",
    "response_text" : "",
    "review_read" : null,
    "business_id" : "wood-tavern-oakland",
    "timestamp" : Date("2017-12-27T02:45:39.636Z"),
    "__v" : 0
  },
   {
    "sentiment_score" : 0,
    "text" : "Upscale yet cozy spot on College. Right across from Safeway, parking in this area can be tough, but there is free street parking in the surrounding neighborhoods. Since this place is on the pricier side of things and the location quite small, I would suggest making reservations in advance. We had a reservation for 6PM but we got there 15 minutes earlier and they still sat us down at our table. We were seated near the window which was a great option since we had fresh air while we enjoyed our meal. The location has a great ambiance. There's bar seating where you can see the grill, tables near the window, and tables under a huge mirror that opens the space up and allows for natural lighting. Service here is great! Our waiter was attentive, but hands off enough to ensure he wasn't intrusive in our convos. Drinks here average $13 and are refreshing. We ordered 3 of their speciality cocktails and all tasted like quality. Dishes averaged around $30 each and are great to share. Our waiter brought us extra plates without us even asking in case we wanted to share which was attentive of him. Since we were here to celebrate my friend's birthday our waiter even brought us the ice cream dessert as a complimentary dish. Thank you! FOOD: - Halibut - Fave dish! The fish was nice and flaky and was well seasoned. It wasn't as heavy in comparison to our other 2 dishes so it's a nice dish to include in your meal.- Duck - The duck was tender and not oily with what i'm used to with peking duck and other places. The grapes add a nice texture and taste contrast to the duck.- Pork Chop - This was the heaviest of the 3 dishes. The pork chop is HUGE. It takes around 30 mins to prepare this so be sure to order this early if it's something you prefer. It has a bacon cream sauce that tops the pork chop so you get full quickly! The only con with this dish is that I thought it was closer to the saltier side of things even with the peaches.Had a great meal here and I will be sure coming back. Since it is on the pricier side of things I'll be back for an occasion more so than a weeknight meal.",
    "word_count" : 397,
    "title" : "Upscale yet cozy spot on",
    "sentences_object" : [],
    "review_date" : Date("2020-10-29T07:00:00.000Z"),
    "response_date" : null,
    "photos" : 571,
    "rating" : 4,
    "user_name" : "Keizzel C.",
    "platform" : "Yelp",
    "response_text" : "",
    "review_read" : null,
    "business_id" : "wood-tavern-oakland",
    "timestamp" : Date("2017-12-27T02:45:39.681Z"),
    "__v" : 0
  },
   {
    "sentiment_score" : 0,
    "text" : "I had been interested in checking out Wood Tavern for a while, but the place is pretty hip and reservations are needed.  Finally made it over for lunch on a Saturday.  The place is smaller than I imagined and packed, a bit loud and not the most comfortable, but the great service, and good food makes up for it. Pork Belly stole the show.  I am still dreaming of it and usually I am not even a fan of pork belly.  Really good stuff.  The pastrami sandwich was really nice as well.  The beef sandwich was good, but the burger was probably better.  Interesting cocktails but nothing that knocked my socks off. Solid place to impress a date or eat Pork Belly.",
    "word_count" : 122,
    "title" : "I had been interested in",
    "sentences_object" : [],
    "review_date" : Date("2020-11-01T07:00:00.000Z"),
    "response_date" : null,
    "photos" : 95,
    "rating" : 4,
    "user_name" : "Chelsey G.",
    "platform" : "Yelp",
    "response_text" : "",
    "review_read" : null,
    "business_id" : "wood-tavern-oakland",
    "timestamp" : Date("2017-12-27T02:45:39.789Z"),
    "__v" : 0
  },
   {
    "sentiment_score" : 0,
    "text" : "3:00pm first time meet up with a new friend. I get there early as to not keep a woman at the bar by herself. I thought before arriving, \"who's drinking at 3?\"The house is packed! No seats except table service.Kindly I described my first date scenario and this kind host said she would seat us at a window table. Lucky me, a two spot opened at the bar! The superior mixologists let me save a seat and poured up a Club Soda w/Bitters for me. When my friend arrived, she enjoyed a tart lemonade. No pressure to intoxicate or  or snacks, we enjoyed a couple of hours relaxing in conversation. I did eye a gigantic Pastrami sandwich w/Garlic fries!$15 and it was ordered for carry-out for my son. Not just a lovely afternoon with a friend, but just a pleasant opportunity to relax! I mentioned to the bartender it was a first meeting and she suggested, \"Come on back for dinner!\"",
    "word_count" : 161,
    "title" : "3:00pm first time meet up",
    "sentences_object" : [],
    "review_date" : Date("2020-09-18T07:00:00.000Z"),
    "response_date" : null,
    "photos" : 880,
    "rating" : 5,
    "user_name" : "David N.",
    "platform" : "Yelp",
    "response_text" : "",
    "review_read" : null,
    "business_id" : "wood-tavern-oakland",
    "timestamp" : Date("2017-12-27T02:45:39.703Z"),
    "__v" : 0
  },
   {
   "sentiment_score" : 0,
    "text" : "This now-classic East Bay eatery has been around for over a decade, and I just never got around to trying it until recently when I decided to take out a retiring colleague and her husband for a celebratory dinner there. Now the challenge was that I am on a flexitarian regimen, and the first thing I think of with Wood Tavern is their famous grilled double-cut pork chop. \"Does not compute. Does not compute. Danger, Will Robinson!\" In more gluttonous days, I would have easily ordered that as one of three courses with a cocktail or two to wash it down. In other words, I would have been the ideal customer for Rich and Rebekah Wood's destination dining.I made a 5:30PM reservation on a Monday when there were just a few people at the bar. We scored a table next to the front window where we saw Rockridge life walk past us. We decided to start with the $20 Cheese Board which provided bites of unmitigated joy even without the crusty bread that accompanied it (photo: bit.ly/2ex2eZ2). Along with honey-dipped raw almonds and thin slices of red apple, the board was comprised of four farm-fresh milk cheeses - two cow, one goat, one sheep - with my personal favorite being the St. Angel, a French cow's milk cheese that was indulgently creamy (photo: bit.ly/2eOeuBj).After much encouragement from me, the guest of honor did order the $33 Grilled Double-Cut Pork Chop. According to long-timers, this menu staple has changed over the years, but there isn't consensus on whether it has improved over time. Current chef Esteban Escobar (formerly of Town Hall) accessorized this version with a Marsala cream sauce with pancetta, farro, summer squash and Fresno chiles, all of it topped by half a peach fanned on top of the pork (photo: bit.ly/2eO87Ox). She generously allowed me a couple of bites, and the robust combination of flavors worked completely for me because nothing could overshadow the juicy tenderness of the pork.Perhaps because it has been months since I tasted pork, I was quite enthralled. Her husband ordered the $32 Pan-Seared Alaskan Halibut which was greatly enhanced by a mushroom-Parmesan brodo complemented by white corn, chanterelle mushrooms, cornbread panzanella salad, and English peas (photo: bit.ly/2iQrJGd). Again, it was packed with flavors that worked with each other seamlessly and brought out the freshness of the fish as well. And what did I have? I decided to focus on the starters and began with the $13 Summer Melon & Prosciutto Salad which was mixed with Sausalito Springs watercress, toasted almonds and a plum vinaigrette (photo: bit.ly/2wvGqSi).It was very light and fresh with the prosciutto providing just the right level of meatiness. I segued into a simply executed Mediterranean dish, the $8 Spiced Eggplant and Nardello Peppers with cherry tomato confit, lovage (a celery-like parsley), sesame seeds and a squeeze of lemon (photo: bit.ly/2gxiERH). I found it the perfect vegetarian option for me as I stared enviously at the pork chop she couldn't finish. I had visions of me racing back to the restaurant and rifling through the kitchen garbage to find the leftover meat after we parted ways. But amazingly I didn't. Maybe I have turned over a new leaf.FOOD - 5 stars...just six appetizers and seven entrees on the menu (photo: bit.ly/2wrVouc) - but that's enoughAMBIANCE - 4.5 stars...warm, casual Rockridge vibeSERVICE - 4 stars...helpful, not too intrusiveTOTAL - 5 stars...how many times can you type \"pork chop\" in one review?...5 would be the answer",
    "word_count" : 582,
    "title" : "This now-classic East Bay eatery",
    "sentences_object" : [],
    "review_date" : Date("2020-09-01T07:00:00.000Z"),
    "response_date" : null,
    "photos" : 29769,
    "rating" : 5,
    "user_name" : "Ed U.",
    "platform" : "Yelp",
    "response_text" : "",
    "review_read" : null,
    "business_id" : "wood-tavern-oakland",
    "timestamp" : Date("2017-12-27T02:45:39.733Z"),
    "__v" : 0
  },   
  {
    "sentiment_score" : 0,
    "text" : "I love this place but it is hard as hell to get a reservation here although with the Oakland restaurant boom the last few years it has become a bit easier. I try and make it here about once or twice a year -- it is fancy but not overwhelmingly so. It also seems like I see a celebrity/athlete every time I eat here.I am a huge fan of the giant pork chop but everything I get has been fantastic. I think it is possible for a party of two to get out for less than $100 but that would be substantially limiting your experience.",
    "word_count" : 105,
    "title" : "I love this place but",
    "sentences_object" : [],
    "review_date" : Date("2020-11-13T08:00:00.000Z"),
    "response_date" : null,
    "photos" : 42,
    "rating" : 5,
    "user_name" : "Chris R.",
    "platform" : "Yelp",
    "response_text" : "",
    "review_read" : null,
    "business_id" : "wood-tavern-oakland",
    "timestamp" : Date("2017-12-27T02:45:39.766Z"),
    "__v" : 0
  },
   {
   "sentiment_score" : 0,
    "text" : "The fried cod sandwich was really tasty and the meat in the burger was seasoned well. The fries would've been fantastic but they had much too much salt. Service was okay but it was apparent the quality of the food was high",
    "word_count" : 42,
    "title" : "The fried cod sandwich was",
    "sentences_object" : [],
    "review_date" : Date("2020-12-24T08:00:00.000Z"),
    "response_date" : null,
    "photos" : 55,
    "rating" : 4,
    "user_name" : "Piper W.",
    "platform" : "Yelp",
    "response_text" : "",
    "review_read" : null,
    "business_id" : "wood-tavern-oakland",
    "timestamp" : Date("2017-12-27T02:45:39.822Z"),
    "__v" : 0
  },
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
{text:"Hi",writing_style:"casual",category:"1",length_type:"1",rating:"3"},
{text:"Hi",writing_style:"casual",category:"1",length_type:"1",rating:"2"},
{text:"Hi",writing_style:"casual",category:"1",length_type:"1",rating:"4"},
{text:"Thank you for taking the time to share your feedback",writing_style:"formal",category:"1",length_type:"5",rating:"1"},
{text:"Thank you for taking the time to share your feedback",writing_style:"formal",category:"1",length_type:"5",rating:"2"},
{text:"Thank you for taking the time to share your feedback",writing_style:"formal",category:"1",length_type:"5",rating:"3"},
{text:"Thank you for taking the time to share your feedback",writing_style:"formal",category:"1",length_type:"5",rating:"4"},
{text:"Thank you for taking the time to share your feedback",writing_style:"formal",category:"1",length_type:"5",rating:"5"},
{text:"Thank you for taking the time to share your experience",writing_style:"formal",category:"1",length_type:"5",rating:"1"},
{text:"Thank you for taking the time to share your experience",writing_style:"formal",category:"1",length_type:"5",rating:"2"},
{text:"Thank you for taking the time to share your experience",writing_style:"formal",category:"1",length_type:"5",rating:"3"},
{text:"Thank you for taking the time to share your experience",writing_style:"formal",category:"1",length_type:"5",rating:"4"},
{text:"Thank you for taking the time to share your experience",writing_style:"formal",category:"1",length_type:"5",rating:"5"},
{text:"Thanks for your review",writing_style:"casual",category:"1",length_type:"1",rating:"3"},
{text:"Thanks for your review",writing_style:"casual",category:"1",length_type:"1",rating:"4"},
{text:"Thanks for your review",writing_style:"casual",category:"1",length_type:"1",rating:"5"},
{text:"Thanks for the comments",writing_style:"casual",category:"1",length_type:"2",rating:"2"},
{text:"Thanks for the comments",writing_style:"casual",category:"1",length_type:"2",rating:"3"},
{text:"Thanks for the comments",writing_style:"casual",category:"1",length_type:"2",rating:"4"},
{text:"Thanks for the comments",writing_style:"casual",category:"1",length_type:"2",rating:"5"},
{text:"Thanks for sharing your experience",writing_style:"casual",category:"1",length_type:"3",rating:"3"},
{text:"Thanks for sharing your experience",writing_style:"casual",category:"1",length_type:"3",rating:"4"},
{text:"Thanks for sharing your experience",writing_style:"casual",category:"1",length_type:"3",rating:"5"},
{text:"Thanks for sharing your feedback",writing_style:"casual",category:"1",length_type:"3",rating:"3"},
{text:"Thanks for sharing your feedback",writing_style:"casual",category:"1",length_type:"3",rating:"4"},
{text:"Thanks for sharing your feedback",writing_style:"casual",category:"1",length_type:"3",rating:"5"},
{text:"Thank you for your review",writing_style:"formal",category:"1",length_type:"3",rating:"2"},
{text:"Thank you for your review",writing_style:"formal",category:"1",length_type:"3",rating:"3"},
{text:"Thank you for your review",writing_style:"formal",category:"1",length_type:"3",rating:"4"},
{text:"Thank you for the feedback from your visit",writing_style:"",category:"1",length_type:"3",rating:"1"},
{text:"Thank you for the feedback from your visit",writing_style:"",category:"1",length_type:"3",rating:"2"},
{text:"Thank you for the feedback from your visit",writing_style:"",category:"1",length_type:"3",rating:"3"},
{text:"Thank you for the feedback from your visit",writing_style:"",category:"1",length_type:"3",rating:"4"},
{text:"Thanks for sharing your feedback from your visit",writing_style:"",category:"1",length_type:"4",rating:"3"},
{text:"Thanks for sharing your feedback from your visit",writing_style:"",category:"1",length_type:"4",rating:"4"},
{text:"Thanks for sharing your feedback from your visit",writing_style:"",category:"1",length_type:"4",rating:"5"},
{text:"Thanks for your excellent review",writing_style:"",category:"1",length_type:"3",rating:"4"},
{text:"Thanks for your excellent review",writing_style:"",category:"1",length_type:"3",rating:"5"},
{text:"Thank you for your comments",writing_style:"",category:"1",length_type:"3",rating:"1"},
{text:"Thank you for your comments",writing_style:"",category:"1",length_type:"3",rating:"2"},
{text:"Thank you for your comments",writing_style:"",category:"1",length_type:"3",rating:"3"},
{text:"Apologies about the experience that you had",writing_style:"",category:"2",length_type:"3",rating:"1"},
{text:"Apologies about the experience that you had",writing_style:"",category:"2",length_type:"3",rating:"2"},
{text:"I'm glad you enjoyed your visit",writing_style:"",category:"2",length_type:"3",rating:"4"},
{text:"I'm glad you enjoyed your experience",writing_style:"",category:"2",length_type:"3",rating:"4"},
{text:"I'm glad you enjoyed your visit",writing_style:"",category:"2",length_type:"3",rating:"5"},
{text:"I'm glad you enjoyed your experience",writing_style:"",category:"2",length_type:"3",rating:"5"},
{text:"We work really hard to offer the best experience for our customers so I'm grateful to see that you enjoyed your visit",writing_style:"formal",category:"2",length_type:"5",rating:"5"},
{text:"We hope to see you back soon",writing_style:"casual",category:"3",length_type:"3",rating:"3"},
{text:"We hope to see you back soon",writing_style:"casual",category:"3",length_type:"3",rating:"4"},
{text:"We hope to see you back soon",writing_style:"casual",category:"3",length_type:"3",rating:"5"},
{text:"Thanks again for your review",writing_style:"casual",category:"3",length_type:"3",rating:"3"},
{text:"Thanks again for your review",writing_style:"casual",category:"3",length_type:"3",rating:"4"},
{text:"Thanks again for your review",writing_style:"casual",category:"3",length_type:"3",rating:"5"},
{text:"We look forward to seeing you again",writing_style:"formal",category:"3",length_type:"3",rating:"4"},
{text:"We look forward to seeing you again",writing_style:"formal",category:"3",length_type:"3",rating:"5"},
{text:"We hope to see you soon",writing_style:"",category:"3",length_type:"2",rating:"3"},
{text:"We hope to see you soon",writing_style:"",category:"3",length_type:"2",rating:"4"},
{text:"We hope to see you soon",writing_style:"",category:"3",length_type:"2",rating:"5"},
{text:"Thanks again for your feedback",writing_style:"casual",category:"3",length_type:"3",rating:"2"},
{text:"Thanks again for your feedback",writing_style:"casual",category:"3",length_type:"3",rating:"3"},
{text:"Thanks again for your feedback",writing_style:"casual",category:"3",length_type:"3",rating:"4"},
{text:"Thanks again for your comments",writing_style:"casual",category:"3",length_type:"3",rating:"3"},
{text:"Thanks again for your comments",writing_style:"casual",category:"3",length_type:"3",rating:"4"},
{text:"Thanks again for your comments",writing_style:"casual",category:"3",length_type:"3",rating:"5"},
{text:"We look forward to welcoming back for your next visit",writing_style:"formal",category:"3",length_type:"5",rating:"4"},
{text:"We look forward to welcoming back for your next visit",writing_style:"formal",category:"3",length_type:"5",rating:"5"},
{text:"Thanks again for reaching out",writing_style:"casual",category:"3",length_type:"3",rating:"2"},
{text:"Thanks again for reaching out",writing_style:"casual",category:"3",length_type:"3",rating:"3"},
{text:"Thanks again for reaching out",writing_style:"casual",category:"3",length_type:"3",rating:"4"},
{text:"We hope to have the opportunity to show you the level of service that we are known for",writing_style:"formal",category:"3",length_type:"5",rating:"1"},
{text:"We hope to have the opportunity to show you the level of service that we are known for.",writing_style:"formal",category:"3",length_type:"5",rating:"2"},
{text:"Once again, I apologise for the experience you received",writing_style:"formal",category:"3",length_type:"5",rating:"1"},
{text:"Once again, I apologise for the experience you received",writing_style:"formal",category:"3",length_type:"5",rating:"2"},
{text:"Thanks,",writing_style:"casual",category:"4",length_type:"1",rating:"1"},
{text:"Thanks,",writing_style:"casual",category:"4",length_type:"1",rating:"2"},
{text:"Thanks,",writing_style:"casual",category:"4",length_type:"1",rating:"3"},
{text:"Thanks,",writing_style:"casual",category:"4",length_type:"1",rating:"4"},
{text:"Thanks,",writing_style:"casual",category:"4",length_type:"1",rating:"5"},
{text:"Kind Regards,",writing_style:"formal",category:"4",length_type:"1",rating:"1"},
{text:"Kind Regards,",writing_style:"formal",category:"4",length_type:"1",rating:"2"},
{text:"Kind Regards,",writing_style:"formal",category:"4",length_type:"1",rating:"3"},
{text:"Kind Regards,",writing_style:"formal",category:"4",length_type:"1",rating:"4"},
{text:"Kind Regards,",writing_style:"formal",category:"4",length_type:"1",rating:"5"},
{text:"Sincerely,",writing_style:"formal",category:"4",length_type:"1",rating:"1"},
{text:"Sincerely,",writing_style:"formal",category:"4",length_type:"1",rating:"2"},
{text:"Sincerely,",writing_style:"formal",category:"4",length_type:"1",rating:"3"},
{text:"Sincerely,",writing_style:"formal",category:"4",length_type:"1",rating:"4"},
{text:"Sincerely,",writing_style:"formal",category:"4",length_type:"1",rating:"5"}
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