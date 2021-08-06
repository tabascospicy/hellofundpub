import { Grid, Typography, Box } from "@material-ui/core"
import { makeStyles, withStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(() => ({
  "MuiTypography-root": {
    fontSize: "5rem",
    textTransform: "uppercase",
    lineHeight: "5rem",
    textColor: "white",
    margin: "0 auto",
    fontWeight: "900",
  },
  "MuiTypography-body1": {
    fontSize: "1.3rem",
    color: "white",
    lineHeight: "2rem",
  },
}))
type CustomDescriptionProps = {
  content: string
  textColor: string
}
const Description: React.FC<CustomDescriptionProps> = ({
  content,
  textColor,
  ...props
}) => {
  const classes = useStyles()
  
  return (
    <Grid item xs={12} style={{ textAlign: "center", zIndex: 2, padding: 0 }}>
      <Box style={{ textAlign: "center" }}>
        <Typography
          style={{ color: textColor }}
          className={classes["MuiTypography-body1"]}
        >
          {content}
        </Typography>
      </Box>
    </Grid>
  )
}

export default Description
