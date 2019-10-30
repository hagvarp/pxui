import React, { useState, useEffect } from "react";
import SelectorMulti from "./SelectorMulti";
import Loading from "../Loading/Loading";

let mainObject = {};
let selectorArray = [];

let query = [];

export default function Selectors(props) {
  const [postData, setPostData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [tableName, setTableName] = useState("");

  const onChangeData = (e, b) => {
    props.onChange(e, b);
  };

  useEffect(() => {
    selectorArray = [];
    query.length = 0;
    setIsLoading(true);
    fetch(props.pxTable)
      .then(response => {
        if (!response.ok) {
          throw new Error("Selectors", "Failed to fetch.");
        }
        return response.json();
      })
      .then(data => {
        setIsLoading(false);
        let table = null;
        let options = [];
        let selectorName = [];
        //----

        table = data.title;
        setTableName(table);
        // selectorArray.push(<div className="headLine">{table}</div>);
        //----
        let selectorCounter = 0;
        for (let i = 0; i < data.variables.length; i++) {
          let timeBoolean = data.variables[i].time;
          let elimination = data.variables[i].elimination;
          let code = data.variables[i].code;
          let text = data.variables[i].text;

          for (
            let y = 0;
            y < data.variables[selectorCounter].values.length;
            y++
          ) {
            options.push({
              value: data.variables[selectorCounter].values[y],
              label: data.variables[selectorCounter].valueTexts[y]
            });
          }
          if (timeBoolean === true) {
            options.reverse();
          }
          if (query.length !== data.variables.length) {
            let value = options[0].value;

            const values = [];
            values.push(value);
            const filter = "item";
            const selection = { filter, values };
            const aa = { code, selection };
            query.push(aa);
          }
          selectorArray.push(
            <SelectorMulti
              options={options}
              selectorName={selectorName}
              code={code}
              text={text}
              elimination={elimination}
              callBack={handleChange}
            />
          );
          selectorName = [];
          options = [];

          selectorCounter++;
        }

        const response = { px: "" };
        mainObject = { query, response };
        postRequest(mainObject);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, [props.pxTable]);

  function handleChange(code, variables) {
    const values = [];
    if (variables != null) {
      for (let i = 0; i < variables.length; i++) {
        values.push(variables[i].value);
      }
    }
    const filter = "item";
    const selection = { filter, values };
    const obj = { code, selection };

    var i = query.findIndex(o => o.code === obj.code);
    if (query[i]) {
      query[i] = obj;
    } else {
      query.push(obj);
    }
    const response = { px: "" };
    mainObject = { query, response };
    postRequest(mainObject, code);
  }

  async function postRequest(obj) {
    await fetch(props.pxTable, {
      body: JSON.stringify(obj),
      method: "post"
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("POST Failed to fetch.");
        }
        return response.text();
      })
      .then(response => {
        console.log(response);
        setPostData(response);
      })
      .catch(err => {
        console.log(err);
        setPostData(null);
      });
  }

  if (isLoading) {
    return (
      <Loading
        type="spinningBubbles"
        color="#2d4182"
        height="2%"
        width="2%"
      ></Loading>
    );
  }
  if (selectorArray.length > 0) {
    return (
      <div className="row" onChange={onChangeData(postData, tableName)}>
        {selectorArray}
      </div>
    );
  }
  return <Loading type="spin" color="#2d4182" height="1%" width="1%"></Loading>;
}
