import React, { Component } from 'react';
import './Roomlist.css';
import { Button } from '@material-ui/core';
import BookChecker from '../BookChecker/BookChecker';

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
              ? 'selectedRoom room'
              : 'room'
          }
          key={index}
          onClick={() => {
            this.props.setMapRoom(room.poi);
            this.setState({ selectedRoomIndex: index });
          }}
        >
          <div className="roomListContent">
            <span className="roomName">{index + 1 + '. ' + room.roomName}</span>
            <BookChecker url={room.noLoginBook} />
            <a className="boka" href={room.book}>
              <Button color="secondary" id="buttonBook">
                Boka
              </Button>
            </a>
          </div>
        </div>
      );
    });
  };

  render() {
    return <div className="roomList">{this.renderRooms()}</div>;
  }
}
