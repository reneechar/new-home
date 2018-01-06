import React, { Component } from 'react';
import './styles/navbar.scss'


class Navbar extends Component {
  componentDidMount() {
    window.onscroll = function() {
      var sticky = document.getElementById("navbar");
      if( document.body.scrollTop+document.documentElement.scrollTop > 420)
          sticky.className = "stuck";
      else sticky.className = "";
    };
  }
  render() {
    return (
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
    );
  }
}

export default Navbar;