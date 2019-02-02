import React, { Component } from 'react';
import './styles/navbar.scss'


class Navbar extends Component {
  render() {
    return (
      <div id="nav-container">
        <nav className="navbar" id="navbar">
          <ul className="nav navbar-nav">
            <li>
              <a href="#">Top</a>
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
      </div>
    );
  }
}

export default Navbar;