import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Character extends Component {
  static propTypes = {
    character: PropTypes.object
  };

  state = {
    visible: Boolean = false,
  }

  handleClick(id) {
    this.setState({visible: !this.state.visible})
  }
  
  render() {
    const { character } = this.props; 
    if(!this.state.visible){
      return (
        <div>
          <a href="#" onClick={() => this.handleClick(character.id)}>
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
          </a>
        </div>
      );  
    } else {
      return (
        <div class="character-details">
          <a href="#" onClick={() => this.handleClick(character.id)}>
            <img
              key={"i" + character.id}
              className="Img"
              width="100%"
              src={character.image}
              alt={character.name}
            />
            <div className="Description" key={character.id}>
              <p className="p-desc">{character.name}</p>
              <p className="p-desc">{character.status}</p>
              <p className="p-desc">{character.species}</p>
              <p className="p-desc">{character.gender}</p>
            </div>
          </a>
        </div>
      );
    }
  }
}
