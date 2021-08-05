import DynamiComponent from "../components/DinamiComponent"

const GetDinamiComponent = ({ ComponentsList, ...props }) => {
  return (
    <>
      {ComponentsList.map((element) => {
        return DynamiComponent({ ...element, ...props })
      })}
    </>
  )
}

export default GetDinamiComponent
