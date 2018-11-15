import React, {Component} from 'react';
import Nav from './Nav.js';

const background = {
  backgroundColor: "light gray"
}

const imgContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "50px",
  margin: "30px"
}

const italicText = {
  fontStyle: "italic",
  fontSize: "1.2rem",
  color: "grey"
}

const regText = {
  fontSize: "25px"
}

const bigText = {
  fontSize: "45px",
  fontWeight: "bold"
}

const quoteBox = {
}

const overallContainer = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "100px",
  paddingBottom: "100px",
  backgroundColor: "#f7f8f9"
}

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={background}>
        <Nav />
        <div style={overallContainer}>
          <div style={imgContainer}>
            <img src={"/fixed-logo.png"} />
          </div>
          <div style={quoteBox}>
            <ul style={bigText}>compañero</ul>
            <ul style={italicText}>/kom-puh n-yair-oh/</ul>
            <ul style={regText}>The act of sharing bread with your community to spread companionship.</ul>
            <ul style={italicText}>Con pan, with bread.</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
