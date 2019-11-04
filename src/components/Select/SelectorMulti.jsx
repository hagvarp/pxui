import React, { useState } from "react";
import Select from "react-select";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "@material-ui/core/Grid";

export default function SelectorMulti(props) {
  const [options] = useState(props.options);
  const [code] = useState(props.code);
  const [text] = useState(props.text);
  const [elimination] = useState(props.elimination);

  const handleChange = code => variables => {
    props.callBack(code, variables);
  };

  const codeRequired = () => {
    if (elimination === true) {
      return <div className="selectorsHeadLine">{text} </div>;
    } else {
      return (
        <div className="selectorsHeadLine">
          {text}{" "}
          <i className="fa fa-exclamation-circle" style={{ color: "red" }} />
        </div>
      );
    }
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted #2d4182",
      color: state.isSelected ? "red" : "#2d4182"
    })
  };
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
      {codeRequired(elimination, code)}
      <Select
        styles={customStyles}
        onChange={handleChange(code)}
        closeMenuOnSelect={false}
        defaultValue={[options[0]]}
        isMulti
        options={options}
      />
    </div>
  );
}
