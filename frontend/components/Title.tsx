import { Typography, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(() => ({
  "MuiTypography-root": {
    fontSize: "5rem",
    textTransform: "uppercase",
    lineHeight: "5rem",
    color: "white",
    margin: "0 auto",
    fontWeight: "900",
  },
}))
type Props = {
  title: string
}

const Title: React.FC<Props> = ({ title }) => {
  const classes = useStyles()
  return (
    <Box m={6} style={{ textAlign: "center" }}>
      <Typography className={classes["MuiTypography-root"]} variant="h2">
        {title}
      </Typography>
    </Box>
  )
}

export default Title
