import Title from "./Title"
import React from "react"
import Carousel from "./Carousel"
import Description from "./Description"
import DateLocationDescription from "./DatePositionDescription"
import CustomButton from "./Button"
import Footer from "./MyFooter"

type List = {
  "custom.title": React.FC<any>
  "custom.carousel": React.FC<any>
  "custom.description": React.FC<any>
  "custom.date-location-description": React.FC<any>
  "groups.buttons": React.FC<any>
  "custom.footer": React.FC<any>
}

type DynamiCProps = {
  __component: keyof List
}
const ComponentList: List = {
  "custom.title": Title,
  "custom.carousel": Carousel,
  "custom.description": Description as React.FC,
  "custom.date-location-description": DateLocationDescription,
  "groups.buttons": CustomButton,
  "custom.footer": Footer,
}

const DynamiComponent: React.FC<DynamiCProps> = ({ ...props }) => {
  const { __component } = props
  const CmsComponent = ComponentList[__component]
  return <CmsComponent {...props} />
}

export default DynamiComponent
