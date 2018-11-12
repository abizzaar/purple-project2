import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class GMap extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div>A MAP IS AN ABSTRACTION OF THE WORLD. NOT THE WORLD ITSELF.</div>
        <Map
          google={this.props.google}
          zoom={14}
          //visible={this.state.mapvisibility}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCSrslYFVpdzEkb1FMefL5Q8EYIauaMiIU"
})(GMap);
