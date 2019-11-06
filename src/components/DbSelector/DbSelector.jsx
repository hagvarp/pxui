import React from "react";
import Select from "react-select";
import "font-awesome/css/font-awesome.min.css";

import statBanks from "../../json/statBanks";

export default function DbSelector(props) {
  const handleChange = e => {
    props.onChange(e);
  };

  //https://codesandbox.io/s/distracted-lamport-i4lfq
  const customStyles = {
    control: (base, state) => ({
      ...base,
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      borderColor: state.isFocused ? null : null,
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        borderColor: state.isFocused ? props.mainColor : null
      }
    }),
    menu: base => ({
      ...base,
      borderRadius: 0,
      hyphens: "auto",
      marginTop: 0,
      textAlign: "left",
      wordWrap: "break-word"
    }),
    menuList: base => ({
      ...base,
      padding: 0
    })
  };
  return (
    <Select
      className="selectors"
      styles={customStyles}
      onChange={handleChange}
      closeMenuOnSelect={true}
      defaultValue={[statBanks[0]]}
      options={statBanks}
    />
  );
}
