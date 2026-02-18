
 const eventos=[
    { id: 1,fecha: "10 Marzo", lugar: "Club Central", ciudad: "Paraná" },
    { id: 2,fecha: "22 Marzo", lugar: "Bar Rock", ciudad: "Santa Fe" },
    { id: 3,fecha: "5 Abril", lugar: "Festival Río", ciudad: "Rosario" }
]
 export const getEvent = ()=>{
    return new Promise ( res =>{
        res(eventos)
    }) 


}
