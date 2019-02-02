import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './styles/greeting.scss';

class Greeting extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="greeting"
        transitionAppear={true}
        transitionAppearTimeout={1500}
        transitionEnter={false}
        transitionLeave={false}>
        <section id="greeting">
          <section id="top">
            <h1>Aloha!</h1>
            <h2>I'm Renee, a Software Engineer.</h2>
            <h2 className="small">My dream is to make positive change in our world through creating technology that brings individuals together.</h2>
            <p>Based in San Francisco, CA</p>
          </section>
        </section>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Greeting;