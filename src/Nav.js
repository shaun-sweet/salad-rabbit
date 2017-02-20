import React, { Component } from 'react';
class NavigationMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {

      };

  }

  render() {
    return (
      <div className="navigation" >
        <ul>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

export default NavigationMenu;
