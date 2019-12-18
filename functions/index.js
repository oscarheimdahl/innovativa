const functions = require('firebase-functions');
const fetch = require('./src/fetch.js');

exports.fetchAll = functions.https.onRequest((request, response) => {
  fetch()
    .then(res => {
      response.send(res);
      return;
    })
    .catch(e => console.log(e));
});
