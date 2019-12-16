import React, { Component } from 'react';
import axios from 'axios';
import './app.css';

class App extends Component {
  state = {
    temps: []
  };

  componentDidMount() {}

  render() {
    return (
      <div className="app">
        Innovativa test
        <br />
        <button onClick={() => testAPI()}>API</button>
      </div>
    );
  }
}

export default App;

function testAPI() {
  let now = new Date();
  let year = now.getUTCFullYear();
  let month = now.getUTCMonth();
  let day = now.getUTCDay();
  let hour = now.getUTCHours() - now.getTimezoneOffset() / 60;
  let minute = now.getUTCMinutes();
  let sensor = 'A81758FFFE03BCEF';

  let rooms = {};

  let req =
    `https://daresay-dev.eu-gb.cf.appdomain.cloud/innovativa/${sensor}/2017:01:01%2000:00:00/` +
    `${year}:${month}:${day}%20${hour}:${minute}:00/1/139kTnm10ksR`;
  console.log('Fetching...');
  axios.get(req).then(res => {
    console.log(res.data);
    rooms['tjena'] = res.data[0].dd;
    console.log(rooms);
  });
}
