import React, { Component } from "react";
import { Map, Marker, /*InfoWindow,*/ GoogleApiWrapper } from "google-maps-react";
//import locations from "../locations.json";

export class MapContainer extends Component {
	//code session with Danny J. Smith
	/*handleClick = (venue) => {
		const { marker, InfoWindow } = venue;

		this.state.venues.forEach(({ marker: m, InfoWindow: i }) => {
			if (m === marker) {
				marker.setAnimation(window.google.maps.Animation.BOUNCE);
				InfoWindow.open(marker.map, marker);

				window.google.maps.event.addListener(InfoWindow, 'closeclick', function () {
					marker.setAnimation(null);
				});
			} else {
				m.setAnimation('none');
				i.close();
			}
		});
	};*/

	/*state = {
		showInfoWindow: false,
		activeMarker: {},
		selectedVenue: {},
		markers: locations
  };*/

	/*componentDidMount() {
		window.gm_authFailure = () => {
			this.setState({ mapError: true });
		};
	}
*/
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
		const style = {
    height: '100vh',
    width: '100vw'
  };

		return (
			<div className="mapcontainer">
				<Map
					google={this.props.google}
					zoom={16}
					style={style}
					initialCenter={{
						lat: 36.7421339,
						lng: -5.1665916
					}}
				>
					{this.props.markers.map((markers) => 
						<Marker 
							onClick={this.onMarkerClick} 
							name={this.props.markers} />
					)}
						{/*<InfoWindow
							marker={this.props.activeMarker}
							visible={this.props.showInfoWindow}
							onClose={this.onClose}
						>
							<div>
								<h4>{this.props.selectedVenue.name}</h4>
							</div>
						//</Map></InfoWindow>*/}
				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyCs7_LNGo46I99e7TTaxvzIMLe9WjtREsM"
})(MapContainer);
