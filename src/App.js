import React, { Component } from 'react';
import './css/App.css';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import NavigationMenu from './Nav';
import NavLink from './NavLink';
class App extends Component {

  constructor() {
    super();
    this.state = {

      };

  }

  render() {
    return (
      <main>
        <NavigationMenu>
          <NavLink label="budget" to="budget" />
          <NavLink label="accounts" to="accounts" />
          <NavLink label="contact" to="contact" />
        </NavigationMenu>
        <section id="display">
          {this.props.children}
        </section>
      </main>
    );
  }
}

export default App;
