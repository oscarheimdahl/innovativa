import React, { Component } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

// import { BrowserRouter as Link } from "react-router-dom";
// import { Button } from "@material-ui/core";

class BookChecker extends Component {
  state = {
    timeBooked: ''
  };

  componentDidMount() {
    this.getHtml(this.props.url);
  }

  getHtml = url => {
    // console.log("KLICK!");
    // const url =
    //   "https://cloud.timeedit.net/umu/web/public1/ri1w7X8Q5QZZYYQv5Q077111y7Y7.html";
    // // "https://europe-west1-innovativa-1337.cloudfunctions.net/booked";

    axios
      .get(url)
      .then(res => {
        //console.log(res);
        //console.log(res.data);
        const $ = cheerio.load(res.data);

        $('.timeIsNow').each((index, element) => {
          console.log($(element).text());
          this.setState({
            timeBooked: $(element).text()
          });
        });

        return;
      })
      .catch(e => console.log(e));
  };

  render() {
    return this.state.timeBooked === '' ? (
      <div style={{ color: 'lightgreen' }}>Ledigt</div>
    ) : (
      <div className="timeBooked" style={{ color: 'red' }}>
        {this.state.timeBooked}
      </div>
    );
  }
}
export default BookChecker;
