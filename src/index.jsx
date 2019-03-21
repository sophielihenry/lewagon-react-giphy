import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// want to attach this component to the DOM
// props is an object that cannot be changed
// const Hello = (props) => {
//   return <div> Hello {props.name} </div>
// };

class Morning extends Component {
  constructor(props) {
    super(props);

// state is information that can change
    this.state = {
      clicked: false,
      counter: 0
    };
  }
// this is bound to Component
  handleClick = () => {
    this.setState({
      clicked:  !this.state.clicked,
      counter: this.state.counter + 2
    })
  }

  render() {
  // build and return HTML
    return (
  // use this with class notation
  // add class if state clicked is true
      <div className={this.state.clicked ? 'clicked' : null }
        onClick={this.handleClick}>
         Good morning {this.props.name}
         {this.state.counter}
      </div>
      )
  }
}



const root = document.getElementById('root');
// if root exists
if (root) {
// callsthe function and injects HTML inside the id named root
  ReactDOM.render(<Morning name="sophie"/>, root)
}







