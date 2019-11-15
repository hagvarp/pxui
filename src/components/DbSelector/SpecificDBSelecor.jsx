import React from "react";
import Select from "react-select";
import "font-awesome/css/font-awesome.min.css";
import Style from "./Style";

export default function SpecificDBSelecor(props) {
  const handleChange = e => {
    props.onChange(e);
  };

  return (
    <Select
      className="selectors"
      styles={Style(props.mainColor)}
      onChange={handleChange}
      closeMenuOnSelect={true}
      defaultValue={[props.db.data[0]]}
      options={props.db.data}
    />
  );
}
