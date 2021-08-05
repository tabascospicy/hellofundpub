import { getStrapiMedia } from "../utils/medias"
import NextImage from "next/image"

const Image = (props) => {
  if (!props.media) {
    return <NextImage {...props} />
  }

  const { url, alternativeText } = props.media

  const loader = ({ src }) => {
    return getStrapiMedia(src)
  }

  return (
    <NextImage
      loader={loader}
      layout={props.layout || "fill"}
      objectFit={props.objectFit || "contain"}
      objectPosition={props.objectPosition || "center"}
      src={url}
      {...props}
      alt={alternativeText || ""}
    />
  )
}

export default Image
