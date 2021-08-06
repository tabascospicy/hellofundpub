import Head from "next/head"
import { useRouter } from "next/router"
import Navbar from "../../components/Navbar"
import Video from "../../components/Video"
import GoogleApiWrapper from "../../components/Location"
import { getPage, getPages } from "../../utils/api"
import { Grid, Typography, Box, Container } from "@material-ui/core"
import { container, wrapper } from "./styles.module.css"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import NextImage from "./../../components/Image"
import GetDinamiComponent from "./../getDinamiComponent"
import BrandFooter from "./../../components/BrandFooter"
import GoogleMaps from "./../../components/Location"

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
  testContainer: {
    height: "500px",
    padding: 0,
  },
  content: {
    gridArea: "1 / 1",
  },
  "overlay ": {},
}))

const Pages = ({ page, ComponentsList, PrincipalButtons, ExtraContent }) => {
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
            <Grid
              item
              xs={12}
              style={{ textAlign: "center", zIndex: 2, padding: 0 }}
            >
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
          </Grid>
        </Container>


        
        <GetDinamiComponent {...{ ComponentsList: ExtraContent , page }} />
      </div>
      <BrandFooter />
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
  const ExtraContent = page.ExtraContent || []
  return { props: { page, ComponentsList, PrincipalButtons, ExtraContent } }
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
