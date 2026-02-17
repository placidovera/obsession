import React from 'react'

const canciones = [
  {
    titulo: 'En vos',
    duracion: '3:54',
    url: 'https://open.spotify.com/intl-es/track/1U5mj1AytgqaQFsm2Q0vN0'
  },
  {
    titulo: 'Ven a mi',
    duracion: '4:14',
    url: 'https://open.spotify.com/intl-es/track/3npt7e8tOdOpCE5S2m5gPV'
  },
  {
    titulo: 'Vivirá',
    duracion: '4:01',
    url: 'https://open.spotify.com/intl-es/track/1GyEg8St8IRo9eIE5AuUpJ'
  },
  {
    titulo: 'Hiedra',
    duracion: '3:49',
    url: 'https://open.spotify.com/intl-es/track/4wD6eA3LuMy6YKK3pN655u'
  },
  {
    titulo: 'Fantasma',
    duracion: '2:39',
    url: 'https://open.spotify.com/intl-es/track/03XJ3y4Snouae8hJnQAyea'
  }
]

const Spoty = () => {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{ marginTop: '200px' }}
    >
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card bg-black text-white shadow rounded-4 p-3">

          {/* Título */}
          <h5 className="text-center mb-3">Spotify</h5>

          {/* Lista */}
          <ul className="list-group list-group-flush">
            {canciones.map((cancion, index) => (
              <li
                key={index}
                className="list-group-item bg-black text-white d-flex justify-content-between align-items-center p-2"
              >
                <a
                  href={cancion.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none flex-grow-1"
                >
                  🎵 {cancion.titulo}
                </a>
                <small className="ms-2">{cancion.duracion}</small>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Spoty
