import { Container, Typography, Box } from "@material-ui/core";
import { Map, GoogleApiWrapper } from "google-maps-react"
import { makeStyles } from "@material-ui/core/styles"
import React, { Component } from "react"

// type Props = {

// }
const mapStyles = {
  width: "100%",
  height: "500px",
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

// export class MapContainer extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <Container>
//       <Map
//         google={this.props.google}
//         zoom={8}
//         style={mapStyles}
//         initialCenter={{ lat: 47.444, lng: -122.176 }}
//       />
//       </Container>
//     )
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCY8XkBGWiGvRGyH8Rwt9T_z0BToYPucQU",
// })(MapContainer)

// type Props = {

// }
// const Location: React.FC<Props> = () => {
//   return (
//      <Map
//      apiKey
//      zoom={8}
//      google={this.window.google}
//      style={mapStyles}
//      initialCenter={{ lat: 47.444, lng: -122.176}}
//    />
//   )
// }

// export default Location


import GoogleMapReact from "google-map-react";
//import Json Data
//import data from "./data.json";

const useStyles = makeStyles(() => ({
  title: {
    fontSize: "2rem",
    lineHeight: "5rem",
    color: "white",
    margin: "0 auto",
    fontWeight: "900",
  },

  description: {
    fontSize: "1.3rem",
    lineHeight: "1.7rem",
    color: "white",
    margin: "0 auto",
  },

  section: {
    padding: "8rem 0",
    textAlign: "center",
    paddingLeft: "20%",
    paddingRight: "20%",
  },
wrapper: {
  position: "relative",
},navi: {
  backgroundColor: "red",
  height: 40,
},infoi: {
  position: "absolute",
  top: 0,
  left: 0,
  height: 20,
  padding: 10 ,
}

}))


const data = [{
  "id": "ID of FIrst Place",
  "lat":40.756795,
  "lng":-73.954298
},
{
  "id": "ID of Second Place",
  "lat":40.753167,
  "lng":-73.968120
}]

type Props={
  latitude:any,
  longitude:any,
  page:any
}

const GoogleMaps: React.FC<Props> =  ({ latitude, longitude,page }) => {
  const ModelsMap = (map, maps) => {
    //instantiate array that will hold your Json Data
    let dataArray = [];
    //push your Json Data in the array
    {
      data.map((markerJson) => dataArray.push(markerJson));
    }

    //Loop through the dataArray to create a marker per data using the coordinates in the json
    for (let i = 0; i < dataArray.length; i++) {
      let marker = new maps.Marker({
        position: { lat: dataArray[i].lat, lng: dataArray[i].lng },
        map,
        label: dataArray[i].id,
      });
    }
  };
  console.log("prueba");
  const classes = useStyles()
  return (
    <div  className={classes.wrapper} >
    {/* <div  className={classes.navi} ></div> */}
    <div className={classes.navi} style={{ height: "400px", width: "100%" }}>
       <GoogleMapReact
         bootstrapURLKeys={{ key: "AIzaSyCY8XkBGWiGvRGyH8Rwt9T_z0BToYPucQU" }}
         defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
         defaultZoom={10}
         yesIWantToUseGoogleMapApiInternals
         onGoogleApiLoaded={({ map, maps }) => ModelsMap(map, maps)}
       ></GoogleMapReact>
     </div>
    <div  className={classes.infoi}>
      
      <Box  style={{ textAlign: "left" }}>
          <Typography variant="h4"
          >
            {page.EventDay} 
            {page.Location}
          </Typography>
        </Box>
    </div>
  </div>
     
  );
};

export default GoogleMaps;
