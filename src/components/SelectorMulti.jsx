import React, { useState, useEffect } from "react";
import SelectorData from "./SelectorsData";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();
const xArray = [];

export default function SelectorMulti(props) {
  const [options, setOptions] = useState(props.options);
  const [code, setCode] = useState(props.code);
  const [selector, setSelector] = useState(props.selectorName);
  const [selectedOption, setSelectedOption] = useState(props.options[0]);
  const [arr, setArr] = useState([code, props.options[0]]);

  const handleChange = x => {
    setSelectedOption({ x });
    setArr({ code, selectedOption });
    xArray.push({ code, selectedOption });
    console.log(xArray)
  };

  return (
    <div>
      <SelectorData data={arr} />
      <Select
        onChange={handleChange}
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[options[0]]}
        isMulti
        options={options}
      />
    </div>
  );
}
