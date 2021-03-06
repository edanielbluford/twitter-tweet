import React, { Component } from "react";
import Pokemon from "./Pokemon";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      species: [],
      fetched: false,
      loading: false
    };
  }

  componentWillMount() {
    this.setState({
      loading: true
    });

    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(res => res.json())
      .then(response => {
        this.setState({
          species: response.results,
          loading: true,
          fetched: true
        });
      });
  }

  render() {
    const { fetched, loading, species } = this.state;

    let content;

    if (fetched) {
      content = (
        <div className='poke-list'>
          {species.map((pokemon, index) => (
            <Pokemon key={pokemon.name} id={index + 1} pokemon={pokemon} />
          ))}
        </div>
      );
    } else if (loading && !fetched) {
      content = <div>Loading.....</div>;
    } else {
      content = <div />;
    }
    return <div>{content}</div>;
  }
}

export default Header;
