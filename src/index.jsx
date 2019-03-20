import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// want to attach this component to the DOM
// props is an object that cannot be changed
// const Hello = (props) => {
//   return <div> Hello {props.name} </div>
// };


// const root = document.getElementById('root');
// // if root exists
// if (root) {
// // callsthe function and injects HTML inside the id named root
//   ReactDOM.render(<Hello name="sophie"/>, root)
// }



class Hello extends Component {
  constructor(props) {
    super(props);

// state is information that can change
    this.state = {
      clicked: false
    };
  }
// this is bound to Component
  handleClick = () => {
    this.setState({
      clicked:  !this.state.clicked
    })
  }

  render() {
  // build and return HTML
    return (
  // use this with class notation
  // add class if state clicked is true
      <div className={this.state.clicked ? 'clicked' : null }
        onClick={this.handleClick} >
        Hello {this.props.name}
      </div>

      )
  }

}





