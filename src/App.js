import React, { Component } from "react";
import "./App.css";
//import MapContainer from "./components/MapContainer";
import locations from "./locations";
import SideBar from "./components/SideBar.js";

class App extends Component {
  state = {
    //showInfoWindow: false,
    //activeMarker: {},
    //selectedVenue: {},
		//markers: locations,
		places: []
	};
	
	componentDidMount() {
		this.setState({places: locations})
	}

	render() {
		return (
			<main>
				<div>
					<SideBar places={this.state.places} />
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
