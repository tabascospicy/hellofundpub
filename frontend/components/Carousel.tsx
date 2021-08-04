import React from "react"
//import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from "@material-ui/core"

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
const CustomCarousel: React.FC<CarouselProps> = ({ name, img }) => {
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ]
  return (
    <>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </>
  )
}

export default CustomCarousel
