import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

const lowerNavCss = {
  margin: "auto",
  marginTop: "2rem"
}

class AddMeal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  handleClick() {
    this.setState({clicked: true});
    console.log(this.state.clicked);
  }

  showForm() {
    if (this.state.clicked) {
      return (<div> Yay </div>);
    }
  }

  render() {
    return (
      <div>
        <Button style={lowerNavCss} onClick={this.handleClick}>
          Add your own meal!
        </Button>
        {this.showForm()}
      </div>
    );
  }
}

export default AddMeal;

