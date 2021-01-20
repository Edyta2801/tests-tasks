import React, { useState } from "react";
import PropTypes from "prop-types";

const Switch = ({ onToggle, checked, color, labelOff, labelOn }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggle = () => {
    setIsChecked(!isChecked);
    onToggle(!isChecked);
  };

  const renderLabel = (label, isDisabled) => (
    <span
      className={`Switch-label ${
        isChecked === isDisabled ? "Switch-label--active" : ""
      }`}
    >
      {label}
    </span>
  );

  return (
    <label data-testid="Switch" className="Switch" htmlFor="Switch-input">
      {renderLabel(labelOff, false)}
      <input
        id="Switch-input"
        data-testid="Switch-input"
        className="visually-hidden"
        type="checkbox"
        onChange={toggle}
        checked={isChecked}
      />
      <span className="Switch-slider-wrapper">
        <span className={`Switch-slider ${color}`} />
      </span>
      {renderLabel(labelOn, true)}
    </label>
  );
};

Switch.propTypes = {
  onToggle: PropTypes.func,
  checked: PropTypes.bool,
  color: PropTypes.oneOf(["primary", "secondary"]),
  labelOff: PropTypes.string,
  labelOn: PropTypes.string
};

Switch.defaultProps = {
  onToggle: () => {},
  checked: false,
  color: "primary",
  labelOff: "",
  labelOn: ""
};

export default Switch;
