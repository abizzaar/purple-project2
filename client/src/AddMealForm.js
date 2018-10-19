import React, { Component } from 'react';
import { Button, Form} from 'semantic-ui-react'
import { Z_BLOCK } from 'zlib';

const buttonCSS = {
  display: "block",
  margin: "auto"
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
          <label>Author</label>
          <input onChange={this.props.handleChange} name="author" placeholder='Burritos!' />
        </Form.Field>
        <Form.Field>
          <label>Name</label>
          <input onChange={this.props.handleChange} name="name" placeholder='4' />
        </Form.Field>
        <Form.Field>
          <label># of Meals Available</label>
          <input onChange={this.props.handleChange} name="number" placeholder='Flour, Chicken, Corn, Beans, Lettuce, ...' />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input onChange={this.props.handleChange} name="description" placeholder='A lit ass burrito' />
        </Form.Field>
        <Button style={buttonCSS} type='submit' onClick={this.handleClick}>Add my meal!</Button>
      </Form>
    );
  }
}

export default AddMealForm;

