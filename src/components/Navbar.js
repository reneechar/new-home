import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div class="navbar" data-spy="affix" data-offset-top="300">
        <ul class="nav navbar-nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;