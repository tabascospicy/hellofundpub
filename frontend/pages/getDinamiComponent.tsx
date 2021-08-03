import {getPage} from "./"
import DynamiComponent from "../components/DinamiComponent";

const getDinamiComponent = ({page,Components,...props}) => {
  console.log({Components});
  return (
     <h1>Cargo</h1>
  );
}

export default getDinamiComponent;


export async function getStaticProps({ params }) {

  const page = await getPage(params.slug);
  console.log({page})
  const Components = page.components ? page?. _components.map((element)=>{
    return DynamiComponent(element)
  }) : [];

  return { props: { page,Components } }
}