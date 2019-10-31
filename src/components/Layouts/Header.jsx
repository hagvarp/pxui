import React from "react";
import Logo from "../../img/logo.svg";
import Grid from "@material-ui/core/Grid";

export default () => (
  <div>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <a href="http://www.hagstova.fo">
          <img
            src={Logo}
            style={{
              height: "3em",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%"
            }}
            alt="Hagstovan"
          />
        </a>
      </Grid>
    </Grid>
  </div>
);
