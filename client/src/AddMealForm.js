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
    // we could call a function passed as a prop that will close the form once it's submitted
    // need to make request to backend api
    this.setState({clicked: true});
    // console.log("fuck me up");

    fetch('/api/newfood/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({author: "gabe", description: "Burrito", number: 4, name: "Gabe's Burrito" })
    })
    .then(res => res.text())
    .then((res) => {
      console.log(res);
      // if (res.success) {
      //   console.log(res.value);
      // } else {
      //   console.log("There was an issue posting the request");
      // }
    });
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
        <Button type='submit' onClick={this.handleClick}>Add my meal!</Button>
      </Form>
    );
  }
}

export default AddMealForm;

