import { Typography, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({

  title: {
    fontSize: "1rem",
    lineHeight: "5rem",
    color: "white",
    margin: "0 auto",
    opacity:0.6,
  },
  
  section:{
    padding: "3rem 0",
    textAlign: "center",
  }
}))


type Props = {}

const Footer: React.FC<Props> = () => {
  const classes = useStyles();
  return (
    <Container className={classes.section} maxWidth={false} style={{ backgroundColor: "#444"}}>
      <Typography className={classes.title}>
        Powered By <span style={{ fontWeight: "900", fontSize: "1.5rem",}}>HelloFund</span>
      </Typography>
    </Container>
  )
}

export default Footer;