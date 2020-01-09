const axios = require("axios");
const rooms = require("./rooms.js");

let checkBooking = async function() {
  axios
    .get(
      "https://cloud.timeedit.net/umu/web/public1/ri1w7X8Q5QZZYYQv5Q077111y7Y7.html"
    )
    .then(res => {
      console.log(res.data);
      return res;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
};

module.exports = checkBooking;
