import React, { Component } from "react";
import PropTypes from "prop-types";
import Character from "../components/Character";
import CharacterDetails from "../components/CharacterDetails";
import "../styles.css";

class Home extends Component {
  constructor(props) { super(props); this.state = { visible: false, character: {} } }
  
  static propTypes = { data: PropTypes.object };
  
  handleClick(character) { 
    this.setState({visible: !this.state.visible, character: character}) 
  }

  render() {
    const { data } = this.props;
    if(!this.state.visible){ 
      return (
        <div className="Home">
          <h1 className="home-title">Characters</h1>
          <div className="home-list">
            {data.characters.results.map((character) => {
              return <a key={"a" + character.id}  href={"#"+character.name} onClick={() => this.handleClick(character)}> 
                      <Character key={"c" + character.id} character={character} />
                    </a>;
            })}
          </div>
        </div>
      );
    }else{
      return(
        <div className="CharacterDetails">
          <div>
            <img onClick={() => this.handleClick(this.state.character)} title="Go back" class="go-back" src="https://realtimevfx.com/uploads/default/original/2X/9/9ec795306ce4c382f785537845c3c798aba60d07.gif"></img>
          </div>
          <CharacterDetails key={"cd" + this.state.character.id} character={this.state.character} />
        </div>
      )
    }
  }
}

export default Home;
