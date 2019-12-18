const functions = require('firebase-functions');
const fetch = require('./src/fetch.js');
const sort = require('./src/sort.js');

exports.fetchAll = functions.https.onRequest((request, response) => {
  let params = req.body;
  fetch()
    .then(res => {
      res = sort(params, res);
      response.send(res);
      return;
    })
    .catch(e => console.log(e));
});
