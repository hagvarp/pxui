import React, { useState, useEffect } from "react";
import SelectorMulti from "./SelectorMulti";
import Loading from "../Loading/Loading";

let mainObj = {};
let s = [];
let query = [];

const Selectors = props => {
  const [postData, setPostData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const wtf = e => {
    props.onChange(e);
  };

  useEffect(() => {
    s = [];
    query.length = 0;
    console.log(s.length);
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
        s.push(<div className="headLine">{table}</div>);
        console.log(s);
        //----
        let a = 0;
        for (let i = 0; i < data.variables.length; i++) {
          let timeBoolean = data.variables[i].time;
          let elimination = data.variables[i].elimination;
          let code = data.variables[i].code;
          let text = data.variables[i].text;

          for (let y = 0; y < data.variables[a].values.length; y++) {
            options.push({
              value: data.variables[a].values[y],
              label: data.variables[a].valueTexts[y]
            });
          }
          if (timeBoolean === true) {
            options.reverse();
          }
          if (query.length != data.variables.length) {
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
              text={text}
              elimination={elimination}
              callBack={handleChange}
            />
          );
          selectorName = [];
          options = [];

          a++;
        }
        const response = { px: "" };
        mainObj = { query, response };
        fetchPostHttp(mainObj);
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
    mainObj = { query, response };
    fetchPostHttp(mainObj, code);
  }

  async function fetchPostHttp(obj) {
    console.log(obj);
    await fetch(props.url, {
      body: JSON.stringify(obj),
      method: "post"
    })
      .then(response => {
        if (!response.ok) {
          console.log("Failed response", response);
          throw new Error("POST Failed to fetch.");
        }
        console.log(response);

        return response.text();
      })
      .then(response => {
        console.log(response);

        setPostData(response);
      })
      .catch(err => {
        console.log(err);
        setPostData("Please pick items for the empty selectors");
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
  if (s && postData) {
    return <div onChange={wtf(postData)}>{s}</div>;
  }
  return (
    <div className="noData">
      Eingin talva vald
      <Loading type="cylon" color="#2d4182" height="3%" width="3%"></Loading>
    </div>
  );
};
export default Selectors;
