import { CardMedia , Container} from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"

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
    padding: "2rem 0",
    textAlign: "center",
    paddingLeft: "20%",
    paddingRight: "20%",
  },
}))

type Props = {
  url:any
}

const Video: React.FC<Props> = ({ url }) => {
  //check which youtube format url it matches
  //for the moment we use only the id of the vid
  //https://www.youtube.com/watch?v=YSuo0j2xsj8
  //http://youtu.be/YSuo0j2xsj8
  //www.youtube.com/embed/YSuo0j2xsj8
  const classes = useStyles()
  return (
    <Container
    className={classes.section}
    maxWidth={false}
  >
<CardMedia
      style={{ height: "500px" }}
      component="iframe"
      src={"https://www.youtube.com/embed/" + url}
    />
    </Container>
  )
}

export default Video
