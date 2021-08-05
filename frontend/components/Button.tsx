import { Button, Grid } from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(() => ({
  "MuiTypography-body1": {
    fontSize: "1.3rem",
    color: "white",
    lineHeight: "2rem",
  },
  "MuiButton-contained": {
    width: "35vw",
  },
}))
type CustomButtonProps = {
  Type: keyof DefinedButtons
  color: string
  size: number
  grid: boolean
  large: boolean
}
type DefinedButtons = {
  donate: ButtonsProperties
  ticket: ButtonsProperties
  share: ButtonsProperties
}
type ButtonsProperties = {
  name: string
  onClick: () => void
  description: string
}

const Buttons: DefinedButtons = {
  donate: {
    name: "donate",
    onClick: () => {},
    description: "Donate",
  },
  ticket: {
    name: "ticket",
    onClick: () => {},
    description: "Buy Tickets",
  },
  share: {
    name: "ticket",
    onClick: () => {},
    description: "Buy Tickets",
  },
}

const CustomButton: React.FC<CustomButtonProps> = ({
  Type,
  color,
  size = 2,
  grid = false,
  large = false,
  ...props
}) => {
  const classes = useStyles()
  const properties = Buttons[Type]
  const Wrapper = grid ? Grid : React.Fragment
  const c = color === "#ffb703"
  return (
    <Wrapper item>
      <Button
        className={`${c && classes["MuiButton-contained"]}`}
        variant="contained"
        size="large"
        style={{ backgroundColor: color, color: "white" }}
      >
        tocame
      </Button>
    </Wrapper>
  )
}

export default CustomButton
