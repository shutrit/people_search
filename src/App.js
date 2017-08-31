import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import text from './people.json';
import { Input } from './Input';
import { People } from './People';
  'use strict';
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      people:text,
    }
    this.originalState = this.state.people
 
  }

  changeState(object) {
    this.setState({
      people:object,

    })
  }
  searchPerson(event){

    let b = event.target.value 
    let foundState={};
    
    if(b.length >3){

      this.state.people.map(function(person){

          Object.keys(person).map(function(key){
        
            if(person[key].includes(b)) {
          
                foundState = Object.assign(person);
            } 
        
          })
      })
     
    } 

    if(Object.keys(foundState)[1]) {
        this.changeState([foundState])
    } else {
        this.changeState(this.originalState)
    }
    
  }

  render() {
   
    return (
      <div className="App">
         <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          </div>
            <Input search={this.searchPerson.bind(this)}/>
            <div className="people">
            <People people={this.state.people}/>
            </div>
      </div>
    );
  }
}

export default App;
