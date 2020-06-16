import React, { useState, useEffect } from "react";

const COLOR = [
  "primary",
  "warning",
  "success",
  "danger",
  "primary-outline",
  "warning-outline",
  "success-outline",
  "danger-outline"
];

const BORDER = ["solid", "outline"];

const SIZES = ["small", "medium", "large"];

const SHAPES = ["bullet", "box", "block"];

function Button({ children, onClick, type, color, border, size, shape }) {
  const checkButtonColor = COLOR.includes(color) ? color : COLOR[0];
  const checkButtonBorder = BORDER.includes(border) ? border : BORDER[1];
  const checkButtonSize = SIZES.includes(size) ? size : SIZES[1];
  const checkButtonShape = SHAPES.includes(shape) ? shape : SHAPES[1];

  //setting ripple effect
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRipple, setIsRipple] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRipple(true);
      setTimeout(() => setIsRipple(false), 1200);
    } else setIsRipple(false);
  }, [coords]);

  useEffect(() => {
    if (!isRipple) setCoords({ x: -1, y: -1 });
  }, [isRipple]);


  return (
    <button
      className={`btn ${checkButtonColor} ${checkButtonSize} ${checkButtonBorder} ${checkButtonShape}`}
      onClick={e => {
        var rect = e.target.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        setCoords({ x, y });
        onClick && onClick(e);
      }}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
