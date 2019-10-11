import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import DbSelector from "../DbSelector/DbSelector";
import Selectors from "../Select/Selectors";
import ListMenu from "../ListMenu/ListMenu";
import TableData from "../TablesData/TablesData";
import statBanks from "../../json/statBanks";

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
  const [data, setData] = useState("");
  const [statBankUrl, setStatBankUrl] = useState(statBanks[0].value);

  const classes = useStyles();

  const handleChangeUrl = e => {
    setUrl(e);
  };

  const handleChangeData = e => {
    setData(e);
  };

  const handleChangeStatBank = e => {
    setStatBankUrl(e.value);
  };

  return (
    <div className={classes.root}>
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
            <Typography component={"span"}>
              <TableData data={data}></TableData>
              <div style={{ fontSize: "1em" }} id="tableResult"></div>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
