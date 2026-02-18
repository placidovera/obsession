import React, { useState, useEffect } from "react";
import { getEvent } from "../fechas";

const Fechas = () => {
  const [fechas, setFechas] = useState([]);

  useEffect(() => {
    getEvent()
      .then((res) => setFechas(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="fechas-container">
      <h2>Próximas Fechas</h2>

      {fechas.length === 0 ? (
        <p>No hay fechas cargadas</p>
      ) : (
        <ul className="fechas-list">
          {fechas.map((evento, index) => (
            <li key={index} className="fecha-item">
              <strong>{evento.fecha}</strong> — {evento.lugar} ({evento.ciudad})
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Fechas;
