import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "font-awesome/css/font-awesome.min.css";

const animatedComponents = makeAnimated();

export default function SpecificDBSelecor(props) {
  const handleChange = e => {
    props.onChange(e);
  };
  console.log(props.db.data);
  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      onChange={handleChange}
      closeMenuOnSelect={true}
      components={animatedComponents}
      defaultValue={[props.db.data[0]]}
      options={props.db.data}
    />
  );
}
