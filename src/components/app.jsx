
import React, { Component } from 'react';
import SearchBar from './searchbar.jsx';
import Gif from './gif.jsx'
import Giflist from './giflist.jsx'

class App extends Component {
  render() {
    const gifs = [
        { id: "6nps2nX9fGV9K"},
        { id: "6nps2nX9fGV9K"}
      ]

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
            <div className="selected-gif"></div>
        </div>
        <div className="right-scene">
          <Giflist gifs ={gifs}/>
        </div>

      </div>
      )
  }
}

export default App;
