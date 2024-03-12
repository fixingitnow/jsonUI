const TextArea = ({ data, style }) => {
    const { placeholder = '', value = '' } = data || {};
    const textAreaStyle = style?.webStyle || {};

    return (
        <textarea
            placeholder={placeholder}
            defaultValue={value}
            style={textAreaStyle}
        />
    );
};

export default TextArea;