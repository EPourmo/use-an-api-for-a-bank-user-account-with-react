export default function InputWrapper({
  labelFor,
  inputName,
  typeName,
  IdName,
}) {
  return (
    <div className="input-wrapper">
      <label htmlFor={labelFor}>{inputName}</label>
      <input type={typeName} id={IdName} />
    </div>
  );
}
