import React, { useState, useEffect } from "react";
import SelectorMulti from "./SelectorMulti";
import { useHttp } from "../hooks/http";

const Selectors = props => {
  const [postData, setPostData] = useState(null);
  const [isLoading, fetchedData] = useHttp(
    "http://statbank.hagstova.fo/api/v1/fo/H2/IB/IB01/fo_vital_md.px",
    []
  );


 

  let table = null;
  let options = [];
  let selectorName = [];
  let s = [];

  const handleChange = (code,variables) => {
    console.log("HERE", code, variables);
  };

  if (fetchedData) {
    table = fetchedData.title;
    s.push(<div>{table}</div>);
    let a = 0;
    for (let i = 0; i < fetchedData.variables.length; i++) {
      let timeBoolean = fetchedData.variables[i].time;
      let elimination = fetchedData.variables[i].elimination;
      let code = fetchedData.variables[i].code;

      for (let y = 0; y < fetchedData.variables[a].values.length; y++) {
        options.push({
          value: fetchedData.variables[a].values[y],
          label: fetchedData.variables[a].valueTexts[y]
        });
      }
      if (timeBoolean == true) {
        options.reverse();
      }
      s.push(
        <SelectorMulti
          options={options}
          selectorName={selectorName}
          code={code}
          elimination={elimination}
          callBack={handleChange}
        />
      );

      selectorName = [];
      options = [];

      a++;
    }
  }

  return (
    <div>
      {s}
      <div>WHAT EVER</div>
    </div>
  );
};

export default Selectors;
