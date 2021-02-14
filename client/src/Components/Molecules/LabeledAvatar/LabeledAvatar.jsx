import React from "react";
import { PropTypes } from "prop-types";
import Avatar from "../Avatar";

const LabeledAvatar = ({ src, avatarSize, className = "", children }) => (
  <div className={`flex-container ${className}`}>
    <Avatar src={src} size={avatarSize} className="mr-4" />
    {children}
  </div>
);

LabeledAvatar.propTypes = {
  src: PropTypes.string,
  avatarSize: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.element,
};
export default LabeledAvatar;
