import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

const navStyle = {
  display: "flex",
  color: "white",
  flexDirection: "row",
  justifyContent: "space-around",
  backgroundColor: "rgb(13, 71, 161)",
  paddingRight: "40px"
}

const navCss = {
  width: "100%",
  height: "5rem",
  padding: "1.5rem",
  backgroundColor: "black",
  color: "white",
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around"
}

const linkStyle = {
  color: "white",
  fontWeight: "bold"
}

// const imgStyle = {
//   width: "25px",
//   height: "20px"
// }

/*<img style={imgStyle} src={"/white-companero-logo-2.png"} />*/

const Nav = () => (
  <nav>
    <div style={navCss}>
      <h2>compañero</h2>
    </div>
    <div style={navStyle}>
      <ul><NavLink to='/' style={linkStyle}>Home</NavLink></ul>
      <ul><NavLink to='/meals' style={linkStyle}>Meals</NavLink></ul>
      <ul><NavLink to='/mealrequests' style={linkStyle}>Meal Requests</NavLink></ul>
      <ul><NavLink to='/map' style={linkStyle}>Map</NavLink></ul>
      <ul><NavLink to='/recipes' style={linkStyle}>Recipes</NavLink></ul>
    </div>
  </nav>
);

export default Nav;
