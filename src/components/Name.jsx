import React, { Component } from "react";

class Name extends Component {
  render() {
    const { like, character, onLikeToggle } = this.props;

    return (
      <div>
        <h1>{character}</h1>
      </div>
    );
  }
}

export default Name;
