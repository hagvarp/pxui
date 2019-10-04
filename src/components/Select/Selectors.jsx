import React, { useState, useEffect } from "react";
import SelectorMulti from "./SelectorMulti";
import Loading from "../Loading/Loading";

let mainObject = {};
let selectorArray = [];
let query = [];

const Selectors = props => {
  const [postData, setPostData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const onChangeData = e => {
    props.onChange(e);
  };

  useEffect(() => {
    selectorArray = [];
    query.length = 0;
    setIsLoading(true);
    fetch(props.url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch.");
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
        selectorArray.push(<div className="headLine">{table}</div>);
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
        fetchPostHttp(mainObject);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, [props.url]);

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
    fetchPostHttp(mainObject, code);
  }

  async function fetchPostHttp(obj) {
    await fetch(props.url, {
      body: JSON.stringify(obj),
      method: "post"
    })
      .then(response => {
        if (!response.ok) {
          console.log("Failed response", response);
          throw new Error("POST Failed to fetch.");
        }
        return response.text();
      })
      .then(response => {
        setPostData(response);
      })
      .catch(err => {
        console.log(err);
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
  if (selectorArray && postData) {
    return <div onChange={onChangeData(postData)}>{selectorArray}</div>;
  }
  return (
    <div className="noData">
      Eingin talva vald
      <Loading type="cylon" color="#2d4182" height="3%" width="3%"></Loading>
    </div>
  );
};
export default Selectors;
