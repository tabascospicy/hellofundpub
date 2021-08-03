import Link from "next/link"
import React from "react";
import NextImage from "./Image"
import Container from '@material-ui/core/Container';
import {padding,row,unsetImg,customImg} from "./styles.module.css"
import Grid from '@material-ui/core/Grid';
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from '@material-ui/core/Button';
type PropsNav = {
  image:string,
  bgColor:string,
  donateColor:string
}


const Navbar : React.FC<PropsNav> = ({image ="/strapi.png",bgColor="",donateColor=""}) => {

  const isDefault = typeof(image)==="string"
  const imageProps = isDefault ?{   
  src:`${image}`,
  alt:"home",
  className:"logo",
  height:"44",
  width:"150"} : {media:{...image},layout:"fill"};
 
  return (
    <AppBar position="sticky" style={{backgroundColor:bgColor}} className={`${padding} `}  >
      <Toolbar>
      <Link edge="start" href="/">
        <a className={!isDefault && unsetImg}>
          <NextImage
            {...imageProps}
            
          className={ `${!isDefault && customImg}`}
          />
        </a>
      </Link>
      <div style={{marginLeft:"auto"}}>
      <Button edge="end" style={{marginRight:10}} variant="contained"  >
        Share
      </Button>
      <Button edge="end" style={{marginRight:10,backgroundColor:donateColor,color:"white"}} variant="contained" color="secondary" >
        Donate
      </Button>
      </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
