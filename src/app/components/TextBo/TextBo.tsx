
/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  text: string;
  onClick?: () => void;
}

export const TextBo = ({ className, text = "Text 12BO",onClick  }: Props): JSX.Element => {
    const handleClick = () => {
        if (onClick) {
          onClick();
        }
      };
  return (
    <div className={`text-bo ${className}`} onClick={handleClick}>
      <div className="text-2">{text}</div>
    </div>
  );
};

TextBo.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
