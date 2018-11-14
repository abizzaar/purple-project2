import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Nav from './Nav.js';

class GMap extends Component {
  constructor() {
    super();
    this.state = {
      userlocation: { lat: 42.058631, lng: -87.675635 },
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };
  render() {
    return (
      <div>
        <Nav />
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={this.state.userlocation}
          onClick={this.onMapClicked}
          //visible={this.state.mapvisibility}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={"Current location"}
            position={{ lat: 42.058631, lng: -87.675635 }}
          />
          <Marker
            onClick={this.onMarkerClick}
            name={"Current location22"}
            position={{ lat: 42.05, lng: -87.67 }}
          />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCSrslYFVpdzEkb1FMefL5Q8EYIauaMiIU"
})(GMap);
