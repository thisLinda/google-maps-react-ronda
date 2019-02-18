import React, { Component } from "react";
import "./App.css";
import MapContainer from "./components/MapContainer";

class App extends Component {
	render() {
		return (
			<div className="App">
				<MapContainer
					/*markers={this.state.markers}
					showInfoWindow={this.state.showInfoWindow}*/
				/>
			</div>
		);
	}
}

export default App;
