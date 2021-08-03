import {getPage} from "./"

const getDinamiComponent = () => {
  return (
    
  );
}

export default getDinamiComponent;


export async function getStaticProps({ params }) {
  console.log({page:params.slug})
  const page = await getPage(params.slug)
  return { props: { page } }
}