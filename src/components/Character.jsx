import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";

class Character extends Component {
  state = { like: false };

  onLikeToggle = () => {
    this.setState({ like: !this.state.like });
    this.setState({ noOfLikes: this.props.noOfLikes + 1 });
  };

  render() {
    const { character, quote, image, characterDirection } = this.props.item;
    const { like } = this.state;

    if (characterDirection === "Right") {
      return (
        <div className="characterContainer">
          <div className="info">
            <Name character={character} like={like} />

            <Quote quote={quote} />

            <div className="buttonContainer">
              <button className="button" onClick={this.onLikeToggle}>
                {like ? "Liked" : "Not liked"}
              </button>

              <Delete
                className="button"
                onDelete={this.props.onDelete}
                quote={quote}
                index={this.props.index}
              />
            </div>
          </div>
          <div>
            <Image image={image} like={like} />
            <p>Facing {characterDirection}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="characterContainer">
        <div>
          <Image image={image} like={like} />
          <p>Facing {characterDirection}</p>
        </div>
        <div className="info">
          <Name character={character} like={like} />

          <Quote quote={quote} />

          <div className="buttonContainer">
            <button className="button" onClick={this.onLikeToggle}>
              {like ? "Liked" : "Not liked"}
            </button>

            <Delete
              className="button"
              onDelete={this.props.onDelete}
              quote={quote}
              index={this.props.index}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Character;
