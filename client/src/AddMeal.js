import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'

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
      return (
        <Form>
          <Form.Field>
            <label>Name of Meal</label>
            <input placeholder='Name of Meal' />
          </Form.Field>
          <Form.Field>
            <label>Meals Available</label>
            <input placeholder='# of Meals Available' />
          </Form.Field>
          <Form.Field>
            <label>Ingredients</label>
            <input placeholder='Ingredients' />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input placeholder='Description' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      );
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

