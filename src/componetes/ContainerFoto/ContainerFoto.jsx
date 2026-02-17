import React, { useEffect, useState } from 'react'
import { getTraerFotos } from '../fotos'
import DetalleTapa from './DetalleTapa/DetalleTapa'
const ContainerFoto = () => {
    const[fotos,setFotos]=useState([])

    useEffect(()=>{
    getTraerFotos()
    .then((res)=> setFotos(res))
    .catch(err => console.log(err))
    },[])

  return (
    <div>
        <DetalleTapa fotos={fotos}/>
    </div>
  )
}

export default ContainerFoto