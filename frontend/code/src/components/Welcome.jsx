import { useSelector } from "react-redux";
import UserNameWelcome from "./UserNameWelcome";
import UserNameChangeForm from "./UserNameChangeForm";

export default function Welcome() {
  const { changeUserName } = useSelector((state) => state.user);

  return (
    <div className="header">
      <h1 className="welcome-back-msg">Welcome back</h1>
      {changeUserName ? <UserNameChangeForm /> : <UserNameWelcome />}
    </div>
  );
}
