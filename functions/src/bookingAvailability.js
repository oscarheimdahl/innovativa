const axios = require("axios");
const rooms = require("./rooms.js");

let fetch = async function() {
  axios
    .get(
      "https://cloud.timeedit.net/umu/web/studres2/ri.html?h=t&sid=6&p=20200109-20200109&objects=13366.4%2C&ox=0&types=0&fe=0&part=f&tg=-1&se=f&exw=t&rr=1"
    )
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};
