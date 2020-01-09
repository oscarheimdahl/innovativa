import React, { Component } from "react";
import "./Roomlist.css";

export default class RoomList extends Component {
  state = {
    selectedRoomIndex: null
  };
  renderRooms = () => {
    return this.props.rooms.map((room, index) => {
      return (
        <div
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
          {index + 1 + ".    "}

          {room.roomName}
        </div>
      );
    });
  };

  render() {
    return <div className="roomList">{this.renderRooms()}</div>;
  }
}
