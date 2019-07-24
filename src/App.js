import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount = () => {
    axios.get("/movies").then(response =>
      this.setState({
        data: response.data
      })
    );
  };

  render() {
    return (
      <div className="App">
        {this.state.data.map(movie => {
          return (
            <div>
              {movie.primaryTitle}, Runtime: {movie.runtimeMinutes}, Adults
              Only: {movie.adult}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
