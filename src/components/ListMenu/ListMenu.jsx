import React, { useState, useEffect } from "react";
import "./ListMenu.css";
import { resolve } from "uri-js";

let test = [];
let url = "https://statbank.hagstova.fo/api/v1/fo/H2/";
let t = null;
const ListMenu = () => {
  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        return response.json();
      })
      .then(data => {
        for (let i = 0; i < data.length; i++) {
          let id = data[i].id;
          let type = data[i].type;
          let text = data[i].text;
          let mainOjb = { id, type, text };

          if (type == "l") {
            let tmpUrl = url + id + "/";
            fetch(tmpUrl)
              .then(response => {
                if (!response.ok) {
                  throw new Error("Failed to fetch.");
                }
                return response.json();
              })
              .then(response => {
                test.push({ mainOjb, response });
                console.log(test);                
                //tmpUrl = tmpUrl + id + "/";
              });
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div style={{ fontWeight: "bold", fontSize: "1.5em", color: "#2d4182" }}>
        Hagtalsgrunnur
      </div>
    </div>
  );
};

export default ListMenu;
