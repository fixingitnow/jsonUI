const Input = ({ data, style }) => (
    <input style={style.webStyle} placeholder={data.placeholder} value={data.value} />
);

export default Input