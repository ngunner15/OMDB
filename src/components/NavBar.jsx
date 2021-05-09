import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import '../App.css';

export default class MenuExampleEvenlyDivided extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted pointing fluid widths={2}>
        <Menu.Item
          as={NavLink} to="/"
          name='search'
          active={activeItem === 'search'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/nomination"
          name='nomination'
          active={activeItem === 'nomination'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}