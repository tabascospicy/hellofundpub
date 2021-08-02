import Head from "next/head"
import { useRouter } from "next/router"
import Navbar from "../../components/Navbar";
import {getPage, getPages } from "../../utils/api"
import {Button,Grid, Typography} from '@material-ui/core';

const Pages = ({ page }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading category...</div>
  }

  return (
    <div>
      <Head>
        <title>{page.Title} </title>
      </Head>
      <Navbar />


<div >
      <Grid container spacing={3}>
  
  <Grid item xs={12} style={{textAlign: 'center'}}>
  
  <Typography variant="h1" >
  {page.Title}
    </Typography>
        </Grid> 
        <Grid item xs={12} style={{textAlign: 'center'}}>
        <Typography variant="h4" >
          {page.Description}
          </Typography>
        </Grid> 
        <Grid item xs={12} style={{textAlign: 'center'}}>
        
        <Button variant="outlined" color="primary" >
        $0 Raised of $1,100 Goal
      </Button>
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center'}} >
        <Button variant="contained" color="secondary"  style={{...margin(10, 10, 10, 5) }} >
        Donate
      </Button>
      <Button variant="outlined" color="primary" >
        Learn More
      </Button>
        </Grid>
      </Grid>
    </div>
</div>
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

export default Pages;

export async function getStaticProps({ params }) {
  console.log({page:params.slug})
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
