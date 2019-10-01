import React, { useState, useEffect } from "react";

export default function ListItem(props) {
  const [id] = useState(props.id);
  const [type] = useState(props.type);
  const [text] = useState(props.text);

  const handleClick = (id, type, text) => {
    props.callBack(id, type, text);
  };

  return (
    <div
      onClick={() => handleClick(id, type, text)}
      className="tree-item"
      id={id}
    >
      {text}
    </div>
  );
}
