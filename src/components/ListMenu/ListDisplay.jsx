import React, { useState, useEffect } from "react";

export default function ListDisplay(props) {
  const [arr] = useState(props.arr);
  console.log("AAAA", arr);

  const handleClick = index => {
    props.callBack(index);
  };
  useEffect(() => {
    return arr.map(element => {
      console.log("AAAA", arr);
      return <div>{element.text}</div>;
    });
  }, []);

  return (
    <div>
      {arr.map((element, index) => {
        return <div onClick={() => handleClick(index)}>{element.text}</div>;
      })}
    </div>
  );
}
