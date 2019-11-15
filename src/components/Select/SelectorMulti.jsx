import React from "react";
import Select from "react-select";
import Style from "./Style";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SelectorMulti(props) {
  const handleChange = code => variables => {
    props.callBack(code, variables);
  };

  const codeRequired = () => {
    if (props.elimination === true) {
      return <div className="selectorsHeadLine">{props.text} </div>;
    } else {
      return (
        <div className="selectorsHeadLine">
          {props.text}{" "}
          <i className="fa fa-exclamation-circle" style={{ color: "red" }} />
        </div>
      );
    }
  };

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
      {codeRequired(props.elimination, props.code)}
      <Select
        className="selectorMulti"
        styles={Style(props.mainColor)}
        onChange={handleChange(props.code)}
        closeMenuOnSelect={false}
        defaultValue={[props.options[0]]}
        isMulti
        options={props.options}
      />
    </div>
  );
}
