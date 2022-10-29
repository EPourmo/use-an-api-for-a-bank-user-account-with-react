import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { userLogin } from "../features/user/userAction";
import { rememberMeFunc } from "../features/user/userSlice";

export default function Form() {
  // redux : get state data
  const { isConnected, rememberMe, userConnectID, error } = useSelector(
    (state) => state.user
  );
  // "connexion" with Redux
  const dispatch = useDispatch();

  // react form
  const { register, handleSubmit, watch } = useForm({
    defaultValues: userConnectID
      ? {
          email: userConnectID.email,
          password: userConnectID.password,
          remembMe: rememberMe,
        }
      : null,
  });
  const formData = watch();

  const navigate = useNavigate();

  // gather data from form
  const submitForm = (data) => {
    dispatch(userLogin(data));
  };
  // redirect authenticated user to profile screen
  useEffect(() => {
    if (isConnected) {
      navigate("/profile");
      dispatch(rememberMeFunc(formData));
    }
  }, [navigate, isConnected]);

  // remember me : save user connexion id
  useEffect(() => {
    rememberMe
      ? localStorage.setItem(
          "userConnect",
          JSON.stringify({
            email: formData.email,
            password: formData.password,
          })
        )
      : localStorage.removeItem("userConnect");
  }, [rememberMe]);

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="email" id="username" {...register("email")} required />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password")}
          required
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" {...register("remembMe")} />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      {error && <p className="error-msg">{error}</p>}
      <button className="sign-in-button" type="submit">
        Sign In
      </button>
    </form>
  );
}
