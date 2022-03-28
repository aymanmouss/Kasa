import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Error() {
  return (
    <div className='errorPage'>
      <p className='error-404'>404</p>
      <p className='error-Message'>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to='/' className='error-linkHome'>
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
export default Error;
