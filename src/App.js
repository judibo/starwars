import React, { Component } from 'react';
import './App.css';
import PlanetaDetalhe from './components/PlanetaDetalhe';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlanet: null,
      random: Math.floor((Math.random() * 61) + 1)
    };
  }

  handleIdChange = (e) => {
    var random = Math.floor((Math.random() * 61) + 1)
    e.preventDefault()
    fetch(`https://swapi.co/api/planets/${random}`)
    .then(response => response.json())
    .then(json => this.setState({
      currentPlanet: json,
      random: random,
    }))
  } 
  
  componentDidMount() {
    fetch(`https://swapi.co/api/planets/${this.state.random}`)
    .then(response => response.json())
    .then(json => this.setState({
      currentPlanet: json
    }));
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img alt="Star Wars Logo" src="https://www.freeiconspng.com/uploads/logo-star-wars-png-4.png" style={{width: 190, padding: 20}}/>
        </header>
        <PlanetaDetalhe {...this.state.currentPlanet}
                        handleIdChange={this.handleIdChange}/>
      </div>
    );
  }
}

export default App;
