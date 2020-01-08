import React, { Component } from "react";
import "./Roomlist.css";

export default class RoomList extends Component {
  state = {
    selectedRoomIndex: null
  };
  renderRooms = () => {
    return this.props.rooms.map((room, index) => {
      return (
        <li
          className={
            this.state.selectedRoomIndex === index
              ? "selectedRoom room"
              : "room"
          }
          key={index}
          onClick={() => {
            this.props.setMapRoom(room.poi);
            this.setState({ selectedRoomIndex: index });
          }}
        >
          {/* {index + 1 + ". "}
          {room.roomName} */}

          {room.roomName}
        </li>
      );
    });
  };

  render() {
    return <ol className="roomList">{this.renderRooms()}</ol>;
  }
}
