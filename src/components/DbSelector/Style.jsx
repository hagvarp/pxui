import "font-awesome/css/font-awesome.min.css";

export default function Style(props) {
  //https://codesandbox.io/s/distracted-lamport-i4lfq
  const customStyles = {
    control: (base, state) => ({
      ...base,
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      borderColor: state.isFocused ? props : null,
      boxShadow: state.isFocused ? props : props,
      "&:hover": {
        borderColor: state.isFocused ? props : null
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

  return customStyles;
}
