import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, Typography, Tooltip } from "@material-ui/core";
import { Slideshow } from "@material-ui/icons";
import { MultiImagesView } from "../../Molecules";
import { Thumbnails } from "../../Organisms";
import Data from "../../../utilities/Data";

import styles from "./Projects.module.css";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Grid className={styles.projects}>
      <Grid item>
        <Typography variant="h2" align="center" color="textPrimary">
          {t("Projects")}
        </Typography>
      </Grid>

      {Data.Projects.map((Project, index) => (
        <Grid item className={styles.item} key={index.toString()}>
          <Grid
            item
            container
            wrap="nowrap"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item className={styles.images}>
              <MultiImagesView
                src={Project.Images}
                style={{ height: "45vh" }}
              />
            </Grid>

            <Grid item className={`${styles.info} position-relative`}>
              {Project.Presentation && (
                <Grid item className={styles.presentation}>
                  <a
                    target="_blank"
                    rel="noreferrer presentation"
                    href={Project.Presentation}
                  >
                    <Grid item container wrap="nowrap" alignItems="center">
                      <Tooltip title={t("Presentation")}>
                        <Slideshow classes={{ root: "icon" }} />
                      </Tooltip>
                    </Grid>
                  </a>
                </Grid>
              )}

              <Grid item dir="auto">
                <Typography variant="h3" color="textPrimary">
                  {t(Project.Name)}
                </Typography>
              </Grid>

              <Grid item dir="auto">
                <Typography
                  variant="h5"
                  color="textPrimary"
                  classes={{ root: styles.description }}
                >
                  {t(Project.Description)}
                </Typography>
              </Grid>

              <Grid item>
                <Thumbnails
                  src={Project.Clients}
                  style={{ height: "5rem" }}
                  className="mt-15"
                />
              </Grid>
              <Grid item className={styles.nonPhoneToggle}>
                <Grid item>
                  <Thumbnails
                    src={Project.Technologies}
                    style={{ height: "5rem" }}
                    className="mt-30"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={styles.phoneToggle}>
            <Grid item>
              <Thumbnails
                src={Project.Technologies}
                style={{ height: "5rem" }}
                className="mt-30"
              />
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
