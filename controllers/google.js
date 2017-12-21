//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
// FOR TESTING ONLY - DELETE SOON
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------

// Imports the Google Cloud client library.
const Storage = require('@google-cloud/storage');
const LanguageServiceClient = require('./language_service_client');

// Instantiates a client. Explicitly use service account credentials by
// specifying the private key file. All clients in google-cloud-node have this
// helper, see https://googlecloudplatform.github.io/google-cloud-node/#/docs/google-cloud/latest/guides/authentication
const storage = Storage({
  keyFilename: '/auth.json'
});

// Makes an authenticated API request.
storage.getBuckets()
  .then((results) => {
    const buckets = results[0];

    console.log('Buckets:');
    buckets.forEach((bucket) => {
      console.log(bucket.name);
    });
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });



// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Instantiates a client
const client = new language.LanguageServiceClient();

// The text to analyze
const text = 'Fast delivery. Burrito was delicious. Only down side was the ordering menu. Did not give me many options for add-ons. Definitely comparable to Gordo.';

const document = {
  content: text,
  type: 'PLAIN_TEXT',
};

// Detects the sentiment of the text
client.analyzeSentiment({document: document})
  .then(results => {
    const sentiment = results[0].documentSentiment;

    console.log(`Text: ${text}`);
    console.log(`Sentiment score: ${sentiment.score}`);
    console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
