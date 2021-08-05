//import { Typography, Box } from "@material-ui/core";
import { Map, GoogleApiWrapper } from "google-maps-react"

import React, { Component } from "react"

// type Props = {

// }
const mapStyles = {
  width: "100%",
  height: "600px",
  top: 0,
}

// export class MapContainer extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
//               {latitude: 47.359423, longitude: -122.021071},
//               {latitude: 47.2052192687988, longitude: -121.988426208496},
//               {latitude: 47.6307081, longitude: -122.1434325},
//               {latitude: 47.3084488, longitude: -122.2140121},
//               {latitude: 47.5524695, longitude: -122.0425407}]
//     }
//   }

//   displayMarkers = () => {
//     return this.state.stores.map((store, index) => {
//       return <Marker key={index} id={index} position={{
//        lat: store.latitude,
//        lng: store.longitude
//      }}
//      onClick={() => console.log("You clicked me!")} />
//     })
//   }
//   render() {
//     return (
//         <Map
//           google={this.props.google}
//           zoom={8}
//           style={mapStyles}
//           initialCenter={{ lat: 47.444, lng: -122.176}}
//         >
//           {this.displayMarkers()}
//         </Map>
//     );
//   }
// }

// const MapContainer: React.FC<Props> = ({google}) => {
//   return (
//     <Map
//     zoom={8}
//     style={mapStyles}
//     initialCenter={{ lat: 47.444, lng: -122.176}}
//   />

//   )
// }

export class MapContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCY8XkBGWiGvRGyH8Rwt9T_z0BToYPucQU",
})(MapContainer)
