import React, { Component } from 'react'

class Gif extends Component {
  render() {
      const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif`

    return (
      <div className="gifResize">
          <button className="deleteGiphy"
                  onClick={() => this.props.deleteGif(this.props.id)}>x</button>
        <img src={src}
             alt=""
             className="gif"
             onClick={() => this.props.selectGif(this.props.id)}/>

      </div>
      );
  }
}

export default Gif


