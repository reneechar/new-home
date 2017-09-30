import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Greeting from './components/Greeting';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { StickyContainer } from 'react-sticky';

class App extends Component {
  render() {
    return (
      <div>
        <Greeting/>
        <Navbar/>
        <Banner/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
