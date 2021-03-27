import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allImgMemes: [],
      topText: ""
    };
    this.eventHandler = this.eventHandler.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        // store the meme object in data to state
        const { memes } = response.data;
        this.setState({ allImgMemes: memes });
      });
  }

  /**
   * Create the onChagne handler method
   * It should update the corresponding state on every change of the input box
   */

  eventHandler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form className="meme-form">
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            placeholder="Top text"
            onChange={this.eventHandler}
          />
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            placeholder="Bottom text"
            onChange={this.eventHandler}
          />
          <button>Gen</button>
        </form>
      </div>
    );
  }
}

export default MemeGenerator;
