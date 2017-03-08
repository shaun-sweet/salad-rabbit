import React, { Component } from 'react'
import NavButton from './NavButton'
import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'
import FontIcon from 'material-ui/FontIcon';
const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};
export default class Navigation extends Component {

  render() {
    return (
      <nav>
        <Paper style={style}>
          <Menu>
            <NavButton label="Budget" to="/" icon={<FontIcon className="material-icons">label_outline</FontIcon>} />
            <NavButton label="All Accounts" to="/accounts" icon={<FontIcon className="material-icons">credit_card</FontIcon>} />
          </Menu>
        </Paper>
      </nav>
    );
  }
}





//
// const MenuExampleSimple = () => (
//
//     <Paper style={style}>
//       <Menu>
//         <MenuItem primaryText="Refresh" />
//         <MenuItem primaryText="Help &amp; feedback" />
//         <MenuItem primaryText="Settings" />
//         <MenuItem primaryText="Sign out" />
//       </Menu>
//     </Paper>
//   )
