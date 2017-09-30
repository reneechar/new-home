import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './styles/greeting.scss';

class Greeting extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="greeting"
        transitionAppear={true}
        transitionAppearTimeout={1500}>
        <section id="greeting">
          <section id="top">
            <h1>Aloha!</h1>
            <h2>I'm Renee, a web developer with a passion for design and optimization.</h2>
            <p>Based in San Francisco, CA</p>
          </section>
        </section>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Greeting;