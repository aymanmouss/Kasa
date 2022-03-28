import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/kasa-logo.png";
import "./style.css";
function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <img className='logoHeader' src={Logo} alt='kasa logo' width={190} />
      </Link>
      <nav className='heade_nav'>
        <Link to='/' className='link'>
          Accueil
        </Link>
        <Link to='/a-propos' className='link'>
          A Propos
        </Link>
      </nav>
    </div>
  );
}
export default Header;
