import React, { Component } from "react";
import PropTypes from "prop-types";
import Character from "../components/Character";
import "../styles.css";

class Home extends Component {
  static propTypes = {
    data: PropTypes.object
  };
  render() {
    const { data } = this.props;
    return (
      <div className="Home">
        <h1 className="home-title">Characters</h1>
        <div className="home-list">
          {data.characters.results.map((character) => {
            return <Character key={"c" + character.id} character={character} />;
          })}
        </div>
      </div>
    );
  }
}

export default Home;
