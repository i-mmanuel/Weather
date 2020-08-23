import React, { Component } from "react";
import { bindActionCreators } from "redux";

import { fetchWeather } from '../actions/index';
import { connect } from "react-redux";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({term: ''})
  }

  render() {
    return (
      <form
        className='ui form'
        onSubmit={(event) => {this.onFormSubmit(event)}}
      >
        <input
          type='text'
          autoFocus
          placeholder='Get a five-day forecast in your favourite cities in the UK'
          value={this.state.term}
          onChange={(e) => this.setState({ term: e.target.value })}
        />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
