import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import MaterialSlider from '@material-ui/core/Slider';
import './Slider.css';

// function valuetext(value) {
//   return `${value}°C`;
// }

class Slider extends Component {
  render() {
    // const useStyles = makeStyles(theme => ({
    //     root: {
    //       width: 300
    //     },
    //     margin: {
    //       height: theme.spacing(3)
    //     }
    //   }));
    // const classes = useStyles();
    return (
      <div className="slider">
        <div id="sliderTitle">{this.props.config.title}</div>
        <MaterialSlider
          defaultValue={this.props.config.defaultValue}
          //   getAriaValueText={this.props.valueText}
          //   getAriaLabel={value => "hej"}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          marks={this.props.config.marks}
          min={this.props.config.min}
          max={this.props.config.max}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
export default Slider;
