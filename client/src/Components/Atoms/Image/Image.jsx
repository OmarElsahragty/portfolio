import React from "react";
import { PropTypes } from "prop-types";

import styled from "styled-components";

const Visual = styled.div`
  width: ${(props) => props?.style?.width || "100%"};
  height: ${(props) => props?.style?.height || "100%"};
  cursor: ${(props) => props?.style?.cursor};
  background-image: url("${(props) => props.src}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`;
const Image = ({
  className = "",
  onClick = null,
  children = null,
  ...props
}) => (
  <Visual {...props} className={className} onClick={onClick}>
    {children}
  </Visual>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.instanceOf(Object),
  onClick: PropTypes.instanceOf(Function),
  children: PropTypes.element,
};

export default Image;
