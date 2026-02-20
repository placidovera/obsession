import { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="custom-navbar">
  <div className="nav-container d-flex justify-content-between align-items-center">
  <img 
    src="/imagenes/logoObsession.jpeg" 
    alt="Obsession logo" 
    className="brand-logo"
  />

  
          {/* Botón hamburguesa visible solo en móviles */}
          <button
            className="d-md-none"
            onClick={toggleMenu}
            style={{
              background: "none",
              border: "none",
              fontSize: "2rem",
              color: "#eaeaea",
            }}
          >
            ☰
          </button>

          {/* Lista de navegación */}
      <ul
  className={`nav-list ${
    menuOpen ? "d-flex flex-column" : "d-none"
  } d-md-flex gap-3`}
>
  <li>
    <Link to="/">Inicio</Link>
  </li>

  <li>
    <Link to="/fechas">Fechas</Link>
  </li>

  <li className="social-icon">
    <a
      href="https://wa.me/5493434624862"
      target="_blank"
      rel="noreferrer"
    >
      Contacto
    </a>
  </li>
</ul>

        </div>
      </nav>
    </header>
  );
};

export default NavBar;