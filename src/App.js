import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import text from './people.json';
import { Input } from './Input';
import { People } from './People';

class App extends Component {
    'use strict';
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

    let foundState={};
    
    if(event.target.value.length >3){

         this.state.people.map((person)=>{

          return  Object.keys(person).map((key)=>{
        
            person[key].includes(event.target.value )? foundState =person :foundState= {};
        
          });
      });
     
    } 
  
   Object.keys(foundState)[1]?  this.changeState([foundState]) :this.changeState(this.originalState);
    
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
