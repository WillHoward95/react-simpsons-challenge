import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import "./App.css";

class App extends Component {
  state = { noOfLikes: 5 };

  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    this.setState({ simpsons: data });
  }

  onDelete = (index) => {
    const copy = [...this.state.simpsons];
    copy.splice(index, 1);
    this.setState({ simpsons: copy });
  };

  render() {
    const { simpsons } = this.state;

    if (!simpsons) return <Loading />;

    return (
      <>
        <h1 className="noOfLikes">
          Total no. of liked chars: {this.state.noOfLikes}
        </h1>
        <Simpsons
          simpsons={simpsons}
          onDelete={this.onDelete}
          noOfLikes={this.state.noOfLikes}
        />
      </>
    );
  }
}

export default App;
