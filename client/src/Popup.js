import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const buttonAction = {
  background: "#0D47A1",
  color: "white",
}

const modal = {

}

export default class ModalExampleControlled extends Component {
  state = { modalOpen: false }

  handleOpen = () => {
    this.setState({ modalOpen: true })
    this.delayClose()
  }

  delayClose = () => {
    setTimeout(this.handleClose, 4000)
  }

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      
      <Modal style={modal}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size='small'
   
      >
      <Modal.Header>Your meal is confirmed!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>You should get an email for further steps.</p>
          <p>All you need to do now is stay hungry until your delicious meal.</p>
        </Modal.Description>
      </Modal.Content>
 
      {/*   <Modal.Actions>
          <Button style={buttonAction} onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions> */}
      </Modal>
    )
  }
}