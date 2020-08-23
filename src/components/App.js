import React, { Component } from "react";
import SearchBar from "./SearchBar";
import WeatherList from "./WeatherList";

export default class App extends Component {
  render() {
    return (
      <div className='ui container' style={{ paddingTop: "3%" }}>
        <header className='ui center aligned header'>
          Weather for the next 5 days
        </header>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
