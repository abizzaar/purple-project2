import React, { Component } from 'react';
import { Button, Form, Checkbox} from 'semantic-ui-react'
import { Z_BLOCK } from 'zlib';
import Geocode from "react-geocode";

const buttonAction = {
  background: "#0D47A1",
  color: "white",
  display: "block",
  margin: "0.8rem auto"
}

 // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    Geocode.setApiKey("AIzaSyCSrslYFVpdzEkb1FMefL5Q8EYIauaMiIU");
    // Enable or disable logs. Its optional.
    Geocode.enableDebug();

// Get address from latidude & longitude.
  // Geocode.fromLatLng("48.8583701", "2.2922926").then(
  //   response => {
  //     const address = response.results[0].formatted_address;
  //     console.log(address);
  //   },
  //   error => {
  //     console.error(error);
  //   }
  // );

  // // Get latidude & longitude from address.
  // Geocode.fromAddress("Eiffel Tower").then(
  //   response => {
  //     const { lat, lng } = response.results[0].geometry.location;
  //     console.log(lat, lng);
  //   },
  //   error => {
  //     console.error(error);
  //   }
  // );

class AddMealForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: '',
      lat: 0,
      long: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.clickedCurrentLocation = this.clickedCurrentLocation.bind(this);

  }

  handleClick(e) {
    // we could call a function passed as a prop that will close the form once it's submitted
    // need to make request to backend api
    this.props.postToServer(e);
  }

  clickedCurrentLocation() {
    const location = window.navigator && window.navigator.geolocation
    if (location) {
      location.getCurrentPosition((position) => {
        var locationStr="";
        locationStr=locationStr.concat(position.coords.latitude,",",position.coords.longitude);
        this.setState({lat: position.coords.latitude, long: position.coords.longitude});
        this.setState({location: locationStr});
        Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
          response => {
            const address = response.results[0].formatted_address;
            console.log(address);
            // This is where we show to the user
          }, error => {
            console.error(error);
          }
        );
      }, (error) => {
          this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' });
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
          <label>Choose from your uploaded images</label>
          <radio onChange={this.props.handleChange} name="uploadedImages" />
        </Form.Field>
        <Form.Field>
          <label>Location</label>
          <Button type='submit' onClick={this.clickedCurrentLocation}>Use my current location</Button>
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
