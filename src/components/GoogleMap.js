import React, { Component } from "react";

class GoogleMaps extends Component {
  componentDidMount() {
    const google = window.google;
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      },
      disableDefaultUI: true,
    });
  }
  render() {
    return <div ref='map' style={{ height: "110px", width: "110px" }}></div>;
  }
}

export default GoogleMaps;
