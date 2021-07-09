import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Grid,
  Typography,
  Tooltip,
  AppBar,
  Tabs,
  Tab,
  Box,
} from "@material-ui/core";
import {
  Event,
  CardMembership,
  Visibility,
  Language,
  Description,
  Email,
} from "@material-ui/icons";
import { ImagesSrc } from "../../../utilities/Helpers";
import { LabeledAvatar } from "../../Molecules";
import { Thumbnails } from "../../Organisms";
import Data from "../../../utilities/Data";

import styles from "./About.module.css";

const About = () => {
  const [tabValue, setTabValue] = useState(0);
  const { t } = useTranslation();

  return (
    <Grid item className={styles.about}>
      <AppBar position="static" color="default">
        <Tabs
          variant="fullWidth"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="primary"
          value={tabValue}
          onChange={(e, newTabValue) => setTabValue(newTabValue)}
        >
          <Tab label={t("Personal")} />
          <Tab label={t("Education")} />
        </Tabs>
      </AppBar>

      <Grid className={styles.container}>
        {tabValue === 0 && (
          <Box>
            <Grid item className="position-relative w-100">
              <Grid item container wrap="nowrap" justify="center">
                <LabeledAvatar avatarSize={9} src={ImagesSrc.avatarTwo}>
                  <Grid item className="px-10">
                    <Typography variant="h1" align="center" color="textPrimary">
                      {t("Name")}
                    </Typography>
                  </Grid>
                </LabeledAvatar>
              </Grid>

              <Grid item container wrap="nowrap" justify="center">
                <Typography
                  variant="caption"
                  align="center"
                  color="textPrimary"
                >
                  {t("Personal-Bio")}
                </Typography>
              </Grid>

              <Grid
                item
                container
                wrap="nowrap"
                justify="center"
                alignItems="center"
              >
                <Tooltip title={t("Email")}>
                  <Email classes={{ root: "icon" }} />
                </Tooltip>
                <Typography variant="h5" align="center" color="textPrimary">
                  {Data.Email}
                </Typography>
              </Grid>

              <Grid
                item
                container
                wrap="nowrap"
                justify="center"
                alignItems="center"
              >
                <Tooltip title={t("Birthday")}>
                  <Event classes={{ root: "icon" }} />
                </Tooltip>
                <Typography variant="h5" align="center" color="textPrimary">
                  {Data.Birthday}
                </Typography>
              </Grid>

              <Grid item>
                <Grid
                  item
                  container
                  wrap="nowrap"
                  justify="center"
                  alignItems="center"
                >
                  <Tooltip title={t("Languages")}>
                    <Language classes={{ root: "icon" }} />
                  </Tooltip>
                  <Typography variant="h3" align="center" color="textPrimary">
                    {t("Languages")}
                  </Typography>
                </Grid>

                <Grid
                  item
                  container
                  wrap="nowrap"
                  justify="center"
                  alignItems="center"
                >
                  {Data.Languages.map((language, index) => (
                    <Grid item className="px-20" key={index.toString()}>
                      <Typography
                        variant="caption"
                        align="center"
                        color="textPrimary"
                      >
                        {`${t(language.name)} - ${t(language.level)}`}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              <Grid item className={styles.Resume}>
                <a target="_blank" rel="noreferrer resume" href={Data.Resume}>
                  <Grid item container wrap="nowrap" alignItems="center">
                    <Tooltip title={t("Resume")}>
                      <Description classes={{ root: "icon" }} />
                    </Tooltip>
                    <Typography variant="h6" align="center" color="textPrimary">
                      {t("Resume")}
                    </Typography>
                  </Grid>
                </a>
              </Grid>
            </Grid>
          </Box>
        )}

        {tabValue === 1 && (
          <Box>
            <Grid item className="w-100">
              <Grid item container wrap="nowrap" justify="center">
                <Thumbnails
                  src={Data.Colleges}
                  className="mb-24"
                  style={{ height: "5rem" }}
                />
              </Grid>

              <Grid item container wrap="nowrap" justify="center">
                <Typography variant="h5" align="center" color="textPrimary">
                  {t("Education-Bio")}
                </Typography>
              </Grid>

              <Grid item>
                <Grid
                  item
                  container
                  wrap="nowrap"
                  justify="center"
                  alignItems="center"
                >
                  <Tooltip title={t("Certificates")}>
                    <CardMembership classes={{ root: "icon" }} />
                  </Tooltip>
                  <Typography variant="h3" align="center" color="textPrimary">
                    {t("Certificates")}
                  </Typography>
                </Grid>

                {Data.Certificates.map((certificate, index) => (
                  <Grid
                    item
                    container
                    wrap="nowrap"
                    justify="center"
                    alignItems="center"
                    key={index.toString()}
                  >
                    <Grid item>
                      <Typography
                        variant="caption"
                        align="center"
                        color="textPrimary"
                      >
                        {t(certificate.name)}
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Tooltip title={t("Show")}>
                        <a
                          target="_blank"
                          rel="noreferrer linkedin"
                          href={certificate.link}
                        >
                          <Visibility classes={{ root: "small-icon" }} />
                        </a>
                      </Tooltip>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default About;
