import Link from "next/link"
import React from "react"
import NextImage from "./Image"
import Container from "@material-ui/core/Container"
import { padding, row, unsetImg, customImg } from "./styles.module.css"
import Grid from "@material-ui/core/Grid"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import { makeStyles, Typography } from "@material-ui/core"
type PropsNav = {
  image: {}
  bgColor: string
  donateColor: string
  title: string
}
const useStyles = makeStyles(() => ({
  "MuiTypography-body1": {
    fontSize: "1.3rem",
    color: "black",
    lineHeight: "1rem",
    fontWeight:"900"
  },
}))
const alignText = {
  display:"flex",
  alignItems: "center",
  justifyContent:"center",
}
const Navbar: React.FC<PropsNav> = ({
  image = {},
  bgColor = "",
  donateColor = "",
  title = ""
}) => {
  const isDefault = typeof image === "string"
  const classes = useStyles()
  const imageProps = { media: { ...image } }
  console.log({image})
  return (
    <AppBar
      position="sticky"
      style={{ backgroundColor: bgColor }}
      className={`${padding} `}
    >
      <Toolbar>
        <Link edge="start" href="/">
          <a style={image === "" ? alignText : {}} className={`${unsetImg}`}>
            {image === "" ? <Typography className={classes["MuiTypography-body1"]}>{title}</Typography> :  <NextImage
              {...imageProps}
              className={`${!isDefault && customImg}`}
            />}
          
          </a>
        </Link>

        <div style={{ marginLeft: "auto" }}>
          <Button edge="end" style={{ marginRight: 10 }} variant="contained">
            Share
          </Button>
          <Button
            edge="end"
            style={{
              marginRight: 10,
              backgroundColor: donateColor,
              color: "white",
            }}
            variant="contained"
            color="secondary"
          >
            Donate
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
