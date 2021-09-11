import React from "react";
import { Typography } from "@material-ui/core";
import Data from "../../../Data";

const Copyrights = () => (
  <Typography variant="h5" color="textPrimary">
    Copyrights &#169; {new Date().getFullYear()} {Data.Brand}
  </Typography>
);

export default Copyrights;
