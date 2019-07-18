import React, { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "font-awesome/css/font-awesome.min.css";


const animatedComponents = makeAnimated();
const xArray = [];

export default function SelectorMulti(props) {
  const [options] = useState(props.options);
  const [code] = useState(props.code);
  const [elimination] = useState(props.elimination)

  const handleChange = code => variables => {
    props.callBack(code, variables);
  };

  const codeReq = () => {
    if (elimination == true) {
      return <div>{code} </div>;
    } else {
      return (
        <div>
          {code}{" "}
          <i className="fa fa-exclamation-circle" style={{ color: "red" }} />
        </div>
      );
    }
  };

  return (
    <div>
      {codeReq(elimination, code)}
      <Select
        onChange={handleChange(code)}
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[options[0]]}
        isMulti
        options={options}
      />
    </div>
  );
}
