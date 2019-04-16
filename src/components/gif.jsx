import React, { Component } from 'react'

class Gif extends Component {

  handleClick = () => {
    this.props.selectGif(this.props.id)
  }

  render() {
      const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif`

    return (
      <div>
        <img src={src} alt="" className="gif" onClick={this.handleClick}/>
        <button className="deleteGiphy" onClick={() => this.props.deleteGif(this.props.id)}>Delete</button>
      </div>
      );
  }
}

export default Gif


