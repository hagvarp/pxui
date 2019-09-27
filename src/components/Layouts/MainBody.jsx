import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Selectors from "../Select/Selectors";
import "./Index.css";
import ListMenu from "../ListMenu/ListMenu";
import TableData from "../TablesData/TablesData";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary
  }
}));

export default function MainBody() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState("HEEEEY");

  const classes = useStyles();
  const handleChange = e => {
    setUrl(e);
  };

  const wtf = e => {
    console.log("WTF was activated");
    console.log(e);
    const tmp = e;
    setData(tmp);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <ListMenu onClickItem={handleChange} />
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <Selectors onChange={wtf} url={url} />
          </Paper>
          <Paper className={classes.paper}>
            <TableData data={data} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
