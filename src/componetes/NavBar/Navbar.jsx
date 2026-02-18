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
          <strong className="brand-name">OBSESSION</strong>
<svg className="ecg" viewBox="0 0 500 60" preserveAspectRatio="none">
  <path d="M0 30 L80 30 L100 10 L120 50 L140 30 L220 30 L240 5 L260 55 L280 30 L500 30" />
</svg>

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