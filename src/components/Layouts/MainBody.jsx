import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Selectors from "../Select/Selectors";
import "./Index.css";
import ListMenu from "../ListMenu/ListMenu";

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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <ListMenu />
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <Selectors />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
