import React, { Component } from "react";
import Slider from "../Slider/Slider";
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from "axios";

// import { BrowserRouter as Link } from "react-router-dom";
// import { Button } from "@material-ui/core";
import { Button } from "@material-ui/core";

class BookChecker extends Component {
  getHtml = () => {
    console.log("KLICK!");
    const url =
      "https://europe-west1-innovativa-1337.cloudfunctions.net/booked";

    axios
      .get(url, this.props.attributes)
      .then(res => {
        console.log(res);
        return;
      })
      .catch(e => console.log(e));
  };

  render() {
    return (
      <div>
        <button onClick={this.getHtml}>ASSDASD</button>
      </div>
    );
  }
}
export default BookChecker;
