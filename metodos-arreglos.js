//Clase metodos de arreglos -> filter

const arr = [0,1,2,3,4]

//filter recibe una funcion donde solo recibe los elementos (el) mayores a 2
//con (el,i) se recibe el elemento con su indice
const r = arr.filter((el,i)=> {
    console.log(i);
    return el > 2
})
console.log(r)

//Clase metodos de arreglos -> map

//Todos los elementos de arr se multiplican por 2 y se guardan en un nuevo arreglo, se utiliza para imprimir valores en react
// const mapped = arr.map((el) => el*2)
// console.log(mapped)

const users = [
    {id: 1 , name: "chanchito feliz"},
    {id: 2 , name: "chanchito triste"},
    {id: 3 , name: "chanchito emocionado"},
    {id: 4 , name: "chanchito Pablo"},
    {id: 5 , name: "chanchito Gerardo"},
]
//Esto crea un mapped donde, de users, saca los nombres de cada usuario
const mapped = users.map((user) => `<h1>${user.name}</h1>`)
console.log(mapped)

//clase metodos de arreglos -> reduce
//reduce sirve para filtrar  y mapear al mismo tiempo

//acc es el acumulador, que es el valor acomulado de los elementos del arreglo
const r1 = arr.reduce((acc , el) =>acc + el, 0)
//esto imprime la suma de todos los elementos de arr
console.log(r1)