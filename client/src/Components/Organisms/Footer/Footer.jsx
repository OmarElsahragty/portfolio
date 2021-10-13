import React from "react";
import { Grid, Tooltip } from "@material-ui/core";
import { Code } from "@material-ui/icons";
import { useTranslation } from "react-i18next";

import { ImagesSrc } from "../../../utilities/Helpers";
import { Copyrights } from "../../Atoms";
import { Avatar } from "../../Molecules";
import Data from "../../../Data";

import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
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
          <Tooltip title={t("Code")}>
            <a target="_blank" rel="noreferrer github" href={Data.ProjectRepo}>
              <Code classes={{ root: "social-icon" }} />
            </a>
          </Tooltip>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
