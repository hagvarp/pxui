import React, { Fragment } from "react";
import "../../styles/style.css";
import Loading from "../Loading/Loading";
import TreeMenu from "react-simple-tree-menu";
import data from "../../json/menu";

//CSS from the library
//import "../../../node_modules/react-simple-tree-menu/dist/main.css";

const ListMenu = props => {
  const handleClick = e => {
    if (e.type === "t") {
      const tmpKey = e.key;
      const tmpUrl = "https://statbank.hagstova.fo/api/v1/fo/H2/" + tmpKey;
      props.onClickItem(tmpUrl);
    }
  };
  if (data) {
    return (
      <Fragment>
        <div className="headLine">Hagtalsgrunnur</div>
        <TreeMenu className="tree-item" data={data} onClickItem={handleClick} />
      </Fragment>
    );
  }

  return (
    <Loading type="cylon" color="#2d4182" height="20%" width="20%"></Loading>
  );
};

export default ListMenu;
