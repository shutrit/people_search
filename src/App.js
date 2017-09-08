import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import text from './paintings.json';
import { Painting } from './Painting';


class App extends Component {
    'use strict';
  constructor(props){
    super(props)
    this.state = {
      paintings:text,
      title:'Disasters in Blue'
    }
    this.originalState = this.state.title
    this.getTit = this.getTit.bind(this)
    this.empTit = this.empTit.bind(this)
  }
  getTit(event) {
    this.setState({
      title:event.target.title
    })
  }
  empTit(event) {
    this.setState({
      title:this.originalState
    })
  }
  render() {
    return (
      <div className="App">
         <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h3>{this.state.title}</h3>
          </div>
          <div className="art-works">
          <Painting paintings={this.state.paintings} enterIT={this.getTit} leaveIT={this.empTit}/>
          </div>
        </div>
    );
  }
}

export default App;
