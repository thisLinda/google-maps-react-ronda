import React, { Component } from "react";
import MapContainer from "./MapContainer.js";

class SideBar extends Component {
  state = { 
    places: [],
    query: "",
    searchVenues: [],
    menuOpen: false,
    selectedPlaces: []
  }

  updateQuery = (query) => { //dr
    this.setState(
      { query },
      () => this.searchVenues(query)
    );
  }

  handleChange = query => {
    this.setState(
      { query },
      () => this.props.updateQuery(query)
    );
  };

  searchVenue = (query) => { //dr
    const filteredPlaces = this.props.places.filter(venue =>
      venue.name.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({ selectedPlaces: filteredPlaces });
  };

  showMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  setActiveMarker = (marker) => {
    document.querySelector(`[markerName="${marker}"]`).click();
  }

  componentWillMount() {
    this.setState({ allVenues: this.props.activeMarkers })
  }

  render() {
    return (
      <div id="sidebar-content">
        <div className="sidebar">
          <h2 className="sidebar-title">Recommended!</h2>
          <input aria-label="Search Filter" className="filter" type="text"
            placeholder="search by name"
            tabIndex="0"
            onChange = {(event) => this.updateQuery(event.target.value)}>
          </input>
            <ul className="venueslist">
              {this.state.selectedPlaces.map((venue, id) =>
              <li
                className="location"
                key={venue.id}
                role="button">
                {venue.name}
              </li>
            )}
          </ul>
          <div id="map">
            <MapContainer places={this.state.selectedPlaces} setActiveMarker={this.setActiveMarker} />
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar