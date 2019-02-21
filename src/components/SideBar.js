import React, { Component } from "react";
import locations from "../locations.json";
import MapContainer from "./MapContainer.js";

class SideBar extends Component {
  state = {
    query: '',
    selectedVenues: [],
  }

  updateQuery = (query) => {
    this.setState({ query: query }, () => {
      this.searchVenue(this.state.query);
    });
  }

  searchVenue = (query) => {
    if (!query) {
      this.setState({ selectedVenues: locations})
    }
    else {
      const filteredVenues = this.props.markers.filter((marker) => locations.name.toLowerCase().includes(query.toLowerCase()));
      this.setState({ selectedVenues: filteredVenues });
    }
  }

  setActiveMarker = (marker) => {
    document.querySelector(`[markerName="${marker}"]`).click();
  }

  componentDidMount() {
    this.setState({selectedVenues: locations})
  }

  render() {
    return (
      <div id="main">
        <div className="sidebar">
          <h2 className="sidebar-title">Recommended!</h2>
          <p className="source">Google Maps API</p>
          <input className="filter" 
          onChange = {(event) => this.updateQuery(event.target.value)}>
          </input>
            <ul className="IDK">
              {this.state.selectedVenues.map((place, id) =>
              <li
                className="venuelocation"
                key={place.id}
                role="button">
                {place.name}
              </li>
              )}
            </ul>
        </div>
          <div id="map"><MapContainer markers={this.state.selectedVenues} setActiveMarker={this.setActiveMarker}/></div>
      </div>
    )
  }
}

export default SideBar