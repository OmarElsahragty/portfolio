import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { Image, ImageFullPreview } from "../../Atoms";

const ImageView = ({
  src,
  style = null,
  className = "",
  children = null,
  FullPreviewFooter = null,
}) => {
  const [ImageFullPreviewFlag, setImageFullPreviewFlag] = useState(false);

  return (
    <>
      <Image
        src={src}
        className={className}
        style={{ cursor: "pointer", ...style }}
        onClick={(e) => {
          e.stopPropagation();
          setImageFullPreviewFlag(!ImageFullPreviewFlag);
        }}
      >
        {children}
      </Image>

      <ImageFullPreview
        src={src}
        visible={ImageFullPreviewFlag}
        visibleabltyToggle={(e) => {
          e.stopPropagation();
          setImageFullPreviewFlag(!ImageFullPreviewFlag);
        }}
      >
        {FullPreviewFooter}
      </ImageFullPreview>
    </>
  );
};
ImageView.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.instanceOf(Object),
  children: PropTypes.element,
  FullPreviewFooter: PropTypes.element,
};
export default ImageView;
