import argentBankLogo from "../assets/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header({ isConnected }) {
  const user = useSelector((state) => state.user);
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
        <Link className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          {isConnected ? user.firstName : "Sign In"}
        </Link>
        {isConnected && (
          <Link className="main-nav-item" to="/">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        )}
      </div>
    </nav>
  );
}
