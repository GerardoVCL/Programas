//Clase rest operator con destructuring

//cuando se usa el rest operation dentro de una funcion, se toman todos los argumentos y los transformamos en un arreglo
//no se puede usar el rest operator al comienzo de la funcion, siempre tiene que ser el ultimo parametro definido
const rest= (a,b,...argumentos) => {
    console.log(a,b)
    console.log(argumentos)
}
//rest(1,2,3)

// const obj = {
//     a: 1, b:1, c: 1,d:1
// }

//const { a , b ,...restobj } = obj
//console.log(a,b,restobj)

const arr= [1,2,3,4,5]

const [a,b,...r] = arr

const useState = () => [`valor`, () => {}]

//en este caso, valor va a ser el "valor" y setValor va a ser la funcion sin definir de useState
const [valor,setValor] = useState()
console.log(valor,setValor)