import React, { Component } from 'react';
import './MazeMap.css';

class MazeMap extends Component {
    state = {
        // The DOM element ID for the map
        container: 'mazemap-container',

        // The ID of the campus to show
        campuses: 289,

        // Initial position of map
        center: { lng: 20.311087, lat: 63.821773 },

        // Initial zoom of map
        zoom: 14,

        // Initial floor z level of map
        zLevel: 2
    };

    componentDidMount() {
        var myMap = new window.Mazemap.Map(this.state);
        this.setState({
            myMap
        });
    }

    handleClick = e => {
        this.state.myMap.flyTo({ center: e.lngLat, zoom: 16 });
    };

    render() {
        return (
            <div>
                <div id='mazemap-container' onClick={this.handleClick}></div>
            </div>
        );
    }
}

export default MazeMap;
