import React, { Component } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import locations from "../locations.json";

const mapStyle = {
	width: "100%",
	height: "100%"
};

export class MapContainer extends Component {
	state = {
		showInfoWindow: false,
		activeMarker: {},
    selectedVenue: {},
    markers: locations,
  }

	onMarkerClick = (props, marker, event) =>
		this.setState({
			selectedVenue: props,
			activeMarker: marker,
			showInfoWindow: true
		});

	onClose = props => {
		if (this.state.showInfoWindow) {
			this.setState({
				showInfoWindow: false,
				activeMarker: null
			});
		}
	};

	render() {
		return (
      <div className="mapcontainer">
        <Map
          google={this.props.google}
          zoom={16}
          style={mapStyle}
          initialCenter={{
            lat: 36.7421339,
            lng: -5.1665916
          }}
        >
          <Marker 
            onClick={this.props.onMarkerClick}
            name={this.state.marker} />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedVenue.name}</h4>
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
