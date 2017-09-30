import React, { Component } from 'react';
import './styles/navbar.scss'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="nav navbar-nav">
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
      </nav>
    );
  }
}

export default Navbar;