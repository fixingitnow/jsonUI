const TextField = ({ data, style }) => {
  const { placeholder = '', value = '' } = data || {};
  const textFieldStyle = style?.webStyle || {};

  const handleFocus = (e) => {
    if (style?.actions?.onFocus) {
      Object.assign(e.target.style, style.actions.onFocus);
    }
  };

  const handleBlur = (e) => {
    Object.assign(e.target.style, textFieldStyle);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      defaultValue={value}
      style={textFieldStyle}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default TextField