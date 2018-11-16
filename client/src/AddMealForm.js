import React, { Component } from 'react';
import { Button, Form, Checkbox, Loader} from 'semantic-ui-react'
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

class AddMealForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentLocation: '',
      location: '',
      author: '',
      name: '',
      description: '',
      number: '',
      long: 0,
      lat: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.clickedCurrentLocation = this.clickedCurrentLocation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    // we could call a function passed as a prop that will close the form once it's submitted
    // need to make request to backend api
    Geocode.fromAddress(this.state.location).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({
          long: lng,
          lat: lat
        }, () => {
          this.props.updateValues(this.state);
        });
      },
      error => {
        console.error(error);
      }
    );
  }

  clickedCurrentLocation() {
    if (this.state.currentLocation !== '') {
      this.setState({ 
        location: this.state.currentLocation
      });
    } else {
      this.setState({ location: "... getting your current address!" });
      const location = window.navigator && window.navigator.geolocation
      if (location) {
        location.getCurrentPosition((position) => {
          Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
            response => {
              const address = response.results[0].formatted_address;
              this.setState({ location: address });
              this.setState({ currentLocation: address });
            }, error => {
              console.error(error);
            }
          );
        }, (error) => {
            this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' });
        })
      }
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // could use <Loader /> when we are waiting for the address

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Your name</label>
          <input onChange={this.handleChange} name="author"/>
        </Form.Field>
        <Form.Field>
          <label>Your great dish</label>
          <input onChange={this.handleChange} name="name"/>
        </Form.Field>
        <Form.Field>
          <label>For how many can you cook?</label>
          <input onChange={this.handleChange} name="number"/>
        </Form.Field>
        <Form.Field>
          <label>Describe your dish</label>
          <input onChange={this.handleChange} name="description" />
        </Form.Field>
        <Form.Field>
          <label>Location</label>
          <Button type='submit' onClick={this.clickedCurrentLocation}>Use my current location</Button>
          <div className={"m-1"}>
            <input onChange={this.handleChange} name="location" value={this.state.location}/>
          </div>
        </Form.Field>
        <Button style={buttonAction} type='submit' onClick={this.handleClick}>I PROMISE TO COOK</Button>
      </Form>
    );
  }
}

export default AddMealForm;
