import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react'

const buttonCss = {
  background: "rgba(0,0,0,0.7)",
  color: "white",
  display: "block",
  margin: "0.8rem auto"
}

const form = {
  margin: "0 1rem"
}



class LikeName extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {isOpen: false}
    this.buttonClicked = this.buttonClicked.bind(this);;
  }

  buttonClicked(id) {
    this.props.like(id);
    this.handleClick();
  }

  handleClick() {
    console.log("switch")
    if (this.state.isOpen) {
      this.setState({isOpen: false});
    }
    else this.setState({isOpen: true});
  }

  render() {
    const isOpen = this.state.isOpen;
    let container = null;
    if (isOpen) {
      container = 
        <div>
          <Form style={form}>
            <Form.Field>
              <label>Name</label>
              <input onChange={this.props.handleChange} name="likerName"/>
            </Form.Field>
          </Form>
          <Button style={buttonCss} onClick={this.handleClick} >I CONFIRM</Button>
        </div>;
    }

    return (
      <div>
        <button 
            onClick={() => {this.buttonClicked(this.props.post._id)}}
            style={buttonCss} class="ui button">{(this.state.isOpen ? "NEVER MIND": "I WANT THIS")}
        </button>
        {container}
      </div>
    );
  }
}

export default LikeName;