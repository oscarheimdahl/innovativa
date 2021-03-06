const functions = require("firebase-functions");
const fetch = require("./src/fetch.js");
const sort = require("./src/sort.js");
const checkBooking = require("./src/bookingAvailability.js");
const cors = require("cors")({ origin: true });

exports.fetchAll = functions
  .region("europe-west1")
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      console.log(request.body);

      let params = request.body;
      fetch()
        .then(res => {
          res = sort(params, res);
          response.send(res);
          return;
        })
        .catch(e => console.log(e));
    });
  });

exports.booked = functions
  .region("europe-west1")
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      console.log(request.body);
      checkBooking()
        .then(res => {
          console.log(res);
          response.send(res);
          return;
        })
        .catch(err => {
          console.log(err);
        });
    });
  });
