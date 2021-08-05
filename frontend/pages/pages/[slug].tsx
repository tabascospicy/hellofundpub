import Head from "next/head"
import { useRouter } from "next/router"
import Navbar from "../../components/Navbar"
import { getPage, getPages } from "../../utils/api"
import {
  Button,
  Grid,
  Typography,
  CardMedia,
  Box,
  Container,
} from "@material-ui/core"
import { container, wrapper } from "./styles.module.css"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import NextImage from "./../../components/Image"
import GetDinamiComponent from "./../getDinamiComponent"

const useStyles = makeStyles(() => ({
  "MuiTypography-root": {
    fontSize: "5rem",
    textTransform: "uppercase",
    lineHeight: "5rem",
    color: "white",
    margin: "0 auto",
    fontWeight: "900",
  },
  root: {
    fontSize: "1.25rem",
    color: "white",
  },
}))

const Pages = ({ page, ComponentsList, PrincipalButtons }) => {
  const router = useRouter()
  const classes = useStyles()
  if (router.isFallback) {
    return <div>Loading category...</div>
  }
  const ImageProp = page.Image ? { image: page.Image } : {}
  const VideoProp = page.VideoURL ? page.VideoURL : {}

  let VideoExists = false
  const backgroundImage = page.BackgroundImage ? page.BackgroundImage : null

  if (typeof VideoProp === "string") {
    VideoExists = true
  }

  return (
    <>
      <Head>
        <title>{page.Title} </title>
      </Head>
      <Navbar
        donateColor={page.DonationButtonColor}
        bgColor={page.NavigationOverlayColor}
        {...ImageProp}
      />
      <div
        style={{ backgroundColor: page.WelcomeBackgroundColor || "#fafafa" }}
      >
        <Container maxWidth={false} className={container}>
          <Grid
            style={{ ...backgroundImage }}
            className={wrapper}
            container
            spacing={6}
          >
            {backgroundImage && (
              <NextImage
                layout={"fill"}
                objectFit="cover"
                style={{ zIndex: 1 }}
                media={{ ...backgroundImage }}
              />
            )}
            <Grid item xs={12} style={{ textAlign: "center", zIndex: 2 }}>
              <Box style={{ textAlign: "center" }}>
                {page.PresentationImage ? (
                  <NextImage
                    layout={"responsive"}
                    objectFit="contain"
                    objectPosition="start"
                    media={{ ...page.PresentationImage }}
                    height={30}
                    width={50}
                  />
                ) : (
                  <Typography
                    className={classes["MuiTypography-root"]}
                    variant="h2"
                  >
                    {page.Title}
                  </Typography>
                )}
              </Box>
            </Grid>
            <GetDinamiComponent {...{ ComponentsList }} />
            <Grid
              container
              spacing={2}
              xs={12}
              direction={"row"}
              justifyContent="center"
              style={{ textAlign: "center", zIndex: 2 }}
            >
              <GetDinamiComponent
                {...{ ComponentsList: PrincipalButtons, grid: true }}
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center", zIndex: 2 }}>
              <Button
                style={{
                  marginRight: 10,
                  backgroundColor: page.DonationButtonColor || "",
                  color: "white",
                  ...margin(10, 10, 10, 5),
                }}
                variant="contained"
                color="secondary"
              >
                Donate
              </Button>
              <Button variant="outlined" color="primary">
                Learn More
              </Button>
            </Grid>
          </Grid>
        </Container>

        {VideoExists && (
          <React.Fragment>
            <Grid item xs={2} style={{ background: "rgb(0, 0, 0)" }}>
              .
            </Grid>
            <Grid item xs={8} style={{ background: "rgb(0, 0, 0)" }}>
              <CardMedia
                style={{ height: "500px" }}
                component="iframe"
                src={"https://www.youtube.com/embed/Yn-UfMJ61sg"}
              />
            </Grid>
            <Grid style={{ background: "rgb(0, 0, 0)" }} item xs={2}></Grid>
          </React.Fragment>
        )}
      </div>
    </>
  )
}

function margin(a, b, c, d) {
  return {
    marginTop: a,
    marginRight: b ? b : a,
    marginBottom: c ? c : a,
    marginLeft: d ? d : b ? b : a,
  }
}

export default Pages

export async function getStaticProps({ params }) {
  const page = await getPage(params.slug)
  const ComponentsList = page.ManagedContent || []
  const PrincipalButtons = page.ButtonsGroup || []

  return { props: { page, ComponentsList, PrincipalButtons } }
}

export async function getStaticPaths() {
  const pages = await getPages()
  return {
    paths: pages.map((_page) => {
      return {
        params: { slug: _page.Slug },
      }
    }),
    fallback: true,
  }
}
