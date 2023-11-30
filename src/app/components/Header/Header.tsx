import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  text: string;
  text1: string;
}

export const Header = ({ className, text = "Header", text1 = "Menu" }: Props): JSX.Element => {
  return (
    <div className={`header ${className}`}>
      <div className="rectangle" />
      <img
        className="ellipse"
        alt="Ellipse"
        src="https://cdn.animaapp.com/projects/6541c130f6b65238ed92eca1/releases/6549b3cd61a415cac322d3f5/img/ellipse-1@2x.png"
      />
      <div className="frame">
        <div className="text-wrapper">{text}</div>
      </div>
      <div className="menu-wrapper">
        <div className="text-wrapper">{text1}</div>
      </div>
    </div>
  );
};

Header.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
