import React, { useState } from 'react';

const Button = ({ data, style }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Determine the base style, hover style, and focus style
  const baseStyle = style?.webStyle || {};
  const hoverStyle = style?.actions?.onHover || {};
  const focusStyle = style?.actions?.onFocus || {};

  // Combine styles based on interaction state
  const currentStyle = {
    ...baseStyle,
    ...(isHovered ? hoverStyle : {}),
    ...(isFocused ? focusStyle : {}),
  };

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={currentStyle}
    >
      {data.title}
    </button>
  );
};

  
export default Button;