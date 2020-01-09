import React, { Component } from "react";
import Slider from "../Slider/Slider";
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from "axios";

// import { BrowserRouter as Link } from "react-router-dom";
// import { Button } from "@material-ui/core";
import { Button } from "@material-ui/core";

class BookChecker extends Component {
  getHtml = url => {};

  render() {
    return (
      <div>
        <button onClick={this.getHtml}>ASSDASD</button>
      </div>
    );
  }
}
export default BookChecker;
