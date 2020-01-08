import React, { Component, Children } from "react";
import "./MazeMap.css";
import axios from "axios";
import qs from "qs";

let myMap;

class MazeMap extends Component {
  state = {
    // The DOM element ID for the map
    container: "mazemap-container",
    // The ID of the campus to show
    campuses: 289,
    // Initial position of map
    center: { lng: 20.311087, lat: 63.821773 },
    // Initial zoom of map
    zoom: 14,
    // Initial floor z level of map
    zLevel: 2,
    autoSetRTLTextPlugin: ""
  };

  componentDidUpdate(prevProps) {
    if (this.props.poi !== prevProps.poi) {
      this.setRoom(this.props.poi);
    }
  }

  componentDidMount() {
    try {
      myMap = new window.Mazemap.Map(this.state);
      console.log(this.state);
      myMap.on("load", function() {
        // Initialize a Highlighter for POIs
        // Storing the object on the map just makes it easy to access for other things
        myMap.highlighter = new window.Mazemap.Highlighter(myMap, {
          showOutline: true, // optional
          showFill: true, // optional
          outlineColor: window.Mazemap.Util.Colors.MazeColors.MazeBlue, // optional
          fillColor: window.Mazemap.Util.Colors.MazeColors.MazeBlue // optional
        });
      });
    } catch {
      console.log("Ajdå");
    }

    this.setState({});
  }

  setRoom(poi) {
    window.Mazemap.Data.getPoi(poi).then(poi => {
      // var myMap = this.state.myMap;
      myMap.zLevel = poi.properties.zLevel;
      if (poi.geometry.type === "Polygon") {
        myMap.highlighter.highlight(poi);
      }

      var lngLat = window.Mazemap.Util.getPoiLngLat(poi);
      // this.state.myMap.flyTo({
      myMap.flyTo({
        center: lngLat,
        zoom: 20
      });
    });
  }

  render() {
    return (
      <div>
        {/* <button onClick={() => this.setRoom(759874)}>POI</button> */}
        <div id="mazemap-container"></div>
        {/* {this.state.rooms == null ? "laddar..." : "klar"} */}
      </div>
    );
  }
}

export default MazeMap;
