import React, { useState } from "react";
import ListItem from "./ListItem";

export default function ListDisplay(props) {
  const [data] = useState(props.data);

  const handleClick = (id, type, text) => {
    props.callBack(id, type, text);
  };
  return data.map(item => (
    <ListItem
      id={item.id}
      type={item.type}
      text={item.text}
      callBack={handleClick}
    />
  ));
}
