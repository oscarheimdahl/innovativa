import React, { Component } from 'react';
import axios from 'axios';
import './app.css';
import { CLIENT_RENEG_LIMIT } from 'tls';
import { jsxClosingElement } from '@babel/types';

let req =
  'https://daresay-dev.eu-gb.cf.appdomain.cloud/innovativa/' +
  'A81758FFFE036B8E/' +
  '2019:01:13%2000:00:00/' +
  '2019:11:15%2000:00:00/' +
  '100000000/' +
  '139kTnm10ksR';

class App extends Component {
  state = {
    temps: []
  };

  componentDidMount() {
    this.testAPI();
  }

  render() {
    return (
      <div className="app">
        Innovativa test
        {this.renderTemps()}
      </div>
    );
  }

  renderTemps = () => {
    return this.state.temps.map(measurement => {
      let temp = measurement.slice(0, 2);
      let color = 'green';
      if (temp > 22) color = 'orange';
      if (temp > 25) color = 'red';

      return (
        <div style={{ color: color }}>
          {measurement}
          <br />
        </div>
      );
    });
  };

  testAPI = () => {
    axios.get(req).then(res => {
      let temps = [];
      let measuredDates = [];
      console.log(res);
      // res.data
      //   .filter(ele => {
      //     let useTemp = true;
      //     let date = ele.time.slice(5, 10);
      //     let hour = ele.time.slice(11, 13);
      //     measuredDates.forEach(measuredDate => {
      //       if (measuredDate === date) useTemp = false;
      //     });
      //     if (useTemp) {
      //       measuredDates.push(date);
      //     }
      //     return useTemp;
      //   })
      //   .map(ele =>
      //     temps.push(ele.dd.temperature + ' - ' + ele.time.slice(5, 10))
      //   );
      // temps.reverse();
      // console.log(temps.length);
      // this.setState({ temps });
    });
  };
}

export default App;
