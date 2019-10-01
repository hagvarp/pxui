import React, { useState, useEffect } from "react";

export default function TablesData(props) {
  if (props.data) {
    return <div>{props.data}</div>;
  }
  return (
    <div style={{ fontWeight: "italic", fontSize: "1.1em", color: "#2d4182" }}>
      Einki dÃ¡ta
    </div>
  );
}
