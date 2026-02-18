
 const eventos=[
    { id: 1,fecha: "11 Abril", lugar: "Centro cultural-La vieja Usina", ciudad: "Paraná" },
    { id: 2,fecha: "13 Junio", lugar: "Centro cultural-Juan L. Ortiz", ciudad: "Paraná" }
]
 export const getEvent = ()=>{
    return new Promise ( res =>{
        res(eventos)
    }) 


}
