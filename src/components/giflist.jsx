import React, { Component } from 'react';
import Gif from './gif.jsx'

class Giflist extends Component {
  renderList =() => {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={Math.random()}/>
      )
    }

    handleClick(e) {
      e.preventDefault();
      console.log(e.target);
    }

  render() {
    return (
     <div className="gif-list"
          onClick={this.handleClick}>
      {this.renderList()}
     </div>
    )
  }
 }

export default Giflist;

