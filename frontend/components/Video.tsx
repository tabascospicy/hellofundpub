import { CardMedia } from "@material-ui/core"
import React from "react"

type Props = {
  url
}

const Video: React.FC<Props> = ({ url }) => {
  //check which youtube format url it matches
  //for the moment we use only the id of the vid
  //https://www.youtube.com/watch?v=YSuo0j2xsj8
  //http://youtu.be/YSuo0j2xsj8
  //www.youtube.com/embed/YSuo0j2xsj8

  return (
    <CardMedia
      style={{ height: "500px" }}
      component="iframe"
      src={"https://www.youtube.com/embed/" + url}
    />
  )
}

export default Video
