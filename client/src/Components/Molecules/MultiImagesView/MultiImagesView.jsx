import React, { useState } from "react";
import { PropTypes, string } from "prop-types";
import { useTranslation } from "react-i18next";
import { Grid, Tooltip, IconButton, Typography } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import ImageView from "../ImageView";

import styles from "./MultiImagesView.module.css";

const MultiImagesView = ({ src = [], style = null, className = "" }) => {
  const [ImageNumber, setImageNumber] = useState(0);

  const { t } = useTranslation();

  const actions = (actionsClassName) => (
    <Grid
      item
      container
      wrap="nowrap"
      alignItems="center"
      justify="space-between"
      className={actionsClassName}
    >
      <IconButton
        aria-label={t("Previous")}
        disabled={ImageNumber < 1}
        onClick={(e) => {
          e.stopPropagation();
          setImageNumber((prev) => prev - 1);
        }}
      >
        <Tooltip title={t("Previous")}>
          <ChevronLeft
            className={`${styles.chevronIcon} ${
              ImageNumber < 1 ? styles.chevronIconDisabled : ""
            }`}
          />
        </Tooltip>
      </IconButton>

      <Typography variant="caption" classes={{ root: styles.text }}>
        {`${ImageNumber + 1}/${src.length}`}
      </Typography>

      <IconButton
        aria-label={t("Next")}
        disabled={ImageNumber + 2 > src.length}
        onClick={(e) => {
          e.stopPropagation();
          setImageNumber((prev) => prev + 1);
        }}
      >
        <Tooltip title={t("Next")}>
          <ChevronRight
            className={`${styles.chevronIcon} ${
              ImageNumber + 2 > src.length ? styles.chevronIconDisabled : ""
            }`}
          />
        </Tooltip>
      </IconButton>
    </Grid>
  );

  return (
    <ImageView
      src={src[ImageNumber]}
      className={className}
      style={style}
      FullPreviewFooter={actions()}
    >
      {actions(styles.actions)}
    </ImageView>
  );
};
MultiImagesView.propTypes = {
  src: PropTypes.arrayOf(string).isRequired,
  className: PropTypes.string,
  style: PropTypes.instanceOf(Object),
};
export default MultiImagesView;
