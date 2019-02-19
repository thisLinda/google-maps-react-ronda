import React, { Component } from "react";
import "./App.css";
import MapContainer from "./components/MapContainer";
//import locations from "./locations";

class App extends Component {
	render() {
		return (
			<div className="App">
				<MapContainer
					markers={this.state.markers}
					showInfoWindow={this.state.showInfoWindow}
					onMarkerClick={this.state.onMarkerClick}
					activeMarker={this.state.activeMarker}
					selectedVenue={this.state.selectedVenue}
				/>
			</div>
		);
	}
}

export default App;
