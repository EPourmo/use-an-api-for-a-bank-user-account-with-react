import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../features/user/userSlice";
import { postUserName } from "../features/user/userAction";

const UserNameChangeForm = () => {
  const { register, handleSubmit } = useForm();
  const submitForm = (data) => {
    dispatch(postUserName(data));
  };

  const { userInfo, changeUserName } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <form onSubmit={handleSubmit(submitForm)} className="change-user-form">
      <div className="change-user-wrapper">
        <div className="input-wrapper">
          <input
            type="text"
            id="firstName"
            {...register("firstName")}
            required
            placeholder="Tony"
            className="change-user-fn"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            id="LastName"
            {...register("lastName")}
            required
            placeholder="Jarvis"
            className="change-user-ln"
          />
        </div>

        <button className="sign-in-button save-btn" type="submit">
          Save
        </button>
        <button
          className="sign-in-button cancel-btn"
          onClick={() => dispatch(changeUser())}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UserNameChangeForm;
