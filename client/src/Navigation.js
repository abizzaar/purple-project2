import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/meals'>Meals</NavLink></li>
      <li><NavLink to='/recipes'>Recipes</NavLink></li>
      <li><NavLink to='/map'>Map</NavLink></li>
    </ul>
  </nav>
);

export default Navigation;