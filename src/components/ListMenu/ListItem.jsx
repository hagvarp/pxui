import React, { useState, useEffect } from "react";

export default function ListItem(props) {
  const [id] = useState(props.id);
  const [text] = useState(props.text);

  return (
    <div className="menu-item" id={id}>
      {text}
    </div>
  );
}
