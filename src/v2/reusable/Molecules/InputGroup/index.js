import { Label, ErrorWrapper, Input } from "v2/reusable";

const InputGroup = (props) => {
  const {
    id,
    name,
    error,
    placeholder,
    onChange,
    onBlur,
    label,
    type = "text",
    value,
  } = props;
  return (
    <>
      <Label htmlFor={id}>
        {label} {error && <ErrorWrapper id={`${id}Desc`}>{error}</ErrorWrapper>}
      </Label>
      <Input
        type={type}
        name={name}
        id={id}
        value={value}
        aria-describedby={`${id}Desc`}
        placeHolder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
};

export default InputGroup;
