import Head from "next/head"
import { useRouter } from "next/router"
import Navbar from "../../components/Navbar";
import {getPage, getPages } from "../../utils/api"
import {Button,Grid, Typography, Card, CardHeader,CardContent,CardActionArea, CardMedia, Box} from '@material-ui/core';
import {Title} from './styles.module.css';

const Pages = ({ page }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading category...</div>
  }
  const ImageProp = page.Image ? {image:page.Image} : {}
  return (
    <>
      <Head>
        <title>{page.Title} </title>
      </Head>
<Navbar donateColor={page.DonationButtonColor} bgColor={page.NavigationOverlayColor} {...ImageProp}/>

<div >
    <Grid container spacing={6}>
    <Grid item xs={12} style={{textAlign: 'center'}}>
        <Box className={Title} m={6} style={{textAlign: 'center'}}>
        
          <Typography variant="h2" >
          {page.Title}
          </Typography>
        </Box> 
        </Grid> 
        <Grid item xs={12} style={{textAlign: 'center'}}>
        <Box className={Title} m={2} style={{textAlign: 'center'}}>
          <Typography variant="h4" >
            {page.Description}
          </Typography>
          </Box> 
        </Grid> 
        <Grid item xs={12} style={{textAlign: 'center'}}>
           <Button variant="outlined" color="primary" >
             $0 Raised of $1,100 Goal
           </Button>
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center'}} >
          <Button style={{marginRight:10,backgroundColor:page.DonationButtonColor || "",color:"white",...margin(10, 10, 10, 5)}} variant="contained" color="secondary" >
            Donate
          </Button>
          <Button variant="outlined" color="primary" >
            Learn More
          </Button>
        </Grid>
        <Grid item xs={2} style={{background:'rgb(0, 0, 0)'}} >.</Grid>
        <Grid item xs={8}  style={{background:'rgb(0, 0, 0)'}} >
        <CardMedia style={{height:'500px'}}  component="iframe" src={"https://www.youtube.com/embed/Yn-UfMJ61sg"} />
        </Grid>
        <Grid style={{background:'rgb(0, 0, 0)'}} item xs={2}></Grid>
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
