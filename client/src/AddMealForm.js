import React, { Component } from 'react';
import { Button, Form, Checkbox} from 'semantic-ui-react'
import { Z_BLOCK } from 'zlib';

const buttonAction = {
  background: "#0D47A1",
  color: "white",
  display: "block",
  margin: "0.8rem auto"
}

class AddMealForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      useCurrentLocation: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.checkedCurrentLocation = this.checkedCurrentLocation.bind(this);
  }

  handleClick(e) {
    // we could call a function passed as a prop that will close the form once it's submitted
    // need to make request to backend api
    this.props.postToServer(e);
    console.log(this.state.useCurrentLocation);
  }

  checkedCurrentLocation() {
    if (this.state.useCurrentLocation) {
      this.setState({ useCurrentLocation: false });
    } else {
      this.setState({ useCurrentLocation: true });
      this.getMyLocation();
    }
  }

  getMyLocation() {
    const location = window.navigator && window.navigator.geolocation
    if (location) {
      location.getCurrentPosition((position) => {
      var locationStr="";
      locationStr=locationStr.concat(position.coords.latitude,",",position.coords.longitude);
      this.setState({location: locationStr});
      console.log(locationStr);
        //this.setState({
        //  latitude: position.coords.latitude,
        //  longitude: position.coords.longitude,
        //})
      }, (error) => {
        this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
      })
    }

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
        <Form.Field>
          <label>Location</label>
          <Button type='submit' onClick={this.checkedCurrentLocation}>Use my current location</Button>
          <div className={"m-1"}>
            <input onChange={this.props.handleChange} name="location"/>
          </div>
        </Form.Field>
        <Button style={buttonAction} type='submit' onClick={this.handleClick}>I PROMISE TO COOK</Button>
      </Form>
    );
  }
}

export default AddMealForm;

