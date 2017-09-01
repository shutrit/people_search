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
  verifyString(string){
    //TODO add expressions 
    return  string.length > 3;
  }
  changeState(object) {
    this.setState({
      people:object,

    })
  }
  searchPerson(event){

    let foundState={};
    
    if(this.verifyString(event.target.value)){

       this.state.people.filter((person)=>{

         return  Object.keys(person).filter((key)=>{
                  
                 if(person[key].includes(event.target.value )) { foundState =person } 
                    
                  return person[key];
                   });
      });
     
    }  

    Object.keys(foundState)[1] ? this.changeState([foundState]):this.changeState(this.originalState);
    
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
