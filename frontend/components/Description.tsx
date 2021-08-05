import { Grid, Typography, Box } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
const styles = {
  "MuiTypography-root": {
    fontSize: "5rem",
    textTransform: "uppercase",
    lineHeight: "5rem",
    color: "white",
    margin: "0 auto",
    fontWeight: "900",
  },
  "MuiTypography-body1": {
    fontSize: "1.3rem",
    color: "white",
    lineHeight: "2rem",
  },
}
type CustomDescriptionProps = {
  classes: {
    root: string
  }
  content: string
}
const Description: React.FC<CustomDescriptionProps> = ({
  classes,
  content,
}) => {
  return (
    <Grid
      item
      xs={12}
      style={{ textAlign: "center", zIndex: 2, color: "white" }}
    >
      <Box style={{ textAlign: "center" }}>
        <Typography className={classes}>{content}</Typography>
      </Box>
    </Grid>
  )
}

export default withStyles(styles)(Description)
