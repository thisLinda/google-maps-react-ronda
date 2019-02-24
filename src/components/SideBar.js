import React, { Component } from "react";
//import locations from "../locations.json";
import MapContainer from "./MapContainer.js";
import { settings } from "cluster";

class SideBar extends Component {
  /*state = {
    query: '',
    //allPlaces: [],
    filteredPlace: ''
  }*/
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

  searchVenue = (query) => { //dr
    const updatedPlaces = this.state.places.filter(venue =>
      venue.name.toLowerCase().includes(query.toLowerCase())
      );
      this.setState({filteredPlaces: updatedPlaces });
  };

  /*updateQuery = (query) => {
    this.setState({ query: query, listItemSelected: '' }) 
    this.search(query);
  }

  searchVenue = (query) => {
    if (query.length === 0) {
      this.setState({ allPlaces: this.props.activeMarkers})
    }
    else {
      this.setState.({allPlaces: this.props.activeMarkers.filter(venue => venue.title.toLowerCase().includes(query.trim()toLowerCase()))});
  }
*/
  /*setActiveMarker = (marker) => {
    document.querySelector(`[markerName="${marker}"]`).click();
  }*/
  showMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  componentWillMount() {
    this.setState({allVenues: this.props.activeMarkers})
  }

  render() {
    return (
      //<div id="main">
        <div className="sidebar">
          <h2 className="sidebar-title">Recommended!</h2>
          {/*<input className="filter" 
            type="text"
            id="filter"
            onChange = {(event) => this.updateQuery(event.target.value)}
            value={this.state.query}
            className='search'
          </input>*/}
        {this.state.menuOpen && (
          <Settings
            locations={this.state.searchVenues}
            query={this.state.query}
            showMenu={this.showMenu}
          />
        )}
        </div>
        //enter error boundary
        {/*{this.state.allPlaces.map((place, index) => (
          <div
            className="venuelocation"
            key={index}
            onClick={() => this.setState({ filteredPlace: venue.title })}
          </div>
        ))
      </div>}*/
          <Mapcontainer
            allPlaces={this.state.allPlaces}
            venueSelected={this.state.filteredPlace}
            selectVenue={(venue) => { this.setState({ listItemSelected: filteredPlace }) }}
          />
            </div >
          </div >
        //</div >
      )
    }
  }
}

export default SideBar