import React, { Component } from "react";
import MazeMap from "../Mazemap/MazeMap";
import RoomList from "../RoomList/RoomList";
import Axios from "axios";
import BookChecker from "../BookChecker/BookChecker";

export default class Results extends Component {
  state = {
    rooms: [],
    poi: null
  };

  constructor(props) {
    super(props);
    this.fakeFetchRooms();
  }

  setMapRoom = poi => {
    this.setState({ poi });
  };

  fakeFetchRooms = () => {
    const url =
      "https://europe-west1-innovativa-1337.cloudfunctions.net/fetchAll";

    Axios.post(url, this.props.attributes).then(res => {
      let rooms = res.data;
      this.setState({ rooms });
      console.log(rooms);
    });
    // const delay = t => new Promise(resolve => setTimeout(resolve, t));
    // delay(2000).then(res => {
    //   const rooms = [
    //     {
    //       roomName: "NC355",
    //       roomScore: 1849.316660308838,
    //       poi: 759903
    //     },
    //     {
    //       roomName: "NC356",
    //       roomScore: 1850.2440646362306,
    //       poi: 759923
    //     },
    //     {
    //       roomName: "NC359",
    //       roomScore: 1856.08170501709,
    //       poi: 759898
    //     },
    //     {
    //       roomName: "NC358",
    //       roomScore: 1856.961674041748,
    //       poi: 759909
    //     },
    //     {
    //       roomName: "NC357",
    //       roomScore: 1858.394358986318,
    //       poi: 759874
    //     }
    //   ];
    //   this.setState({ rooms });
    //   console.log("done");
    // });
  };

  render() {
    return (
      <div>
        <BookChecker></BookChecker>
        <MazeMap
          poi={this.state.poi}
          attributes={this.props.attributes}
        ></MazeMap>
        <RoomList
          setMapRoom={this.setMapRoom}
          rooms={this.state.rooms}
        ></RoomList>
      </div>
    );
  }
}
