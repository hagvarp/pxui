import React from "react";
import Select from "react-select";
import "font-awesome/css/font-awesome.min.css";
import Style from "./Style";

import statBanks from "../../json/statBanks";

export default function DbSelector(props) {
  const handleChange = e => {
    props.onChange(e);
  };

  return (
    <Select
      className="selectors"
      styles={Style(props.mainColor)}
      onChange={handleChange}
      closeMenuOnSelect={true}
      defaultValue={[statBanks[0]]}
      options={statBanks}
    />
  );
}
