import React, { Component } from "react";
import MapContainer from "./MapContainer.js";
import { settings } from "cluster";

class SideBar extends Component {
  state = { //dr
    places: [],
    query: "",
    searchVenues: [],
    menuOpen: false,
    filteredPlace: "" //cp
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
    const updatedPlaces = this.state.places.filter(venue =>
      venue.name.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({ filteredPlaces: updatedPlaces });
  };

  showMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  componentWillMount() {
    this.setState({ allVenues: this.props.activeMarkers })
  }

  render() {
    return (
      <div className="sidebar">
        <h2 className="sidebar-title">Recommended!</h2>
        {this.state.menuOpen && (
          //<Settings
            <locations={this.state.searchVenues}
            query={this.state.query}
            updateQuery={this.updateQuery}
          />
        )}
      </div>
    );
  }
}

export default SideBar