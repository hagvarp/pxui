import React from "react";

export default function About(props) {
  console.log(props);
  return (
    <div>
      <h2>About</h2>
      {props.location.pathname.substr(1)}
    </div>
  );
}
