import Link from "next/link"
import React from "react";
import NextImage from "./Image"
import Container from '@material-ui/core/Container';
import {padding} from "./styles.module.css"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
type PropsNav = {
  image:string
}


const Navbar : React.FC<PropsNav> = ({image ="strapi.png" }) => {
  return (
    <Container className={padding} fluid maxWidth={"lg"}>
      <Link href="/">
        <a>
          <NextImage
            src={`/${image}`}
            alt="home"
            className="logo"
            height="44"
            width="150"
          />
        </a>
      </Link>
      <Button variant="contained" color="primary" >
        Share
      </Button>
      <Button variant="contained" color="secondary" >
        Donate
      </Button>
    </Container>
  )
}

export default Navbar
