const fotosTapa =[
    { id: 1,nombre:"Adrián Gómez (Voz)" ,img:"./imagenes/obsession1.jpeg"},
    { id: 2,nombre:"Juan Podhainy (Guitarras)" ,img:"./imagenes/obsession2.jpeg"},
    { id: 3,nombre:"Carlos Fernández de la Puente (Batería)" ,img:"./imagenes/obsession3.jpeg"},
    { id: 4,nombre:"Oscar Villagra (Bajo)" ,img:"./imagenes/obsession4.jpeg"}
]

 export const getTraerFotos = ()=>{
    return new Promise ( res =>{
        res(fotosTapa)
    }) 


}