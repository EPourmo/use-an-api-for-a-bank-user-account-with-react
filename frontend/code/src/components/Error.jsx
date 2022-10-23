import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="error-page">
      <h1 className="error__404">Erreur 404</h1>
      <p className="error__msg">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error__link">
        <p>Retourner sur la page d’accueil</p>
      </Link>
    </div>
  );
};

export default Error;
