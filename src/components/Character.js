import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Character extends Component {
  static propTypes = {
    character: PropTypes.object
  };

  render() {
    const { character } = this.props; 
    return (
      <div>
        <img
          key={"i" + character.id}
          className="Img"
          width="100%"
          src={character.image}
          alt={character.name}
        />
        <div className="Description" key={character.id}>
          <p className="p-desc">{character.name}</p>
        </div>
      </div>
    );  
  }
}
