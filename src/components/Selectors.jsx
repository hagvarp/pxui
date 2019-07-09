import React, { useState, useEffect } from "react";
import SelectorMulti from "./SelectorMulti";
import { useHttp } from "../hooks/http";


const Selectors = () => {
  const [isLoading, fetchedData] = useHttp(
    "http://statbank.hagstova.fo/api/v1/fo/H2/IB/IB01/fo_vital_md.px",
    []
  );

  useEffect(() => {
    return () => {
      console.log("component did unmount");
    };
  }, []);

  let table = null;
  let options = [];
  let selectorName = [];
  let s = [];
  let c = "";

  if (fetchedData) {
    table = fetchedData.title;
    s.push(<div>{table}</div>);
    let a = 0;
    for (let i = 0; i < fetchedData.variables.length; i++) {
      c = fetchedData.variables[i].code;
      selectorName.push({
        code: fetchedData.variables[i].code,
        label: fetchedData.variables[i].text
      });

      for (let y = 0; y < fetchedData.variables[a].values.length; y++) {
        options.push({
          value: fetchedData.variables[a].values[y],
          label: fetchedData.variables[a].valueTexts[y]
        });
      }
      s.push(
        <SelectorMulti options={options} selectorName={selectorName} code={c} />
      );

      selectorName = [];
      options = [];

      a++;
    }
    return s;
  }

  return <div>Loading...</div>;
};

export default Selectors;
