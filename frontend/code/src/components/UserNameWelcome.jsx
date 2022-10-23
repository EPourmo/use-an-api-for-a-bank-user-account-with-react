import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../features/user/userSlice";

const UserNameWelcome = () => {
  const { userInfo, changeUserName } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div>
      {userInfo && (
        <h1 className="user-name">{`${userInfo.firstName} ${userInfo.lastName}!`}</h1>
      )}
      <button className="edit-button" onClick={() => dispatch(changeUser())}>
        Edit Name
      </button>
    </div>
  );
};

export default UserNameWelcome;
