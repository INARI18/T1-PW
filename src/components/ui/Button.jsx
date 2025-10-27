import "../../assets/styles/Ui.css";
import React from "react";
import PropTypes from "prop-types";

export default function Button({ text, variant = "", onClick }) {
  return (
    <button className={`button--${variant}`} onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
