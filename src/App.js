import React, { useState, Component } from "react";
import Person from "./Person/Person";
import "./App.css";
// react hooks useState
class App extends Component {
// const App = props => {
  // const [personsState, setPersonsState, showPersonsState] = useState({
  //   persons: [
  //     { name: "Max", age: 28 },
  //     { name: "Menu", age: 17 },
  //     { name: "Mario", age: 27 }
  //   ],
  //   otherState: "Some new value",
  //   showPersons: false
  // });
  

  // const [otherState] = useState("Some new value");

  // console.log(personsState, otherState);

  // without react hooks
  state = {
    persons: [
      { id: 'askd1',name: 'Max', age: 28},
      { id: 'dsasd',name: 'Menu', age: 17},
      { id: 'asd23dsa',name: 'Mario', age: 27}
    ],
   otherState: 'Some new value',
   showPersons: false
  }

  // switchNameHandler = newName => {
  //   // this.state.persons[0].name = "New name "; Do not do this
  //   setPersonsState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: "Menu", age: 17 },
  //       { name: "Mario", age: 17 }
  //     ]
  //   });
  // };

  nameChangedHandle = (event, id) => {

    // setPersonsState({
    //   persons: [
    //     { name: "Max", age: 28 },
    //     { name: event.target.value, age: 17 },
    //     { name: "Mario", age: 17 }
    //   ]
    // });

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {...this.state.persons[personIndex]};
    // const perons = Object.assign({}, this.state.perons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    // Copy to create a new array 
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

  let persons = null;

  if (this.state.showPersons) {
    persons = (
      <div >
        {this.state.persons.map((person, index) => {
          return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={ (event) => this.nameChangedHandle(event, person.id)}
            />
        })}
        {/* <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Second new name")}
          changed={this.nameChangedHandle}
        > My hobbies: Fussball
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        /> */}
      </div> 
    );

  }

  return (
    <div className="App">
      <h1>Hi, im a react app</h1>
      <p>THis is really working</p>
      {/* <button onClick={this.switchNameHandler}>Swith Name</button> without hooks */}
      <button style={style} onClick={this.togglePersonsHandler}>
        Swith Name
      </button>
      {persons}
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null , 'Hi, I\'m a react app') );
};
}

export default App;
