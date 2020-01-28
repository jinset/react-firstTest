import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';
// react hooks useState
// class App extends Component {
const App = props => {
  const [ personsState, setPersonsState] = useState({
    persons: [
        { name: 'Max', age: 28},
        { name: 'Menu', age: 17},
        { name: 'Mario', age: 27}
      ],  
      otherState: 'Some new value' 
  });

  const [otherState, setOtherState] = useState('Some new value');

  console.log(personsState, otherState)

  // without react hooks
  // state = {
  //   persons: [
  //     { name: 'Max', age: 28},
  //     { name: 'Menu', age: 17},
  //     { name: 'Mario', age: 27}
  //   ],
  //  otherState: 'Some new value' 
  // }
  // switchNameHandler = () => {
  //   // this.state.persons[0].name = "New name "; Do not do this 
  //   this.setState({    
  //     persons: [
  //       { name: 'New name', age: 28},
  //       { name: 'Menu', age: 17},
  //       { name: 'Mario', age: 17}
  //   ]})
  // }

  const switchNameHandler = (newName) => {
    // this.state.persons[0].name = "New name "; Do not do this 
    setPersonsState({    
      persons: [
        { name: newName, age: 28},
        { name: 'Menu', age: 17},
        { name: 'Mario', age: 17}
      ]    
    })
  }

  const nameChangedHandle = (event) => {
    setPersonsState({    
      persons: [
        { name: 'Max', age: 28},
        { name: event.target.value , age: 17},
        { name: 'Mario', age: 17}
      ]    
    })
  }

  // render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      <div className="App">
        <h1>Hi, im a react app</h1>
        <p>THis is really working</p>
        {/* <button onClick={this.switchNameHandler}>Swith Name</button> without hooks */}
        <button 
          style={style}
          onClick={() => switchNameHandler('New name!')}>Swith Name</button>
        <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age}
        />
        <Person 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age}
          click={switchNameHandler.bind(this, 'Second new name')}
          changed={nameChangedHandle}
        > My hobbies: Fussball </Person>        
        <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age}
        />

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null , 'Hi, I\'m a react app') );
  }
// }

export default App;
