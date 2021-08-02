import Head from "next/head"
import { useRouter } from "next/router"
import Navbar from "../../components/Navbar";
import {getPage, getPages } from "../../utils/api"

const Pages = ({ page }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading category...</div>
  }
  const ImageProp = page.Image ? {image:page.Image} : {}
  return (
    <div>
      <Head>
        <title>{page.Title} </title>
      </Head>
      <Navbar donateColor={page.DonationButtonColor} bgColor={page.NavigationOverlayColor} {...ImageProp}/>
      <div className="w-full p-5 flex flex-col justify-between">
        <div>
          <h4 className="mt-1 font-semibold text-lg leading-tight truncate text-gray-700">
           {page.Description}
          </h4>
          <div className="mt-1 text-gray-600">{page.Title}</div>
        </div>
        </div>
    </div>
  )
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
