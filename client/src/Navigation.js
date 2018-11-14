import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

const navStyle = {
  display: "flex",
  flexDirection: "row"
}

const Navigation = () => (
  <nav>
    <div style={navStyle}>
      <ul><NavLink to='/'>Home</NavLink></ul>
      <ul><NavLink to='/meals'>Meals</NavLink></ul>
      <ul><NavLink to='/recipes'>Recipes</NavLink></ul>
      <ul><NavLink to='/map'>Map</NavLink></ul>
      <ul><NavLink to='/mealrequests'>Meal Requests</NavLink></ul>
    </div>
  </nav>
);

export default Navigation;
