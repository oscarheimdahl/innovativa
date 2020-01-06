import React, { Component } from "react";
import "./app.css";
import MazeMap from "./Mazemap/MazeMap";
import Controls from "./Controls/Controls";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    temps: []
  };

  attributes = {
    temperature: 21,
    body: 0,
    light: 0.8,
    humidity: 0.5,
    co2: 0.3
  };

  setTemperature = temperature => {
    this.attributes.temperature = temperature;
  };
  setBody = body => {
    this.attributes.body = body;
  };
  setLight = light => {
    this.attributes.light = light;
  };
  setHumidity = humidity => {
    this.attributes.humidity = humidity;
  };
  setCo2 = co2 => {
    this.attributes.co2 = co2;
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Controls
                initialAttributes={this.attributes}
                setTemperature={this.setTemperature}
                setBody={this.setBody}
                setLight={this.setLight}
                setHumidity={this.setHumidity}
                setCo2={this.setCo2}
              />
            </Route>
            <Route path="/map">
              tjennaaa
              <MazeMap />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

// function testAPI() {
//   let now = new Date();
//   let year = now.getUTCFullYear();
//   let month = now.getUTCMonth();
//   let day = now.getUTCDay();
//   let hour = now.getUTCHours() - now.getTimezoneOffset() / 60;
//   let minute = now.getUTCMinutes();

//   Object.entries(rooms).forEach(room => {
//     Object.entries(room[1]).forEach(sensor => {
//       let sensorID = sensor[1];
//       let req =
//         `https://daresay-dev.eu-gb.cf.appdomain.cloud/innovativa/${sensorID}/2017:01:01%2000:00:00/` +
//         `${year}:${month}:${day}%20${hour}:${minute}:00/1/139kTnm10ksR`;
//       axios.get(req).then(res => console.log(res.data[0]));
//     });
//   });
// }
