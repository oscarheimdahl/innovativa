import React, { Component } from "react";
import "./MazeMap.css";
import axios from "axios";
import qs from "qs";

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
    zLevel: 2
  };

  constructor(props) {
    super(props);
    // this.fetchRooms();
    this.fakeFetchRooms();
  }

  fakeFetchRooms = () => {
    const delay = t => new Promise(resolve => setTimeout(resolve, t));
    delay(2000).then(res => {
      this.setState({
        rooms: [
          {
            roomName: "NC355",
            roomScore: 1849.316660308838
          },
          {
            roomName: "NC356",
            roomScore: 1850.2440646362306
          },
          {
            roomName: "NC359",
            roomScore: 1856.08170501709
          },
          {
            roomName: "NC358",
            roomScore: 1856.961674041748
          },
          {
            roomName: "NC357",
            roomScore: 1858.394358986318
          }
        ]
      });

      console.log("done");
    });
  };

  fetchRooms = () => {
    console.log(this.props.attributes);
    let req =
      "https://europe-west1-innovativa-1337.cloudfunctions.net/fetchAll";
    axios
      .post(req, this.props.attributes)
      .then(res => {
        console.log(res.data);
        console.log("hahahhahahahahaha");
        console.log(res);
      })
      .catch(error => {
        console.log(error);
        console.log("Haaaaallå");
      });
  };

  componentDidMount() {
    var myMap = new window.Mazemap.Map(this.state);

    this.setState({
      myMap
    });
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
  }
  componentWillUnmount() {}
  setRoom(poi) {
    window.Mazemap.Data.getPoi(poi).then(poi => {
      console.log(poi); // Raw data about the POI.
      var myMap = this.state.myMap;
      myMap.zLevel = poi.properties.zLevel;
      if (poi.geometry.type === "Polygon") {
        myMap.highlighter.highlight(poi);
      }

      var lngLat = window.Mazemap.Util.getPoiLngLat(poi);
      this.state.myMap.flyTo({
        center: lngLat,
        zoom: 20
      });
    });
  }

  handleClick = e => {
    this.state.myMap.flyTo({ center: e.lngLat, zoom: 16 });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.setRoom(759874)}>POI</button>
        <div id="mazemap-container" onClick={this.handleClick}></div>
        {this.state.rooms == null ? "laddar..." : "klar"}
      </div>
    );
  }
}

export default MazeMap;
