import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allImgMemes: []
    };
    this.eventHandler = this.eventHandler.bind(this);
    this.genMeme = this.genMeme.bind(this);
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

  eventHandler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  genMeme(event) {
    event.preventDefault();
    const randNumber = Math.floor(
      Math.random() * this.state.allImgMemes.length
    );
    const randMemeImg = this.state.allImgMemes[randNumber].url;
    this.setState({ randomImage: randMemeImg });
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.genMeme}>
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
        <div className="meme">
          <img src={this.state.randomImage} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
