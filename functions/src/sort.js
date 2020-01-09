const pois = require("./pois");
const bookings = require("./books");

function sort(params, rooms) {
  // let params = {
  //     body: 1,
  //     temperature: 24,
  //     light: 0.4,
  //     humidity: 0.6,
  //     co2: 0.3
  // }

  // let rooms = {
  //     NC356: {
  //         temperature: 22,
  //         body: 3,
  //         humidity: 4,
  //         co2: 3,
  //         light: 3
  //     },
  //     NC346: {
  //         temperature: 230,
  //         body: 333,
  //         humidity: 222,
  //         co2: 11,
  //         light: 2
  //     },
  //     NC256: {
  //         temperature: -240,
  //         body: 0,
  //         humidity: 33,
  //         co2: 1,
  //         light: 2334
  //     }
  // }

  let results = {};
  let sortedResults = [];
  let numberOfRooms = 0;
  Object.entries(rooms).forEach(room => {
    let roomName = room[0];
    let roomScore = 0;
    results[roomName] = {};
    Object.entries(room[1]).forEach(attribute => {
      roomScore += compareType(
        attribute[0],
        params[attribute[0]],
        attribute[1]
      );
    });
    results[roomName]["roomScore"] = roomScore;
    numberOfRooms++;
  });
  sortByScore(results, sortedResults, numberOfRooms);
  console.log(sortedResults);
  return sortedResults;
}

function sortByScore(results, sortedResults, numberOfRooms) {
  let i = 0;
  for (i = 0; i < numberOfRooms; i++) {
    let lowestScoreRoom;
    let lowestScore = 1000000000;
    Object.entries(results).forEach(room => {
      if (
        room[1].roomScore < lowestScore &&
        !sortedResults.some(
          roomResult => roomResult.roomScore === room[1].roomScore
        )
      ) {
        lowestScoreRoom = {
          roomName: room[0],
          roomScore: room[1].roomScore,
          poi: pois[room[0]],
          book: bookings[room[0]]
        };
        lowestScore = room[1].roomScore;
      }
    });
    sortedResults[i] = lowestScoreRoom;
  }
}

function compareType(attributeName, paramAttribute, roomAttribute) {
  let deltaAttribute = Math.abs(paramAttribute - roomAttribute);
  switch (attributeName) {
    case "temperature":
      return deltaAttribute * 10;
    case "body":
      return deltaAttribute * 10;
    case "humidity":
      return deltaAttribute * 0.1;
    case "co2":
      return deltaAttribute * 0.1;
    case "light":
      return deltaAttribute * 0.1;
    default:
      return 0;
  }
}
module.exports = sort;
