import React, { useState } from "react";
import Select from "react-select";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
    control: (base, state) => ({
      ...base,
      // match with the menu
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      // Overwrittes the different states of border
      borderColor: state.isFocused ? props.mainColor : null,
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? props.mainColor : props.mainColor
      }
    }),
    menu: base => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // beautify the word cut by adding a dash see https://caniuse.com/#search=hyphens for the compatibility
      hyphens: "auto",
      // kill the gap
      marginTop: 0,
      textAlign: "left",
      // prevent menu to scroll y
      wordWrap: "break-word"
    }),
    menuList: base => ({
      ...base,
      // kill the white space on first and last option
      padding: 0
    })
  };
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
      {codeRequired(elimination, code)}
      <Select
        className="selectorMulti"
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
