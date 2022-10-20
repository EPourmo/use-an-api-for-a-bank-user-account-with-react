import { useDispatch, useSelector } from "react-redux";
// import { changeUser } from "../redux";

export default function Welcome() {
  const { userInfo, isConnected } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const user = {
    firstName: "Test",
    lastName: "Test1",
  };
  return (
    <div className="header">
      {userInfo && (
        <h1>
          Welcome back
          <br />
          {`${userInfo.firstName} ${userInfo.lastName} !`}
        </h1>
      )}
      <button
        className="edit-button"
        // onClick={() => dispatch(changeUser("Ermane"))}
      >
        Edit Name
      </button>
    </div>
  );
}
