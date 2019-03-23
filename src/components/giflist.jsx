import React, { Component } from 'react';
import Gif from './gif.jsx'

class Giflist extends Component {
  renderList =() => {
    return this.props.gifs.map(gif => <Gif id={gif.id}/>)
  }


  render() {
    return (
     <div className="gif-list">
      {this.renderList()}
     </div>
    )
  }
 }

export default Giflist;
