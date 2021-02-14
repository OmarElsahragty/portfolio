import React from "react";
import { PropTypes } from "prop-types";
import { useTranslation } from "react-i18next";
import { Tooltip } from "@material-ui/core";
import styled from "styled-components";

const Visual = styled.img`
  width: ${(props) => props?.style?.width};
  height: ${(props) => props?.style?.height};
  cursor: ${(props) => props?.style?.cursor};
`;

const Icon = ({
  src,
  title,
  style = {},
  className = "",
  onClick = null,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <Tooltip title={t(title)}>
      <Visual
        {...props}
        src={src}
        alt="icon"
        style={style}
        onClick={onClick}
        className={className}
      />
    </Tooltip>
  );
};

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.instanceOf(Object),
  onClick: PropTypes.instanceOf(Function),
};

export default Icon;
