import axios from 'axios';
import rooms from '../roomInfo';

let filledRooms = {};

function fetch() {
  let requests = [];
  Object.entries(rooms).forEach(room => {
    Object.entries(room[1]).forEach((sensor, index) => {
      let req = buildRequest(sensor[1]);
      requests.push(
        axios.get(req).then(res => {
          addDataToRoom(res.data[0].dd, room[0]);
        })
      );
    });
  });

  //When all requests are finished
  Promise.all(requests).then(_ => {
    console.log(filledRooms);
  });
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

export default fetch;
