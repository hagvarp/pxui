import React from "react";
import Logo from "../../img/logo.svg";
import Grid from "@material-ui/core/Grid";

export default function Header() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <a href="http://www.hagstova.fo">
            <img
              src={Logo}
              style={{ height: "3em", alignIem: "left" }}
              alt="Hagstovan"
              onClick="javascript:window.location='https://www.facebook.com/pages/Gr81';"
            />
          </a>
          <hr />
        </Grid>
      </Grid>
    </div>
  );
}
