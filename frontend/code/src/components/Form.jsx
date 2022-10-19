import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { userLogin } from "../features/user/userAction";
import Error from "../components/Error";

export default function Form() {
  // redux : get state data
  const { loading, userInfo, userToken, error, success } = useSelector(
    (state) => state.user
  );
  // "connexion" with Redux
  const dispatch = useDispatch();
  // react form
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (success) {
      navigate("/profile");
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => dispatch(userLogin(data));

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="email" id="username" {...register("email")} required />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password")}
          required
        />
      </div>

      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      {/* <Link
        to="/profile"
        className="sign-in-button"
        onClick={() => dispatch(getInfo(user))}
      >
        Sign In
      </Link> */}
      <button className="sign-in-button" type="submit">
        Sign In
      </button>
    </form>
  );
}
