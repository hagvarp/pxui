import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "font-awesome/css/font-awesome.min.css";

import statBanks from "../../json/statBanks";
const animatedComponents = makeAnimated();

export default function DbSelector(props) {
  const handleChange = e => {
    console.log(e);
    props.onChange(e);
  };

  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      onChange={handleChange}
      closeMenuOnSelect={true}
      components={animatedComponents}
      defaultValue={[statBanks[0]]}
      options={statBanks}
    />
  );
}
