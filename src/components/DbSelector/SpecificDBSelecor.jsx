import React from "react";
import Select from "react-select";
import "font-awesome/css/font-awesome.min.css";
import Style from "./Style";
import { ColorContext } from "../Layouts/Main";

export default function SpecificDBSelecor(props) {
  const handleChange = e => {
    props.onChange(e);
  };

  return (
    <ColorContext.Consumer>
      {color => {
        return (
          <Select
            className="selectors"
            styles={Style(color)}
            onChange={handleChange}
            closeMenuOnSelect={true}
            defaultValue={[props.db.data[0]]}
            options={props.db.data}
          />
        );
      }}
    </ColorContext.Consumer>
  );
}
