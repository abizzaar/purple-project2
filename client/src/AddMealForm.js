import React, { Component } from 'react';
import { Button, Form} from 'semantic-ui-react'
import { Z_BLOCK } from 'zlib';

const buttonCss = {
  background: "rgba(0,0,0,0.7)",
  color: "white",
  display: "block",
  margin: "0.8rem auto"
}

const buttonAction = {
  background: "#0D47A1",
  color: "white",
  display: "block",
  margin: "0.8rem auto"
}

class AddMealForm extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // we could call a function passed as a prop that will close the form once it's submitted
    // need to make request to backend api
    // console.log("fuck me up");
    this.props.postToServer(e)
  }


  render() {
    return (
      <Form>
        <Form.Field>
          <label>Your name</label>
          <input onChange={this.props.handleChange} name="author"/>
        </Form.Field>
        <Form.Field>
          <label>Your great dish</label>
          <input onChange={this.props.handleChange} name="name"/>
        </Form.Field>
        <Form.Field>
          <label>For how many can you cook?</label>
          <input onChange={this.props.handleChange} name="number"/>
        </Form.Field>
        <Form.Field>
          <label>Describe your dish</label>
          <input onChange={this.props.handleChange} name="description" />
        </Form.Field>
        <Button style={buttonAction} type='submit' onClick={this.handleClick}>I PROMISE TO COOK</Button>
      </Form>
    );
  }
}

export default AddMealForm;

