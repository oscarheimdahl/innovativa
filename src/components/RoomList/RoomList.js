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
          <a
            className="boka"
            href="https://cloud.timeedit.net/umu/web/studres2/ri.html?h=t&sid=6&p=20200109-20200109&objects=13366.4%2C&ox=0&types=0&fe=0&part=f&tg=-1&se=f&exw=t&rr=1"
          >
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
