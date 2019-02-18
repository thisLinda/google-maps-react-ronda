import React, { Component } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
	width: "100%",
	height: "100%"
};

export class MapContainer extends Component {
	state = {
		showInfoWindow: false,
		activeMarker: {},
		selectedPlace: {}
	};

	onMarkerClick = (props, marker, event) =>
		this.setState({
			selectedPlace: props,
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
			<Map
				google={this.props.google}
				zoom={16}
				style={mapStyles}
				initialCenter={{
					lat: 36.7421339,
					lng: -5.1665916
				}}
			>
				<Marker onClick={this.props.onMarkerClick} />
				<InfoWindow
					marker={this.state.activeMarker}
					visible={this.state.showInfoWindow}
					onClose={this.onClose}
				>
					<div>
						<h4>{this.state.selectedPlace.name}</h4>
					</div>
				</InfoWindow>
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyCs7_LNGo46I99e7TTaxvzIMLe9WjtREsM"
})(MapContainer);
