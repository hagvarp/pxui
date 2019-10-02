import React, { useState, useEffect } from "react";

export default function TablesData(props) {
  if (props.data) {
    return <div>{props.data}</div>;
  }
  return <div className="noData">Einki dáta</div>;
}
