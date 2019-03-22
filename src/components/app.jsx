
import React, { Component } from 'react';
import SearchBar from './searchbar.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
        </div>
        <div className="right-scene"></div>
      </div>
      )
  }
}

export default App;
