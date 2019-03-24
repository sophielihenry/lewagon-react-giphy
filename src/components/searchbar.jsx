import React, { Component } from 'react';
import giphy from 'giphy-api'


class SearchBar extends Component {

  handleUpdate = (event) => {

    this.search(event.target.value);

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
    return (
      <div>
        <input type="text" className="form-control form-search" onChange={this.handleUpdate}/>
      </div>
      )
  }
}

export default SearchBar
