import React, { Component } from "react";

export default class RoomList extends Component {
  renderRooms = () => {
    return this.props.rooms.map((room, index) => {
      return (
        <div key={index} onClick={() => this.props.setMapRoom(room.poi)}>
          {" "}
          {room.roomName}
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderRooms()}</div>;
  }
}
