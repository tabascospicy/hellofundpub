import { Typography, Box } from "@material-ui/core"

type Props = {
  title: string
}

const Title: React.FC<Props> = ({ title }) => {
  return (
    <Box m={6} style={{ textAlign: "center" }}>
      <Typography variant="h2">{title}</Typography>
    </Box>
  )
}

export default Title
