import React, { useState } from "react";
import ListItem from "./ListItem";

export default function ListDisplay(props) {
  const [data] = useState(props.data);

  const handleClick = (id, type, text) => {
    props.callBack(id, type, text);
  };
  return data.map(c => (
    <ListItem id={c.id} type={c.type} text={c.text} callBack={handleClick} />
  ));
}
