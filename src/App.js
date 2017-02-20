import React, { Component } from 'react';
import './css/App.css';
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
           `read up on this.props.children, its important to know how that works.  or just keep reading, this might be enough for you to understand.
            The basic idea is that anything you render nested, like for example above where <NavigationMenu> has nested NavLink components.
            Thats basically syntactic sugar for passing the NavLink components as props to the NavigationMenu component.  So in order to render them
            inside the NavigationMenu, you'll see I did the same technique there.  The router works the same way.  It restructures the App
            component to be whatever the full route is.  (And since NavigationMenu is constant thru our app, I hard coded it up top for dryness)
            To the point: When you click a link on the page, since the router is wrapping the entire app (as it should be) it restructures the
            props of the root route/component which in this case is the App component (see index.js for what i'm talking about).
            so for example when you click the budget link:
            <App>
              <Budget />
            </App>

            The router changes that structure based on your click and route nesting structure which changes the props bc syntactic JSX sugaaaa.
            using this.props.children triggers the re-render and wam bam thank you mam it works.  also this took much longer bc no
            mother fucking internet and all the doc formatting images left my cache and it was terrible... anyways hopefully this small writeup
            helps a bit.  Also you can pull url params as well as query string params, but I forget the syntax for snagging that.  its in the props somewhere.

            Also this fancy fat comment is called a HEREDOC.  IDK what it stands for or means but its for formatting large comments.

           `
          {this.props.children}
        </section>
      </main>
    );
  }
}

export default App;
