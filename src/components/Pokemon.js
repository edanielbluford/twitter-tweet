import React, { Component } from "react";

class Pokemon extends Component {
  render() {
    const { pokemon, id } = this.props;
    return (
      <div>
        <div className='poke-container'>
          <div className='poke-sprite'>
            <img src={`/public/sprites/${id}.png`} />
          </div>
          <div className='poke-name'>{pokemon.name}</div>
        </div>
      </div>
    );
  }
}

export default Pokemon;
