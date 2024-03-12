import React, { useState } from 'react';

const Image = ({ value, style }) => {
  const [currentStyle, setCurrentStyle] = useState(style?.webStyle || {});

  const handleMouseEnter = () => {
    const hoverStyle = style?.actions?.onHover;
    if (hoverStyle) {
      setCurrentStyle({ ...currentStyle, ...hoverStyle });
    }
  };

  const handleMouseLeave = () => {
    setCurrentStyle(style?.webStyle || {});
  };

  return (
    <img
      src={value}
      alt={value}
      style={currentStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default Image;