import React from "react";
import { PropTypes } from "prop-types";
import { Grid } from "@material-ui/core";
import { Icon } from "../../Atoms";

import styles from "./Thumbnails.module.css";

const Thumbnails = ({
  src = [],
  style = null,
  className = "",
  justify = "space-evenly",
}) => (
  <Grid
    item
    container
    justify={justify}
    alignItems="center"
    className={`${styles.thumbnails} ${className}`}
  >
    {src.map((item, index) => (
      <Icon
        key={index.toString()}
        src={item.src}
        title={item.title}
        style={style}
        className={styles.item}
      />
    ))}
  </Grid>
);

Thumbnails.propTypes = {
  src: PropTypes.arrayOf(Object).isRequired,
  className: PropTypes.string,
  justify: PropTypes.string,
  style: PropTypes.instanceOf(Object),
};
export default Thumbnails;
