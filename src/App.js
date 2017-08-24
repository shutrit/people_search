import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import text from './people.json';
import { Input } from './Input';
import { People } from './People'
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      people:text,
    }
    this.originalState = this.state.people
  }

  searchPerson(event){

    let b = event.target.value 
    console.log(172)
    const g =  this.state.people.filter((val)=>{
      return val.name === b || val.company === b || val.city === b || val.email === b || val.job_history.indexOf(b)!=-1
    }) 

    g.length>0 ? this.setState({ people:g }):this.setState({ people:this.originalState })
    
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
