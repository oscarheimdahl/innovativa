import React, { Component } from "react";
import Slider from "../Slider/Slider";
import { BrowserRouter as Router, Link } from "react-router-dom";

// import { BrowserRouter as Link } from "react-router-dom";
// import { Button } from "@material-ui/core";
import "./Controls.css";
import { Button } from "@material-ui/core";

class Controls extends Component {
  temperatureAttributes = {
    min: 15,
    max: 30,
    marks: [
      { value: 15, label: "15°C" },
      { value: 30, label: "30°C" }
    ],
    title: "Temperatur",
    defaultValue: this.props.initialAttributes.temperature
  };
  bodyAttributes = {
    min: 0,
    max: 10,
    marks: [
      { value: 0, label: "Tomt" },
      { value: 5, label: "Lagomt" },
      { value: 10, label: "Proppat" }
    ],
    title: "Närvaro",
    defaultValue: this.props.initialAttributes.body
  };

  lightAttributes = {
    min: 0,
    max: 50,
    marks: [
      { value: 0, label: "Darkest of nights" },
      { value: 50, label: "Light of a thousand suns" }
    ],
    title: "Ljus",
    defaultValue: this.props.initialAttributes.light
  };

  humidityAttributes = {
    min: 0,
    max: 10,
    marks: [
      { value: 0, label: "Snustorrt" },
      { value: 10, label: "Drypande vått" }
    ],
    title: "Luftfuktighet",
    defaultValue: this.props.initialAttributes.humidity
  };
  co2Attributes = {
    min: 0,
    max: 10,
    marks: [
      { value: 0, label: "Lite" },
      { value: 10, label: "Mycket" }
    ],
    title: "Luftkvalitet",
    defaultValue: this.props.initialAttributes.co2
  };

  render() {
    return (
      <div className="controlContainer">
        <Slider
          config={this.temperatureAttributes}
          onChange={(_, value) => this.props.setTemperature(value)}
        ></Slider>
        <Slider
          config={this.bodyAttributes}
          onChange={(_, value) => this.props.setBody(value)}
        ></Slider>
        <Slider
          config={this.lightAttributes}
          onChange={(_, value) => this.props.setLight(value)}
        ></Slider>
        <Slider
          config={this.humidityAttributes}
          onChange={(_, value) => this.props.setHumidity(value)}
        ></Slider>
        <Slider
          config={this.co2Attributes}
          onChange={(_, value) => this.props.setCo2(value)}
        ></Slider>
        <Button style={{ background: "lightcoral" }}>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/results"
          >
            Mappp
          </Link>
        </Button>
      </div>
    );
  }
}
export default Controls;
