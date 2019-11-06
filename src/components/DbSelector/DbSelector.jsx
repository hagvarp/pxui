import React, { useState } from "react";
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
      // match with the menu
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      // Overwrittes the different states of border
      borderColor: state.isFocused ? null : null,
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? props.mainColor : null
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
