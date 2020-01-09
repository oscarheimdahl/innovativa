import React, { Component } from "react";
import "./Roomlist.css";
import { Button } from "@material-ui/core";

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
          <span className="roomName">
            {index + 1 + ".    " + room.roomName}
          </span>
          {"     "}
          <a className="boka" href={room.book}>
            <Button color="secondary">Boka</Button>
          </a>
        </div>
      );
    });
  };

  render() {
    return <div className="roomList">{this.renderRooms()}</div>;
  }
}
