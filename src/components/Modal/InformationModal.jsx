import React from "react";
import Modal from "@material-ui/core/Modal";
import Px from "../Px/px";
import { Markup } from "interweave";
import Button from "@material-ui/core/Button";
import { ColorContext } from "../Layouts/Main";

import { useStyles, getModalStyle } from "./Style";

export default function InformationModal(props) {
  const classes = useStyles();
  const modalStyle = getModalStyle();

  const handleCloseModal = () => {
    props.onChange();
  };

  if (props.data) {
    let x = new Px(props.data);
    console.log(x);
    let contact = "";
    let description = "";
    let nextUpdate = "";
    let lastUpdated = "";
    let creationDate = "";
    let source = "";
    let matrix = "";
    let note;

    try {
      contact = x.metadata["CONTACT[fo]"]["TABLE"];
      description = x.metadata["DESCRIPTION[fo]"]["TABLE"];
      nextUpdate = x.metadata["NEXT-UPDATE"]["TABLE"];
      lastUpdated = x.metadata["LAST-UPDATED"]["TABLE"];
      creationDate = x.metadata["CREATION-DATE"]["TABLE"];
      source = x.metadata["SOURCE"]["TABLE"];
      matrix = x.metadata["MATRIX"]["TABLE"];
      note = x.metadata["NOTE[fo]"]["TABLE"];
    } catch (e) {}

    lastUpdated = lastUpdated.substring(0, 4) + "-" + lastUpdated.substring(4);
    lastUpdated = lastUpdated.substring(0, 7) + "-" + lastUpdated.substring(7);
    nextUpdate = nextUpdate.substring(0, 4) + "-" + nextUpdate.substring(4);
    nextUpdate = nextUpdate.substring(0, 7) + "-" + nextUpdate.substring(7);
    creationDate =
      creationDate.substring(0, 4) + "-" + creationDate.substring(4);
    creationDate =
      creationDate.substring(0, 7) + "-" + creationDate.substring(7);

    return (
      <ColorContext.Consumer>
        {color => {
          return (
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={props.open}
              onClose={handleCloseModal}
            >
              <div style={modalStyle} className={classes.paperModal}>
                <h6 id="simple-modal-title">{description}</h6>
                <p id="simple-modal-description">
                  Seinast dagført: {lastUpdated}
                </p>
                <p id="simple-modal-description">
                  Komandi dagføring : {nextUpdate}
                </p>
                <p id="simple-modal-description">Stovnað: {creationDate}</p>
                <p id="simple-modal-description">Kelda: {source}</p>
                <p id="simple-modal-description">Matrisa: {matrix}</p>
                <p id="simple-modal-description">Samband: {contact}</p>
                <br />
                <div id="simple-modal-description">
                  <Markup content={note} />
                </div>
                <Button
                  onClick={handleCloseModal}
                  style={{
                    position: "relative",
                    backgroundColor: color,
                    color: "white",
                    marginTop: "0.3cm"
                  }}
                  variant="contained"
                >
                  lat aftur
                </Button>
              </div>
            </Modal>
          );
        }}
      </ColorContext.Consumer>
    );
  }
  return <div></div>;
}
