import React from "react"
import Carousel from "react-material-ui-carousel"
import { Paper, Button, Container } from "@material-ui/core"
import NextImage from "./Image"

type CarouselProps = {
  name: string
  img: string
}

function Item({ item }) {
  return (
    <Paper>
      <h2>{item.name}</h2>
      <p>{item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  )
}
const CustomCarousel: React.FC<CarouselProps> = ({ name, Images }) => {
  return (
    <Container maxWidth={false}>
      <Carousel>
        {Images.map((item, i) => (
          <div style={{ widt: "100%", height: "40vh" }}>
            <NextImage media={item} />
          </div>
        ))}
      </Carousel>
    </Container>
  )
}

export default CustomCarousel
