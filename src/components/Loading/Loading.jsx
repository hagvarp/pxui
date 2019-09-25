import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ type, color, height, width }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <ReactLoading type={type} color={color} height={height} width={width} />
  </div>
);

export default Loading;
