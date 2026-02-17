import React from 'react'
import Tapa from '../../../Tapa/Tapa'
const DetalleTapa = ({fotos}) => {
  return (
 <div className="container d-flex flex-column align-items-center justify-content-center text-center">
      <h2 className="mb-4" style={{paddingTop:"100px"}}>CAIMAN</h2>
      <div className="row justify-content-center">
        {fotos.map(item => (
          <Tapa key={item.id} {...item} />
        ))}
      </div>
    </div>
    )
}

export default DetalleTapa