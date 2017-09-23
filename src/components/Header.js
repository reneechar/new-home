import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <section id="top">
        <h1 className="animated fadeIn text-center">Aloha!</h1>
        <h2 className="animated fadeIn text-center">I'm Renee, a web developer with a passion for design and optimization.</h1>
        <p className="location animated fadeIn text-center">Based in San Francisco, CA</p>
      </section>
    );
  }
}

export default Header;