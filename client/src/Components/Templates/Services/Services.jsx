import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, Typography } from "@material-ui/core";
import { ImagesSrc, IconsSrc } from "../../../utilities/Helpers";
import { Thumbnails } from "../../Organisms";

import styles from "./Services.module.css";

const Services = () => {
  const { t } = useTranslation();

  return (
    <Grid
      item
      className={styles.services}
      style={{ backgroundImage: `url(${ImagesSrc.parallax})` }}
    >
      <Grid item>
        <Typography variant="h2" align="center" color="textPrimary">
          {t("Services")}
        </Typography>
      </Grid>
      <Grid
        item
        container
        wrap="nowrap"
        alignItems="center"
        justify="space-between"
        className={styles.container}
      >
        <Thumbnails
          src={[
            IconsSrc.ReactjsRedux,
            IconsSrc.GoogleCloud,
            IconsSrc.Firebase,
            IconsSrc.Nodejs,
            IconsSrc.MongoDB,
            IconsSrc.SQL,
          ]}
          className={styles.thumbnails}
          style={{ height: "5rem" }}
        />
      </Grid>
    </Grid>
  );
};

export default Services;
