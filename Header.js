import React from "react";

function Header() {
  return (
    <header className="header">
      <img src={require("/img/troll-face.png")} alt="Problem?" />
      <p>Meme Generator</p>
    </header>
  );
}

export default Header;
