import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import DbSelector from "../DbSelector/DbSelector";
import Selectors from "../Select/Selectors";
import ListMenu from "../ListMenu/ListMenu";
import TableData from "../TablesData/TablesData";
import statBanks from "../../json/statBanks";
import Footer from "./Footer";
import Header from "./Header";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: "white"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paperX: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #2d4182",
    boxShadow: theme.shadows[1],
    padding: theme.spacing(2, 4, 3),
    width: "90%",
    height: "90%"
  }
}));

export default function MainBody() {
  const [url, setUrl] = useState(null);
  const [data, setData] = useState(null);
  const [statBankUrl, setStatBankUrl] = useState(statBanks[0].value);
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const handleChangeUrl = e => {
    setUrl(e);
  };

  const handleChangeData = e => {
    setData(e);
  };
  const handleChangeStatBank = e => {
    setStatBankUrl(e);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <Header></Header>
      <Container component="main" className={classes.main} maxWidth="m">
        <Grid item xs={12} sm={3}>
          <div style={{ marginBottom: "0.5cm" }} className={classes.paper}>
            <Typography component={"span"}>
              <DbSelector onChange={handleChangeStatBank}>s</DbSelector>
            </Typography>
          </div>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <ListMenu onClickItem={handleChangeUrl} statBank={statBankUrl} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper style={{ marginBottom: "0.5cm" }} className={classes.paper}>
              <Selectors onChange={handleChangeData} url={url} />
            </Paper>
            <Paper className={classes.paper}>
              <Typography onClick={handleOpen} component={"span"}>
                <TableData
                  data={data}
                  contentElement="#tableResult"
                ></TableData>
                <div style={{ fontSize: "1em" }} id="tableResult"></div>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Modal
        onClick={handleOpen}
        className={classes.modal}
        open={open}
        onClose={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div id="x" className={classes.paperX}>
            <TableData data={data} contentElement="#x"></TableData>
            <div style={{ fontSize: "1em" }} id="x"></div>
          </div>
        </Fade>
      </Modal>
      <footer className={classes.footer}>
        <Container maxWidth="m">
          <Typography variant="body1">
            <Divider></Divider>
            <Footer></Footer>
          </Typography>
        </Container>
      </footer>
    </div>
  );
}
