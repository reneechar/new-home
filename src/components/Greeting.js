import React, { Component } from 'react';


class Greeting extends Component {
  render() {
    return (
      <section id="greeting">
        <section id="top">
          <h1 class="animated fadeIn text-center">Aloha!</h1>
          <h2 class="animated fadeIn text-center">I'm Renee, a web developer with a passion for design and optimization.</h2>
          <p class="location animated fadeIn text-center">Based in San Francisco, CA</p>
        </section>
      </section>
    );
  }
}

export default Greeting;