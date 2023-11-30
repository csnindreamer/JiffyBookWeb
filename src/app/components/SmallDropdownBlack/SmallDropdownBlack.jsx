import PropTypes from "prop-types";
import React, { useReducer } from "react";
import "./style.css";

export const SmallDropdownBlack = ({
  property1,
  className,
  text = "Value",
  options = [],
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
    selectedValue: null,
  });

  const handleOptionClick = (option) => {
    dispatch({ type: "select", payload: option });
  };

  return (
    <div
      className={`small-dropdown-black ${state.property1} ${className}`}
      onClick={() => {
        dispatch({ type: "click" });
      }}
    >
      <div className="frame">
        <div className="value">{state.selectedValue || text}</div>
        <img
          className="caret-down"
          alt="Caret down"
          src={
            state.property1 === "on-click"
              ? "https://cdn.animaapp.com/projects/6541c130f6b65238ed92eca1/releases/6549b3cd61a415cac322d3f5/img/caret-down.svg"
              : "https://cdn.animaapp.com/projects/6541c130f6b65238ed92eca1/releases/6549b3cd61a415cac322d3f5/img/caret-down-1.svg"
          }
        />
      </div>
      {state.property1 === "on-click" && (
        <>
          {options.map((option, index) => (
            <div
              className="value-wrapper"
              key={index}
              onClick={() => handleOptionClick(option)}
            >
              <div className="value">{option}</div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action.type) {
    case "click":
      return {
        ...state,
        property1: state.property1 === "on-click" ? "default" : "on-click",
      };
    case "select":
      return {
        ...state,
        selectedValue: action.payload,
        property1: "default",
      };
    default:
      return state;
  }
}

SmallDropdownBlack.propTypes = {
  property1: PropTypes.oneOf(["on-click", "default"]),
  text: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};


