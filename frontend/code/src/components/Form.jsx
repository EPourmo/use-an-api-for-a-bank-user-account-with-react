import InputWrapper from "./InputWrapper";
import { Link } from "react-router-dom";

export default function Form() {
  const inputsData = [
    {
      id: 1,
      labelFor: "username",
      inputName: "Username",
      typeName: "text",
      IdName: "username",
    },
    {
      id: 2,
      labelFor: "password",
      inputName: "Password",
      typeName: "password",
      IdName: "password",
    },
  ];

  const inputs = inputsData.map((item) => {
    return (
      <InputWrapper
        key={item.id}
        labelFor={item.labelFor}
        inputName={item.inputName}
        typeName={item.typeName}
        IdName={item.IdName}
      />
    );
  });
  return (
    <form>
      {inputs}
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <Link to="/profile" className="sign-in-button">
        Sign In
      </Link>
      {/* <button class="sign-in-button">Sign In</button> */}
    </form>
  );
}
