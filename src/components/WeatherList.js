import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "./Chart";
import GoogleMaps from "./GoogleMap";

class WeatherList extends Component {
  renderWeather = (cityData) => {
    let name = cityData.city.name;
    let temps = cityData.list.map((weather) => weather.main.temp);
    let pressures = cityData.list.map((weather) => weather.main.pressure);
    let humidities = cityData.list.map((weather) => weather.main.humidity);
    let lon = cityData.city.coord.lon;
    let lat = cityData.city.coord.lat;

    return (
      <tr key={name}>
        <td style={{ height: "110px", width: "110px" }}>
          <GoogleMaps lon={lon} lat={lat} />
        </td>
        <td>
          <Chart colour='orange' data={temps} units=' k' />
        </td>
        <td>
          <Chart colour='red' data={pressures} units=' hPA' />
        </td>
        <td>
          <Chart colour='blue' data={humidities} units=' %' />
        </td>
      </tr>
    );
  };

  render() {
    return (
      <table className='ui unstackable table'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);
