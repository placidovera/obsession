import "./Tapa.css"

const Tapa = ({nombre,img}) => {
  return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="col-dos h-100 text-center">
        <img src={img} alt={nombre} />
        <h3>{nombre}</h3>
    </div>
    </div>
  )
}

export default Tapa