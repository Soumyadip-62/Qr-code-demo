import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

class Demo1 extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "React",
      YOUR_LATITUDE: "",
      YOUR_LONGITUDE : "",
    };
  }

  componentDidMount(){
    this.setState({
      YOUR_LATITUDE:this.props.lat,
      YOUR_LONGITUDE:this.props.long
    })
  }

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: this.state.YOUR_LATITUDE,
            lng: this.state.YOUR_LONGITUDE,
          }}
        >
          <Marker onClick={this.onMarkerClick} name={"You Are Here"} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCJ93bv8-XgalSZ8Pu28r472Lq0ZwCHtuY",
})(Demo1);
