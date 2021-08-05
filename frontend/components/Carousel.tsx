import React from "react"
import Carousel from "react-material-ui-carousel"
import {
  Paper,
  Button,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core"
import NextImage from "./Image"

type CarouselProps = {
  name: string
  img: string
  Title: string
}
const useStyles = makeStyles(() => ({
  section: {
    padding: "8rem 0",
    textAlign: "center",
    paddingLeft: "20%",
    paddingRight: "20%",
  },
  title: {
    fontSize: "2rem",
    opacity: 0.8,
    fontWeight: "500",
    marginBottom: "4rem",
  },
}))

function Item({ item }) {
  return (
    <Paper>
      <h2>{item.name}</h2>
      <p>{item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  )
}
const CustomCarousel: React.FC<CarouselProps> = ({
  name,
  Images,
  Title = "",
}) => {
  const classes = useStyles()
  return (
    <Container className={classes.section} maxWidth={false}>
      <Typography className={classes.title} variant={"h2"}>
        {Title}
      </Typography>
      <Carousel>
        {Images.map((item, i) => (
          <div key={i} style={{ widt: "100%", height: "40vh" }}>
            <NextImage media={item} />
          </div>
        ))}
      </Carousel>
    </Container>
  )
}

export default CustomCarousel
