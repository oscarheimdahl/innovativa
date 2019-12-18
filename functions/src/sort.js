function sort(params, rooms) {
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
    results[roomName]['roomScore'] = roomScore;
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
          roomScore: room[1].roomScore
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
    case 'temperature':
      return deltaAttribute * 10;
    case 'body':
      return deltaAttribute * 10;
    case 'humidity':
      return deltaAttribute * 0.1;
    case 'co2':
      return deltaAttribute * 0.1;
    case 'light':
      return deltaAttribute * 0.1;
    default:
      return 0;
  }
}

module.exports = sort;
