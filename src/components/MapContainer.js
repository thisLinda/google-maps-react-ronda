import React, { Component } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
	state = {
		showInfoWindow: false,
		activeMarker: {},
		animation: null,
		//open: false,
		//selectedVenue: {},
		//markers: locations
  };

	onMarkerClick = (props, marker, event) => {
		this.setState({
			//selectedVenue: props,
			activeMarker: marker,
			showInfoWindow: true
		});
	}


	componentDidMount() {
	}

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
				<Map
					google={this.props.google}
					zoom={16}
					style={style}
					onClick={() => {this.setState({activeMarker: {}, showInfoWindow: false})}}
					ref={"map"}
					initialCenter={{
						lat: 36.7421339,
						lng: -5.1665916
					}}
				>
					{this.props.places.map((placeName, index) => 
						<Marker 
							ref={placeName.name}
							name={placeName.name}
							key={index}
							onClick={this.onMarkerClick}
							animation={this.state.activeMarker.name === placeName.name ? this.props.google.maps.Animation.BOUNCE : null} 
							/>
					)}
				<InfoWindow
					marker={this.state.activeMarker}
					onClose={() => this.setState({showInfoWindow: false})}
					hide={this.state.showInfoWindow} >
						<div
							className="info-window-content">
							<h2 tabIndex="0" style={{textAlign:"center"}}>
								{this.state.activeMarker.name}
							</h2>
							{this.state.photo === "pic loading"} ?
								<h3 tabIndex="0" style={{textAlign:"center"}}>Pic Loading</h3> :
								this.state.photo === "error" ?
								<h3 tabIndex="0" style={{textAlign:"center"}}>Unable to load</h3>
								<div style={{textAlign: "center"}}>
									<img tabIndex="0" src={this.state.photo} alt={this.state.activeMarker.name + ' photo'} />
								</div>
							</div>
						</InfoWindow>
				</Map>
			);
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyCs7_LNGo46I99e7TTaxvzIMLe9WjtREsM"
})(MapContainer);
