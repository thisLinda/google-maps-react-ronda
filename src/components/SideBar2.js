import React, { Component } from "react";
import MapContainer from "./MapContainer.js";

class SideBar extends Component {
  state = {
    places: [],
    query: "",
    searchVenues: [],
    menuOpen: false,
    selectedPlaces: this.props.activeMarkers
  };

  updateQuery = query => {
    this.setState({ query: query }, () => {
      this.searchVenues(this.state.query);
    });
  };

  /*
  handleChange = (query) => {
    this.setState(
      { query: query },
      () => {this.updateQuery(this.state.query)
      });
  };
*/

  searchVenues = query => {
    const selectedPlaces = this.state.places.filter(venue =>
      venue.name.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({ selectedPlaces });
  };

  showMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  setActiveMarker = marker => {
    document.querySelector(`[markerName="${marker}"]`).click();
  };

  componentWillMount() {
    this.setState({ places: this.props.activeMarkers });
  }

  render() {
    return (
      <div id="sidebar-content">
        <div className="sidebar">
          <h2 className="sidebar-title">Recommended!</h2>
          <input
            aria-label="Search Filter"
            className="filter"
            type="text"
            placeholder="search by name"
            tabIndex="0"
            onChange={event => this.updateQuery(event.target.value)}
          />
          <ul className="venueslist">
            {this.state.selectedPlaces.map((venue, id) => (
              <li
                className="location"
                key={venue.name}
                role="button"
              >
                {venue.name}
              </li>
            ))}
          </ul>
          <div id="map">
            <MapContainer
              places={this.state.selectedPlaces}
              setActiveMarker={this.setActiveMarker}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
