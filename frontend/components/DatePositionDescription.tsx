import { Grid, Typography, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(() => ({
  "MuiTypography-body1": {
    fontSize: "1.3rem",
    color: "white",
    lineHeight: "2rem",
  },
}))
type CustomDescriptionProps = {
  location: string
  date: string
}
const DateLocationDescription: React.FC<CustomDescriptionProps> = ({
  location,
  date,
}) => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction={"row"}
      xs={12}
      justifyContent={"space-around"}
      style={{ textAlign: "center", zIndex: 2, padding:0 }}
    >
      <Grid xs={4} item style={{ textAlign: "left", color: "white" }}>
        <Typography className={classes["MuiTypography-body1"]}>
          {date}
        </Typography>
      </Grid>
      <Grid xs={4} item style={{ textAlign: "left", color: "white" }}>
        <Typography className={classes["MuiTypography-body1"]}>
          {location}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default DateLocationDescription
