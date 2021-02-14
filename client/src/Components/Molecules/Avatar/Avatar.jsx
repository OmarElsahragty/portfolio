import React from "react";
import { PropTypes } from "prop-types";
import ImageView from "../ImageView";

import styles from "./Avatar.module.css";

const Avatar = ({ src, size = 5, className = "" }) => (
  <div className={`${styles.avatar} ${className}`}>
    <ImageView
      src={src}
      style={{ width: `${size}rem`, height: `${size}rem` }}
    />
  </div>
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
};
export default Avatar;
