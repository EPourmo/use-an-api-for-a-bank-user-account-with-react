import argentBankLogo from "../assets/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserDetails } from "../features/user/userAction";
import { logout } from "../features/user/userSlice";

export default function Header() {
  const { userInfo, isConnected } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // get data from API
  useEffect(() => {
    if (isConnected) {
      dispatch(getUserDetails());
    }
  }, [isConnected, dispatch]);

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {userInfo ? (
          <>
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
              {userInfo.firstName}
            </Link>
            <Link
              className="main-nav-item"
              to="/"
              onClick={() => dispatch(logout())}
            >
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
