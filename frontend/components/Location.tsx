import { Container, Typography, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import React, { Component } from "react"
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GoogleMapReact from "google-map-react";

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
  height: 40,
},infoi: {
  position: "absolute",
  top: 0,
  left: 0,
  height: 20,
  padding: 10 ,

},
squareLocation:{
  background: "white",
  padding: "2rem 3rem",
  borderRadius: 5,
  maxWidth:"65%",
  color:"white"
},

}))



type Props={
  latitude:any,
  longitude:any,
  page:any
}

const GoogleMaps: React.FC<Props> =  ({ latitude, longitude,page }) => {
  const data = [{
  
    "lat":latitude,
    "lng":longitude
  }]
  
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
  
  const classes = useStyles()
  return (
    <div  className={classes.wrapper}  >
    
    <div className={classes.navi} style={{ height: "400px", width: "100%" }}>
       <GoogleMapReact
         bootstrapURLKeys={{ key: "AIzaSyCY8XkBGWiGvRGyH8Rwt9T_z0BToYPucQU" }}
         defaultCenter={{ lat:latitude, lng: longitude }}
         defaultZoom={10}
         yesIWantToUseGoogleMapApiInternals
         onGoogleApiLoaded={({ map, maps }) => ModelsMap(map, maps)}
       ></GoogleMapReact>
     </div>
    <div  className={classes.infoi}>      
      <Box className={classes.squareLocation}   style={{ textAlign: "left", backgroundColor: page.DonationButtonColor || "#000" }}>
    
       <Typography variant="h6">        
     
         <CalendarTodayIcon />  {page.EventDay}            
       
          <br></br>
           <LocationOnIcon /> {page.Location}
        
          </Typography>
     
          
        </Box>
    </div>
  </div>
     
  );
};

export default GoogleMaps;
