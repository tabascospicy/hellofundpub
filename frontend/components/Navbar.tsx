import Link from "next/link"
import React from "react";
import NextImage from "./Image"
import Container from '@material-ui/core/Container';
import {padding,row,unsetImg,customImg} from "./styles.module.css"
import Grid from '@material-ui/core/Grid';
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
 
 console.log({bgColor})
  return (
    <Container style={{backgroundColor:bgColor}} className={`${padding} ${row} `}  maxWidth={"lg"}>
      <Link href="/">
        <a className={!isDefault && unsetImg}>
          <NextImage
            {...imageProps}
            
          className={ `${!isDefault && customImg}`}
          />
        </a>
      </Link>
      <Grid alignItems="center" container justifyContent="flex-end"  >
        <Grid >
      <Button style={{marginRight:10}} variant="contained"  >
        Share
      </Button>
      <Button style={{marginRight:10,backgroundColor:donateColor,color:"white"}} variant="contained" color="secondary" >
        Donate
      </Button>
      </Grid>
      </Grid>
    </Container>
  )
}

export default Navbar
