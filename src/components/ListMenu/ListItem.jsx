import React, { useState, useEffect } from "react";

export default function ListItem(props) {
  const [id] = useState(props.id);
  const [text] = useState(props.text);

  const handleChange = id => variables => {
    props.callBack(id, variables);
  };


  
  return (
    <div className="menu-item" id={id} onClick={handleChange(id)}>
      {text}
    </div>
  );
}
