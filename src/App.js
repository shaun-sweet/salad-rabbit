import React, { Component } from 'react';
import './css/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './helpers';
injectTapEventPlugin();
class App extends Component {

  constructor() {
    super();
    this.state = {

      };

  }

  render() {
    return (
      <MuiThemeProvider iconClassNameRight="muidocs-icon-navigation-expand-more">
        <AppBar title="Salad Rabbit" />
      </MuiThemeProvider>
    );
  }
}

export default App;
