import React, { Component } from "react";
import {
	Map,
	/*Marker, InfoWindow,*/ GoogleApiWrapper
} from "google-maps-react";

const mapStyles = {
	width: "100%",
	height: "100%"
};

export class MapContainer extends Component {
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
			/>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyCs7_LNGo46I99e7TTaxvzIMLe9WjtREsM"
})(MapContainer);
