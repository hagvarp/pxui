import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";

export default function ListDisplay(props) {
  const [data] = useState(props.data);

  console.log(data);
  return data.map(c => <ListItem id={c.id} text={c.text} />);
}
