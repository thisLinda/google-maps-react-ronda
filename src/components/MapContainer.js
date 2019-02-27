import React, { Component } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import Modal from "react-responsive-modal";
import * as API from "./API";

class MapContainer extends Component {
  state = {
    showInfoWindow: false,
    activeMarker: {},
    animation: null,
    photo: "",
    open: false
  };

  onMarkerClick = (props, marker, event) => {
    this.setState({
      selectedVenue: props,
      activeMarker: marker,
      showInfoWindow: true
    });
    this.getApiData(props.position.lat, props.position.lng, props.name);
  };

  onMapClick = props => {
    if (this.state.showInfoWindow) {
      this.setState({
        showInfoWindow: false,
        activeMarker: { markerName: "none" }
      });
    }
  };

  onOpenModal = () => {
    this.setState({
      open: true
    });
  };

  onCloseModal = () => {
    this.setState({
      open: false,
      activeMarker: { markerName: "none" }
    });
  };

  onClose = props => {
    if (this.state.showInfoWindow) {
      this.setState({
        showInfoWindow: false,
        activeMarker: null
      });
    }
  };

  displayVenueData = (selectedVenue, marker) => {
    // console.log(selectedVenue);
    this.setState({
      showInfoWindow: true,
      activeMarker: marker,
      selectedPlace: selectedVenue
    });
  };

  getApiData = (lat, lng, name) => {
    return API.getSearchResult(lat, lng, name).then(venueId => {
      if (venueId === "error")
        this.setState({
          photo: "null"
        });
      else {
        API.getDetails(venueId).then(response => {
          if (response === "error" || response.meta.code !== 200) {
            this.setState({
              photo: "null"
            });
          } else {
            if ("bestPhoto" in response.response.venue)
              this.setState({
                photo:
                  response.response.venue.bestPhoto.prefix +
                  "150" +
                  response.response.venue.bestPhoto.suffix
              });
            else this.setState({ photo: "null" });
          }
        });
      }
    });
  };

  componentDidMount() {
    window.gm_authFailure = () => {
      this.setState({ mapError: true });
    };
  }

  render() {
    const style = {
      height: "100vh",
      width: "100vw"
    };

    const { open, photo } = this.state;
    return (
      <div id="mapcontainer-content">
        <div>
          <Modal open={open} onClose={this.onClose} center />
        </div>
        <Map
          google={this.props.google}
          zoom={15}
          style={style}
          onClick={() => {
            this.setState({ activeMarker: {}, showInfoWindow: false });
          }}
          ref={"map"}
          initialCenter={{
            lat: 36.7421339,
            lng: -5.1665916
          }}
        >
          {this.props.places.map(placeName => {
            return (
              <Marker
                ref={placeName.name}
                name={placeName.name}
                key={placeName.name}
                onClick={this.onMarkerClick}
                position={placeName.pos}
                title={placeName.name}
                animation = {this.state.activeMarker.length === 1 ? this.props.google.maps.Animation.BOUNCE : this.props.google.maps.Animation.DROP}
              />
            );
          })}
          <InfoWindow
            marker={this.state.activeMarker}
            onClose={() => this.setState({ showInfoWindow: false })}
            visible={this.state.showInfoWindow}
          >
            <div className="info-window-content">
              <h2 tabIndex="0" style={{ textAlign: "center" }}>
                {this.state.activeMarker.name}
              </h2>
              {photo && <img src={photo} alt="" />}
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCs7_LNGo46I99e7TTaxvzIMLe9WjtREsM"
})(MapContainer);
