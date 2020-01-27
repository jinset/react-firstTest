import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Menu', age: 17},
      { name: 'Mario', age: 27}

    ]
  }
  

  render() {
    return (
      <div className="App">
        <h1>Hi, im a react app</h1>
        <p>THis is really working</p>
        <button>Swith Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbies: Fussball</Person>        
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null , 'Hi, I\'m a react app') );
  }
}

export default App;
