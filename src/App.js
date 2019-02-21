import React, { Component } from "react";
import "./App.css";
//import MapContainer from "./components/MapContainer";
import locations from "./locations.json";
import SideBar from "./components/SideBar.js";

class App extends Component {
  state = {
    showInfoWindow: false,
    activeMarker: {},
    selectedVenue: {},
		//markers: locations,
		markers: []
	};
	
	componentDidMount() {
		this.setState({markers: locations})
	}

	render() {
		return (
			<main>
				<div>
					<SideBar places={this.state.markers} />
				</div>
			</main>
			/*<div className="App">
				<MapContainer
					markers={this.state.markers}
					showInfoWindow={this.state.showInfoWindow}
					onMarkerClick={this.state.onMarkerClick}
					activeMarker={this.state.activeMarker}
					selectedVenue={this.state.selectedVenue}
				/>
			</div>*/
		);
	}
}

export default App;
