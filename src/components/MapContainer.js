import React, { Component } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper }
from "google-maps-react";
import API from "./API.js";
import Modal from "react-responsive-modal";

class MapContainer extends Component {
	state = {
		showInfoWindow: false,
		activeMarker: {},
		animation: null,
		mapError: false,
		//selectedPlace: {
		//	name: "",
		//	location: ""
		}
		//open: false,
		//lat: 36.7421339,
		//lon: -5.1665916,
		//zoom: 14,
		//selectedVenue: {},
		//markers: locations

	onMarkerClick = (props, marker, event) => {
		this.setState({
			selectedVenue: props,
			activeMarker: marker,
			showInfoWindow: true,
			//open: true,
		});
		this.getApiData(props.position.lat, props.position.lng, props.title)
	}

	onMapClick = (props) => {
		if (this.state.showInfoWindow) {
			this.setState({
				showInfoWindow: false,
				activeMarker: { markerName: 'none' }
			})
		}
	};

	onOpenModal = () => {
		this.setState({
			open: true
		});
	};

	onCloseModal = () => {
		this.setState({
			open: false,
			activeMarker: { markerName: 'none' }
		});
	};

	onClose = props => {
		if (this.state.showInfoWindow) {
			this.setState({
				showInfoWindow: false,
				activeMarker: null
			});
		}
	};

	displayVenueData = (selectedVenue, marker) => {
		console.log(selectedVenue);
		this.setState({
			showInfoWindow: true,
			activeMarker: marker,
			selectedPlace: selectedVenue
		});
	}

	getApiData = (lat, lng, name) => {
		return API.getSearchResult(lat, lng, name).then(venueId => {
			if (venueId === 'error')
				this.setState({
					likes: 'Error loading Content',
					photo: 'error'
				});
			else {
				API.getDetails(venueId).then(response => {
					if (response === 'error' || response.meta.code !== 200)
						this.setState({
							likes: 'Error loading content',
							photo: 'error'
						});
					else {
						if ('bestPhoto' in response.response.venue)
							this.setState({ photo: response.response.venue.bestPhoto.prefix + '150' + response.response.venue.bestPhoto.suffix });
						else
							this.setState({ photo: 'error' });
					}
				})
			}
		})
	}

	componentDidMount() {
		window.gm_authFailure = () => {
			this.setState({ mapError: true });
		}
	}

	render() {
		const style = {
			height: '100vh',
			width: '100vw'
		};

		const { open } = this.state;

		return (
			<div id="mapcontainer-content">
				<div>
					<Modal open={open} onClose={this.onClose} center>
					</Modal>
				</div>
				{this.state.mapError ? (<div className="map-error"><p>Map load error!</p></div>) :
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
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyCs7_LNGo46I99e7TTaxvzIMLe9WjtREsM"
})(MapContainer);
