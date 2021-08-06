import { Typography, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Description from "./Description"
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
    padding: "8rem 0",
    textAlign: "center",
    paddingLeft: "20%",
    paddingRight: "20%",
  },
}))

type Props = {
  Title: string
  icons: string[]
  description: string
  bgColor?: string
  page: any
}

const Footer: React.FC<Props> = ({ Title, description, bgColor = null, page }) => {
  const classes = useStyles()
  return (
    <Container
      className={classes.section}
      maxWidth={false}
      style={{ backgroundColor: bgColor || "#000" }}
    >
      <Typography className={classes.title}>{Title}</Typography>
      <Typography className={classes.description}>{description}</Typography>
    </Container>
  )
}

export default Footer
