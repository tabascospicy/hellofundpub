import Title from "./Title"
import React from "react"
import Carousel from "./Carousel"


type List = {
  "custom.title": React.FC<any>
  "custom.carousel": React.FC<any>
}

type DynamiCProps = {
  __component: keyof List
}
const ComponentList: List = {
  "custom.title": Title,
  "custom.carousel": Carousel,
}
const DynamiComponent: React.FC<DynamiCProps> = ({ ...props }) => {
  const { __component } = props
  return ComponentList[__component](props)
}

export default DynamiComponent
