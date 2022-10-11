import argentBankLogo from "../assets/argentBankLogo.png";

export default function Header({ isConnected }) {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="#">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href="#">
          <i className="fa fa-user-circle"></i>
          {isConnected ? "Tony" : "Sign In"}
        </a>
        {isConnected && (
          <a className="main-nav-item" href="./index.html">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </a>
        )}
      </div>
    </nav>
  );
}
