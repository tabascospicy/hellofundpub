import Title from "./Title";
import React from "react";

const ComponentList:List = {
  "title":Title
}

type List = {
  "title":React.FC<any>
}

type DynamiCProps = {
  name: keyof List
}


const DynamiComponent:React.FC<DynamiCProps> = ({name,...props}) => {
  return (
    ComponentList[name](props)
  );
}

export default DynamiComponent;