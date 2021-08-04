import { getPage } from "./"
import DynamiComponent from "../components/DinamiComponent";

const GetDinamiComponent = ({ ComponentsList }) => {
  return (
    <>
      {ComponentsList.map((element) => {
        const name = element.__component.split(".")[1];
        return DynamiComponent({ name, ...element });
      })}
    </>
  )
}

export default GetDinamiComponent;


