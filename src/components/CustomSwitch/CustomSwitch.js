import React, { Component } from 'react';
import { Button, Switch } from '@material-ui/core';

export default class CustomSwitch extends Component {
  state = {
    light: false
  };
  render() {
    return (
      <div className="switchContainer">
        <div id="sliderTitle">Ljus</div>
        Mörkt
        <Switch
          className="switch"
          checked={this.state.light}
          color="primary"
          onChange={_ => {
            this.setState({ light: !this.state.light });
            this.props.setLight(
              this.state.light
                ? this.props.lightAttributes.max
                : this.props.lightAttributes.min
            );
          }}
        />
        Ljust
      </div>
    );
  }
}
