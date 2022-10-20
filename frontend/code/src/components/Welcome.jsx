import { useDispatch, useSelector } from "react-redux";
import UserNameWelcome from "./UserNameWelcome";
import UserNameChangeForm from "./UserNameChangeForm";

export default function Welcome() {
  const { userInfo, changeUserName } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <h1>Welcome back</h1>
      {changeUserName ? <UserNameChangeForm /> : <UserNameWelcome />}
    </div>
  );
}
