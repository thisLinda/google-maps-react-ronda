import React, { Component } from "react";
import "./App.css";
//import MapContainer from "./components/MapContainer";
//import locations from "./locations.json";
import SideBar from "./components/SideBar.js";

class App extends Component {
  /*state = {
    showInfoWindow: false,
    activeMarker: {},
    selectedVenue: {},
		//markers: locations,
		markers: []
	};*/
	state = {
		places: [
		{
			"name": "Bar El Convento",
			"street": "Calle San Francisco, 140",
			"city": "Ronda",
			"country": "Spain",
			"zip": "29400",
			"url": "https://www.facebook.com/Bar-El-Convento-204805246316063",
			"pos": {
				"lat": 36.729528,
				"lng": -5.165230
			}
		},
		{
			"name": "De Locos Tapas",
			"street": "Calle Espiritu Santo, 43-9",
			"city": "Ronda",
			"country": "Spain",
			"zip": "29400",
			"url": "http://de-locos-tapas.com/",
			"pos": {
				"lat": 36.734825,
				"lng": -5.164403
			}
		},
		{
			"name": "ELPERE Tapas",
			"street": "Calle Infantes, 42",
			"city": "Ronda",
			"country": "Spain",
			"zip": "29400",
			"url": "https://www.facebook.com/elperetapas/",
			"pos": {
				"lat": 36.745741,
				"lng": -5.162941
			}
		},
		{
			"name": "El Porton",
			"street": "Calle Pedro Romero, 7",
			"city": "Ronda",
			"country": "Spain",
			"zip": "29400",
			"url": "no website",
			"pos": {
				"lat": 36.743123,
				"lng": -5.166272
			}
		},
		{
			"name": "El Rincon de la Manzanilla",
			"street": "Calle de los Remedios, 13",
			"city": "Ronda",
			"country": "Spain",
			"zip": "29400",
			"url": "",
			"pos": {
				"lat": 36.742616,
				"lng": -5.165103
			}
		},
		{
			"name": "Entre Vinos",
			"street": "Calle Pozzo, 1",
			"city": "Ronda",
			"country": "Spain",
			"zip": "29400",
			"url": "",
			"pos": {
				"lat": 36.744626,
				"lng": -5.16700
			}
		},
		{
			"name": "La Taberna",
			"street": "Plaza del Socorro, 8",
			"city": "Ronda",
			"country": "Spain",
			"zip": "29400",
			"url": "https://www.facebook.com/pages/La-Taberna/405824039495045",
			"pos": {
				"lat": 36.743340,
				"lng": -5.166078
			}
		},
		{
			"name": "Taberna El Almacen",
			"street": "Calle Virgen de los Remedios, 7",
			"city": "Ronda",
			"country": "Spain",
			"zip": "29400",
			"url": "http://tabernaelalmacen.com/",
			"pos": {
				"lat": 36.742786,
				"lng": -5.165282
			}
		},
		{
			"name": "Toro Tapas",
			"street": "Carrera Espinel, 7",
			"city": "Ronda",
			"country": "Spain",
			"zip": "29400",
			"url": "https://www.facebook.com/pg/torotapasronda/reviews/",
			"pos": {
				"lat": 36.742597,
				"lng": -5.165970
			}
		},
		{
			"name": "Tropicana",
			"street": "Avenida Malaga",
			"city": "Ronda",
			"country": "Spain",
			"zip": "29400",
			"url": "http://www.tabernatropicana.com/",
			"pos": {
				"lat": 36.748555,
				"lng": -5.155091
			}}
		]
	}

	/*componentDidMount() {
		this.setState({markers: locations})
	}*/

	render() {
		return (
			/*<main>
				<div>*/
					<SideBar activeMarkers={this.state.places} />
			/*	</div>
			</main>*/
			/*<div className="App">
				<MapContainer
					markers={this.state.markers}
					showInfoWindow={this.state.showInfoWindow}
					onMarkerClick={this.state.onMarkerClick}
					activeMarker={this.state.activeMarker}
					selectedVenue={this.state.selectedVenue}
				/>
			</div>*/
		)
	}
}

export default App;
