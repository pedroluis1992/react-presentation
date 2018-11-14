import React, { Component } from 'react';
import './App.css';
import CardExample from './components/CardExample';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {people: []}
    this.data =[{id: 1, name: "Pedro", address: "direccion 1"},{id: 2,name: "Manuel", address: "address 2"} ]

  }

  componentDidMount(){
    this.getPeople();
  }

  getPeople(){
    this.setState({people: this.data});
  }

  render() {
    const people = this.state.people.map(person => {
      return(
        <CardExample
          key={person.id}
          title={person.name}
          description={person.address}
        />
      );
    })
    return (
      <div>
        <div className="container">
          <div className="d-flex justify-content-between flex-wrap" >
            {people}
          </div>
        </div>
      </div>

    );
  }
}

export default App;
