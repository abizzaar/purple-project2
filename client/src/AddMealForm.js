import React, { Component } from 'react';
import { Button, Form} from 'semantic-ui-react'

class AddMealForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({clicked: true});
    console.log(this.state.clicked);
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Name of Meal</label>
          <input placeholder='Burritos!' />
        </Form.Field>
        <Form.Field>
          <label># of Meals Available</label>
          <input placeholder='4' />
        </Form.Field>
        <Form.Field>
          <label>Ingredients</label>
          <input placeholder='Flour, Chicken, Corn, Beans, Lettuce, ...' />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input placeholder='A lit ass burrito' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }
}

export default AddMealForm;

