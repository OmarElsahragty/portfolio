import React, { useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { Language, Facebook, LinkedIn } from "@material-ui/icons";
import { ImagesSrc } from "../../../utilities/Helpers";
import { LabeledAvatar } from "../../Molecules";
import Data from "../../../utilities/Data";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { t } = useTranslation();

  return (
    <nav className={styles.navbar}>
      <Grid
        container
        alignItems="center"
        justify="space-between"
        className={`${styles.container} py-10`}
      >
        <Grid item>
          <LabeledAvatar src={ImagesSrc.avatarOne}>
            <Grid item className="flex-container">
              <Grid item className="px-10">
                <Typography variant="h1" color="textPrimary">
                  {Data.Brand}
                </Typography>
              </Grid>

              <Tooltip title={t("Language")}>
                <IconButton
                  aria-label={t("Language")}
                  onClick={(e) => setAnchorEl(e.currentTarget)}
                >
                  <Language classes={{ root: styles.languageIcon }} />
                </IconButton>
              </Tooltip>
              <Menu
                keepMounted
                elevation={0}
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                classes={{
                  paper: styles.MenuPaper,
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
              >
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null);
                    i18next.changeLanguage("ar");
                  }}
                >
                  <Typography
                    color="textPrimary"
                    classes={{ root: styles.MenuItemText }}
                  >
                    {t("Arabic")}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null);
                    i18next.changeLanguage("en");
                  }}
                >
                  <Typography
                    color="textPrimary"
                    classes={{ root: styles.MenuItemText }}
                  >
                    {t("English")}
                  </Typography>
                </MenuItem>
              </Menu>
            </Grid>
          </LabeledAvatar>
        </Grid>
        {/* <Grid item className={styles.toggle}>
          <Grid container alignItems="center" justify="space-between">
            <Link to="#Home">
              <Typography color="textPrimary" classes={{ root: styles.item }}>
                {t("Home")}
              </Typography>
            </Link>

            <div className="px-10" />

            <Link to="#Services">
              <Typography color="textPrimary" classes={{ root: styles.item }}>
                {t("Services")}
              </Typography>
            </Link>

            <div className="px-10" />

            <Link to="#About">
              <Typography color="textPrimary" classes={{ root: styles.item }}>
                {t("About-Me")}
              </Typography>
            </Link>

            <div className="px-10" />

            <Link to="#Contact">
              <Typography color="textPrimary" classes={{ root: styles.item }}>
                {t("Contact")}
              </Typography>
            </Link>
          </Grid>
        </Grid> */}
        <Grid item>
          <Grid container alignItems="center" justify="space-between">
            <Tooltip title="Facebook">
              <a target="_blank" rel="noreferrer facebook" href={Data.Facebook}>
                <Facebook classes={{ root: "social-icon" }} />
              </a>
            </Tooltip>
            <div className="px-5" />
            <Tooltip title="LinkedIn">
              <a target="_blank" rel="noreferrer linkedin" href={Data.LinkedIn}>
                <LinkedIn classes={{ root: "social-icon" }} />
              </a>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </nav>
  );
};

export default Navbar;
