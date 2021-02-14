import React from "react";
import { PropTypes } from "prop-types";
import Modal from "@material-ui/core/Modal";

import styles from "./ImageFullPreview.module.css";

const ImageFullPreview = ({
  visible,
  visibleabltyToggle,
  src,
  children = null,
}) => (
  <Modal
    open={visible}
    onClose={visibleabltyToggle}
    className={styles.imageFullPreview}
  >
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={src} alt="ImageFullPreview" />
      </div>

      {children}
    </div>
  </Modal>
);

ImageFullPreview.propTypes = {
  visible: PropTypes.bool,
  visibleabltyToggle: PropTypes.instanceOf(Function),
  src: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default ImageFullPreview;
