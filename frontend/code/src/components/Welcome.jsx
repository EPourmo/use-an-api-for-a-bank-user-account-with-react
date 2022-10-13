import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../redux";

export default function Welcome() {
  const user = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {`${user.firstName} ${user.lastName} !`}
      </h1>
      <button
        className="edit-button"
        onClick={() => dispatch(changeUser("Ermane"))}
      >
        Edit Name
      </button>
    </div>
  );
}
