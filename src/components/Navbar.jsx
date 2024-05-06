import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../images/logo.png";
import Help from "../images/ajudaazul 1.png";
import Menu from "../images/menu.png";
import Bag from "../images/sacolinhascoqueiral 1.png";
import Profile from "../images/Group 159.png";
import Notification from "../images/Group 173.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="logo coqueiral" className="logo" />
      <div className="header-inner-content">
        <nav>
          <ul>
            <li>
              <Link to="/" className="navlink">
                INÍCIO
              </Link>
            </li>
            <li> - </li>
            <li>
              <Link to="/about" className="navlink">
                SOBRE
              </Link>
            </li>
            <li> - </li>
            <li>VENDER NA COQUEIRAL</li>
            <li> - </li>
            <li>ÉTICA</li>
          </ul>
        </nav>
        <div className="nav-icon-container">
          <img src={Menu} alt="menu" className="menu-button" />
          <img src={Help} alt="ajuda" className="ajuda" />
          <img src={Bag} alt="compra" className="sacola" />
          <img src={Profile} alt="perfil" className="perfil" />
          <img src={Notification} alt="notificação" className="notificacao" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
