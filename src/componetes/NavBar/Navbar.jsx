import { useState } from "react";
import "./NavBar.css";

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
            <li>Inicio</li>
            <li>Discografía</li>
            <li>Fechas</li>
            <li>Contacto</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;