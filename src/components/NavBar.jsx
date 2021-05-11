import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import '../App.css';

export default function NavBar() {
  const [activeItem, setActiveItem] = useState('');

  const reset = () => {
    setActiveItem("");
  }

  const handleItemClick = (e) => {
    setActiveItem(e.target.name);

    reset();
  } 

    return (
      <Menu inverted fluid widths={2}>
        <Menu.Item
          as={NavLink} to="/"
          exact
          name='search'
          icon='home'
          active={activeItem === 'search'}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/nomination"
          exact
          name='nomination'
          icon='heart'
          active={activeItem === 'nomination'}
          onClick={handleItemClick}
        />
      </Menu>
    )
}