import React, { Component } from 'react';
import { Container, Button, Checkbox, Form } from 'semantic-ui-react';
import Nav from './Nav.js'

class SignIn extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <Nav />
        <Container>
          <Form>
            <Form.Field>
              <label>User Name</label>
              <input placeholder='johnnyappleseed' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder='Password#123' />
            </Form.Field>
            <Button type='login'>Login</Button>
            <Button type='newuser'>New User</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default SignIn;
