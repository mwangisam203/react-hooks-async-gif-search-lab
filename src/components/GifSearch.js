import React, { Component } from 'react';

class GifSearch extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
    };
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchTerm);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default GifSearch;
