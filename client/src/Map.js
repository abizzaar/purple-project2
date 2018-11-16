import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Nav from "./Nav.js";

class GMap extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      userlocation: { lat: 42.058631, lng: -87.675635 },
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  componentDidMount() {
    this.loadPostsFromServer();
    //const { author, text, name, description, number, updateId } = this.state;
    if (!this.pollInterval) {
      this.pollInterval = setInterval(this.loadPostsFromServer, 2000);
    }
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

  loadPostsFromServer = () => {
    // fetch returns a promise. If you are not familiar with promises, see
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    fetch("/api/posts/")
      .then(data => data.json())
      .then(res => {
        if (!res.success) this.setState({ error: res.error });
        else this.setState({ data: res.data });
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
          style={{ width: "100%", height: "100%" }}
          //visible={this.state.mapvisibility}
        >
          {this.state.data.map(post => (
            <Marker
              onClick={this.onMarkerClick}
              name={"Meal: " + post.name + ", Chef: " + post.author}
              position={{ lat: post.lat, lng: post.long }}
            />
          ))}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
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

/*
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
*/
