import React, { useState, useEffect } from "react";
import SelectorMulti from "./SelectorMulti";
import { useHttp } from "../hooks/http";

let mainObj = {};
let query = [];
let x = true;

const Selectors = () => {
  const [postData, setPostData] = useState(null);
  const [isLoading, fetchedData] = useHttp(
    "http://statbank.hagstova.fo/api/v1/fo/H2/IB/IB01/fo_vital_md.px",
    []
  );

  const handleChange = (code, variables) => {
    const values = [];
    if (variables != null) {
      for (let i = 0; i < variables.length; i++) {
        values.push(variables[i].value);
      }
    }
    const format = "px";
    const response = { format };
    const filter = "item";
    const selection = { filter, values };
    const obj = { code, selection };

    var i = query.findIndex(o => o.code === obj.code);
    if (query[i]) {
      query[i] = obj;
    } else {
      query.push(obj);
    }
    console.log(query.length);
    if (query.length > 9) {
      for (let i = 0; i < 5; i++) {
        query.pop();
      }
    }
    mainObj = { query, response };
    console.log(mainObj);

    fetchPostHttp(mainObj);
  };

  const fetchPostHttp = async obj => {
    await fetch(
      "https://statbank.hagstova.fo/api/v1/fo/H2/IB/IB01/fo_vital_md.px",
      {
        body: JSON.stringify(obj),
        method: "post"
      }
    )
      .then(response => response.text())
      .then(response => setPostData(response));
  };

  let s = [];
  if (fetchedData) {
    let table = null;
    let options = [];
    let selectorName = [];

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
      if (timeBoolean === true) {
        options.reverse();
      }
      if (query.length != fetchedData.variables.length) {
        let value = options[0].value;

        const values = [];
        values.push(value);
        const filter = "item";
        const selection = { filter, values };
        const aa = { code, selection };
        query.push(aa);
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
    console.log(mainObj);
    const format = "px";
    const response = { format };
    mainObj = { query, response };
    fetchPostHttp(mainObj);
  }

  return (
    <div>
      {s}
      {postData}
    </div>
  );
};
export default Selectors;
