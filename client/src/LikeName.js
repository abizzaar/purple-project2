import React, {Component} from 'react';
import { Button, Header, Icon, Modal, Form, Card } from 'semantic-ui-react'
import Popup from './Popup.js'

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

const form = {
  margin: "0 1rem"
}



class LikeName extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOpen: false,
      liker: '',
      modalOpen: false 
    }
    this.popupRef = React.createRef();

    this.likerInput = React.createRef();

    this.buttonClicked = this.buttonClicked.bind(this);
    this.confirmButtonClicked = this.confirmButtonClicked.bind(this);
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  buttonClicked(id) {
    this.handleClick();
  }

  handleClick() {
    console.log("switch");
    if (this.state.isOpen) {
      this.setState({isOpen: false});
    }
    else this.setState({isOpen: true});
  }

  confirmButtonClicked() {
    this.handleClick();
    this.props.like(this.likerInput.current.value, this.props.post._id);
    this.popupRef.current.handleOpen();
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
              <input ref={this.likerInput} onChange={this.props.handleChange} name="likerName"/>
            </Form.Field>
          </Form>
          
          <Button style={buttonAction} onClick={this.confirmButtonClicked} >I CONFIRM</Button>
        </div>;
    }

    return (
      <div>
        <button 
            onClick={() => {this.buttonClicked(this.props.post._id)}}
            style={(this.state.isOpen ? buttonCss: buttonAction)} 
            className="ui button">{(this.state.isOpen ? "NEVER MIND": "I WANT THIS")}
        </button>
        {container}
        <Popup ref={this.popupRef}/>
      </div>
    );
  }
}

export default LikeName;