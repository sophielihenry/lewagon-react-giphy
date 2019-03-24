
import React, { Component } from 'react';
import SearchBar from './searchbar.jsx';
import Gif from './gif.jsx'
import Giflist from './giflist.jsx'
import giphy from 'giphy-api'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "6nps2nX9fGV9K"
    }
    this.search('homer thinking');
  }

        search = (query) => {
    giphy('5m8SxNykexIdWD04TD5x6AwgY5WxlSoc').search({
          q: query,
          rating: 'g'
        }, (error, result) => {
          this.setState({
            gifs: result.data
          })

        });
  }



  render() {
    const gifs = [
        { id: "6nps2nX9fGV9K"},
        { id: "6nps2nX9fGV9K"}
      ]

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
            <div className="selected-gif">
              <Gif id = {this.state.selectedGifId}/>
            </div>
        </div>
        <div className="right-scene">
          <Giflist gifs ={this.state.gifs}/>
        </div>
      </div>
      )
  }
}

export default App;
