import React, { Component } from 'react';
import './App.css';
import PlanetaDetalhe from './components/PlanetaDetalhe';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlanet: null,
      id: Math.floor((Math.random() * 61) + 1),
      nFilms: null
    };
  }

  handleIdChange = (e) => {
    var id = Math.floor((Math.random() * 61) + 1)
    e.preventDefault()
    fetch(`https://swapi.co/api/planets/${id}`)
    .then(response => response.json())
    .then(json => this.setState({
      currentPlanet: json,
      id: id,
    }))
  } 
  
  componentDidMount() {
    fetch(`https://swapi.co/api/planets/${this.state.id}`)
    .then(response => response.json())
    .then(json => this.setState({
      currentPlanet: json
    }));
  }

  render() {
    let planet = this.state.currentPlanet;
    if (planet) { 
      this.state.nFilms = planet.films.length;
      }
    return (
      <div className="App">
        <header className="App-header">
          <img alt="Star Wars Logo" src="https://www.freeiconspng.com/uploads/logo-star-wars-png-4.png" style={{width: 190, padding: 20}}/>
        </header>
        <PlanetaDetalhe {...this.state.currentPlanet}
                        nFilms = {this.state.nFilms}
                        handleIdChange={this.handleIdChange}/>
        <section className="footer">
          <p className="quote">Together we can rule the galaxy!</p>
          <p>- Darth Vader -</p>
        </section>
      </div>
    );
  }
}

export default App;
