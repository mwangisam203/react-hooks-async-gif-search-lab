import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends Component {
  constructor() {
    super();

    this.state = {
      gifs: [],
    };
  }

  componentDidMount() {
    // Fetch initial data here
  }

  handleSearch = (searchTerm) => {
    // Fetch data from Giphy API based on searchTerm and update state
  }

  render() {
    return (
      <div>
        <GifSearch onSearch={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
