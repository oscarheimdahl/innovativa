const axios = require('axios');
const functions = require('firebase-functions');
const rooms = {
  NC355: {
    CO2: 'A81758FFFE03BCED',
    Eye: 'A81758FFFE03BD32',
    // Sound: 'A81758FFFE',
    EltLite: 'A81758FFFE03DED4'
    // ELT2: 'A81758FFFE'
  },
  NC356: {
    CO2: 'A81758FFFE03BCEE',
    Eye: 'A81758FFFE03BD33',
    // Sound: 'A81758FFFE',
    EltLite: 'A81758FFFE03DEC5'
    // ELT2: 'A81758FFFE'
  },
  NC357: {
    CO2: 'A81758FFFE03BCEF',
    Eye: 'A81758FFFE03BD34',
    Eye2: 'A81758FFFE03BD35',
    // Sound: 'A81758FFFE',
    EltLite: 'A81758FFFE03DEC2',
    EltLite2: 'A81758FFFE03DEC2',
    // ELT2: 'A81758FFFE',
    Elpuls: 'A81758FFFE036B8E'
  },
  NC358: {
    CO2: 'A81758FFFE03BCF1',
    Eye: 'A81758FFFE03BD37',
    // Sound: 'A81758FFFE',
    EltLite: 'A81758FFFE03DEDF',
    // ELT2: 'A81758FFFE',
    Elpuls: 'A81758FFFE036B38'
  },
  NC359: {
    CO2: 'A81758FFFE03BCF0',
    Eye: 'A81758FFFE03BD36',
    // Sound: 'A81758FFFE',
    EltLite: 'A81758FFFE03DEC0'
  }
};

let filledRooms = {};

exports.fetchAll = functions.https.onRequest((request, response) => {
  fetch()
    .then(res => {
      response.send(res);
      return;
    })
    .catch(e => console.log(e));
});

async function fetch() {
  let requests = [];
  Object.entries(rooms).forEach(room => {
    Object.entries(room[1]).forEach((sensor, index) => {
      let req = buildRequest(sensor[1]);
      requests.push(
        axios
          .get(req)
          .then(res => {
            addDataToRoom(res.data[0].dd, room[0]);
            return;
          })
          .catch(e => console.log(e))
      );
    });
  });

  //When all requests are finished
  return Promise.all(requests)
    .then(_ => {
      return filledRooms;
    })
    .catch(e => console.log(e));
}

function addDataToRoom(data, roomName) {
  if (!filledRooms[roomName]) filledRooms[roomName] = {};
  Object.entries(data).forEach(attr => {
    let previousValue = filledRooms[roomName][attr[0]];
    if (previousValue) {
      filledRooms[roomName][attr[0]] = (previousValue + attr[1]) / 2;
    } else filledRooms[roomName][attr[0]] = attr[1];
  });
}

function buildRequest(sensorID) {
  let now = new Date();
  let year = now.getUTCFullYear();
  let month = now.getUTCMonth();
  let day = now.getUTCDay();
  let hour = now.getUTCHours() - now.getTimezoneOffset() / 60;
  let minute = now.getUTCMinutes();
  return (
    `https://daresay-dev.eu-gb.cf.appdomain.cloud/innovativa/${sensorID}/2017:01:01%2000:00:00/` +
    `${year}:${month}:${day}%20${hour}:${minute}:00/1/139kTnm10ksR`
  );
}
