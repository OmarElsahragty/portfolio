import React from "react";
import { Grid, Tooltip } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";

import { ImagesSrc } from "../../../utilities/Helpers";
import { Copyrights } from "../../Atoms";
import { Avatar } from "../../Molecules";
import Data from "../../../utilities/Data";

import styles from "./Footer.module.css";

const Footer = () => (
  <Grid item className={styles.footer}>
    <Grid
      container
      alignItems="center"
      justify="space-between"
      className={styles.container}
    >
      <Grid item>
        <Avatar src={ImagesSrc.avatarThree} size={8.5} />
      </Grid>

      <Grid item>
        <Copyrights />
      </Grid>

      <Grid item>
        <Tooltip title="Github">
          <a target="_blank" rel="noreferrer github" href={Data.Github}>
            <GitHub classes={{ root: "social-icon" }} />
          </a>
        </Tooltip>
      </Grid>
    </Grid>
  </Grid>
);

export default Footer;
