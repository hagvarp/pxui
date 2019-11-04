import React, { Fragment, useEffect, useState } from "react";
import "../../styles/style.css";
import { ListGroupItem, Input, ListGroup } from "reactstrap";

import Loading from "../Loading/Loading";
import TreeMenu, { ItemComponent } from "react-simple-tree-menu";
import axios from "axios";
//Json object of Hagstovan menu
import staticData from "../../json/menu";
import G from "../../img/greenland.png";
const DEFAULT_PADDING = 16;
const ICON_SIZE = 4;
const LEVEL_SPACE = 16;

const openedIcon = <i class="fa fa-caret-up" aria-hidden="true" alt="-"></i>;

const closedIcon = <i class="fa fa-caret-down" aria-hidden="true" alt="+"></i>;

const ToggleIcon = ({ on }) => (
  <span style={{ marginRight: 8 }}>{on ? openedIcon : closedIcon}</span>
);

const ListItem = ({
  level = 0,
  hasNodes,
  isOpen,
  label,
  searchTerm,
  openNodes,
  toggleNode,
  matchSearch,
  focused,
  ...props
}) => (
  <ListGroupItem
    {...props}
    style={{
      paddingLeft: DEFAULT_PADDING + ICON_SIZE + level * LEVEL_SPACE,
      cursor: "pointer",
      boxShadow: focused ? "0px 0px 5px 0px #222" : "none",
      zIndex: focused ? 999 : "unset",
      position: "relative",
      fontFamily: "Open Sans,sans-serif"
    }}
  >
    {hasNodes && (
      <div
        onClick={e => {
          hasNodes && toggleNode && toggleNode();
          e.stopPropagation();
        }}
      >
        <div>
          <ToggleIcon on={isOpen}></ToggleIcon>
          {label}
        </div>
      </div>
    )}
    {hasNodes ? "" : <div>{label}</div>}
  </ListGroupItem>
);

let tmpCounter = 0;

export default function ListMenu(props) {
  const [data, setData] = useState(null);
  const [counter, setCounter] = useState(0);
  let headline = props.statBank.label || "Hagtalsgrunnurin";

  useEffect(() => {
    setData(null);
    getDataTree(props.statBank.value || props.statBank);
  }, [props.statBank]);

  const handleClick = e => {
    if (e.type === "t") {
      const mainUrl = props.statBank.value || props.statBank;
      const tmpId = e.id;
      const tmpUrl = mainUrl + tmpId;
      props.onClickItem(tmpUrl);
    }
  };

  async function getDataTree(statBank) {
    const dataTree = await fetchDataTree(statBank);

    //When there are many DataBases
    for (var i = 0; i < dataTree.length; i++) {
      if (dataTree[i]["dbid"]) {
        dataTree[i].id = dataTree[i]["dbid"];
        dataTree[i].type = "l";
        delete dataTree[i].dbid;
      }
    }

    await setData(dataTree);
  }

  //Recursive function
  const fetchDataTree = async url => {
    let menuArray = await fetchData(url);
    if (menuArray) {
      Promise.all(
        menuArray.map(async menuArray => {
          setTimeout(async () => {
            try {
              if (menuArray.type === "l") {
                menuArray.nodes = await fetchDataTree(url + "/" + menuArray.id);
              }
            } catch (error) {
              console.log(error);
              throw error;
            }
          }, 0);
        })
      );
      //Show menu being fetched
      setCounter(tmpCounter++);
      return menuArray;
    }
  };

  async function fetchData(url) {
    let fData;
    await axios
      .get(url)
      .then(response => {
        fData = response.data;
      })
      .catch(error => {});
    return fData;
  }

  if (data) {
    return (
      <Fragment>
        <div className="headLine">{headline}</div>
        {/* <TreeMenu className="tree-item" data={data} onClickItem={handleClick} /> */}

        <TreeMenu data={data} debounceTime={500} onClickItem={handleClick}>
          {({ search, items }) => (
            <>
              <input
                type="text"
                onChange={e => search(e.target.value)}
                placeholder="Type and search"
              />
              <ListGroupItem>
                {items.map(({ reset, ...props }) => (
                  <ListItem {...props}></ListItem>
                ))}
              </ListGroupItem>
            </>
          )}
        </TreeMenu>
      </Fragment>
    );
  }

  return (
    <div>
      <Loading type="spin" color="#2d4182" height="5%" width="5%"></Loading>
    </div>
  );
}
