import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Home from "./pages/Home";
import Loading from "./components/Loading";

import "./styles.css";

const CharactersQuery = (props) => {
  return (
    <Query
      query={gql`
        {
          characters {
            results {
              id
              name
              image
              status
              species
              gender
            }
          }
        }
      `}
    >
      {props.children}
    </Query>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <CharactersQuery>
          {({ loading, error, data }) => {
            if (loading) return <Loading />;
            if (error) return <p>error</p>;
            return <Home key={1} data={data} />;
          }}
        </CharactersQuery>
      </div>
    );
  }
}

export default App;
