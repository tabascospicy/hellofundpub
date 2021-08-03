import Head from "next/head"
import { useRouter } from "next/router"
import Navbar from "../../components/Navbar";
import { getPage, getPages } from "../../utils/api"
import { Button, Grid, Typography, Box } from '@material-ui/core';
import { container } from './styles.module.css';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
// We can inject some CSS into the DOM.
const styles = {
  "MuiTypography-root": {
    fontSize: '5rem',
    textTransform: 'uppercase',
    lineHeight: '5rem',
    margin: '0 auto',
    fontWeight: '900'
  },
  root: {
    fontSize: '1.25rem'
  }
}


const Pages = ({ page, classes, className }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading category...</div>
  }
  const ImageProp = page.Image ? { image: page.Image } : {}
  return (
    <>
      <Head>
        <title>{page.Title} </title>
      </Head>
      <Navbar donateColor={page.DonationButtonColor} bgColor={page.NavigationOverlayColor} {...ImageProp} />

      <div style={{ backgroundColor: page.WelcomeBackgroundColor || "#fafafa" }}>
        <Grid className={container} container spacing={6}>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Box style={{ textAlign: 'center' }}>

              <Typography className={classes["MuiTypography-root"]} variant="h2" >
                {page.Title}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Box style={{ textAlign: 'center' }}>
              <Typography className={classes.root} variant="span" >
                {page.Description}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Button variant="outlined" color="primary" >
              $0 Raised of $1,100 Goal
            </Button>
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }} >
            <Button style={{ marginRight: 10, backgroundColor: page.DonationButtonColor || "", color: "white", ...margin(10, 10, 10, 5) }} variant="contained" color="secondary" >
              Donate
            </Button>
            <Button variant="outlined" color="primary" >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

function margin(a, b, c, d) {
  return {
    marginTop: a,
    marginRight: b ? b : a,
    marginBottom: c ? c : a,
    marginLeft: d ? d : (b ? b : a)
  }
}

export default withStyles(styles)(Pages);

export async function getStaticProps({ params }) {
  console.log({ page: params.slug })
  const page = await getPage(params.slug)


  return { props: { page } }
}

export async function getStaticPaths() {
  const pages = await getPages();
  return {
    paths: pages.map((_page) => {
      return {
        params: { slug: _page.Slug },
      }
    }),
    fallback: true,
  }
}
