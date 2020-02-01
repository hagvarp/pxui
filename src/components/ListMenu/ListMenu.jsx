import React, { Fragment, useEffect, useState } from "react";
import { ListGroupItem } from "reactstrap";
import axios from "axios";
import Loading from "../Loading/Loading";
import TreeMenu from "react-simple-tree-menu";
import "../../styles/style.css";
import { ColorContext } from "../Layouts/Main";
import { openedIcon, closedIcon, tableIcon } from "./Icons";

const DEFAULT_PADDING = 16;
const ICON_SIZE = 4;
const LEVEL_SPACE = 16;

let tmpCounter = 0;

export default function ListMenu(props) {
  const [data, setData] = useState(null);
  const [counter, setCounter] = useState(0);
  let headline = props.statBank.label || "Statistics Faroe Islands";

  const ToggleIcon = ({ on }) => (
    <ColorContext.Consumer>
      {color => {
        return (
          <span style={{ marginRight: 8 }}>
            {on ? openedIcon(color) : closedIcon(color)}
          </span>
        );
      }}
    </ColorContext.Consumer>
  );

  // https://github.com/iannbing/react-simple-tree-menu/blob/master/stories/index.stories.js

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
        //zIndex: focused ? 999 : "unset",
        position: "relative",
        fontFamily: "open sans",
        borderStyle: "none"
        // boolean to render list group items edge-to-edge in a parent container
      }}
    >
      {hasNodes && (
        <div
          onClick={e => {
            hasNodes && toggleNode && toggleNode();
            e.stopPropagation();
          }}
        >
          <ToggleIcon on={isOpen}></ToggleIcon>
          {label}
        </div>
      )}
      {hasNodes ? (
        ""
      ) : (
        <div>
          {tableIcon()} {label}
        </div>
      )}
    </ListGroupItem>
  );

  useEffect(() => {
    getDataTree(props.statBank.value || props.statBank);
  }, [props.statBank]);

  const handleClick = e => {
    if (e.type === "t") {
      const mainUrl = props.statBank.value || props.statBank;
      const tmpId = e.key;
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
                menuArray.nodes = await fetchDataTree(
                  url + "/" + menuArray.key
                );
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
      //Changing the object to fit react-simple-menu library
      for (var i = 0; i < menuArray.length; i++) {
        if (menuArray[i]["id"]) {
          menuArray[i].key = menuArray[i]["id"];
          delete menuArray[i].id;
        }

        if (menuArray[i]["text"]) {
          menuArray[i].label = menuArray[i]["text"];
          delete menuArray[i].text;
        }
      }
      return menuArray;
    }
  };

  async function fetchData(url) {
    let fData = await axios.get(url);
    return fData.data;
  }

  if (data) {
    return (
      <ColorContext.Consumer>
        {color => {
          return (
            <Fragment>
              <div
                className="headLine"
                style={{
                  color: color
                }}
              >
                {headline}
              </div>
              {/* <TreeMenu className="tree-item" data={data} onClickItem={handleClick} /> */}
              <TreeMenu
                data={data}
                debounceTime={500}
                onClickItem={handleClick}
              >
                {({ search, items }) => (
                  <>
                    <input
                      style={{
                        borderColor: color
                      }}
                      type="text"
                      onChange={e => search(e.target.value)}
                      placeholder="Type and search"
                    />
                    <ListGroupItem
                      style={{
                        border: "none"
                      }}
                    >
                      {items.map(({ reset, ...props }) => (
                        <ListItem {...props}></ListItem>
                      ))}
                    </ListGroupItem>
                  </>
                )}
              </TreeMenu>
              ;
            </Fragment>
          );
        }}
      </ColorContext.Consumer>
    );
  }

  return (
    <ColorContext.Consumer>
      {color => {
        return (
          <div>
            <Loading type="spin" color={color} height="5%" width="5%"></Loading>
          </div>
        );
      }}
    </ColorContext.Consumer>
  );
}
