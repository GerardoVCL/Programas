//clase spread operator parte 1
const fn = (a,b,c) => console.log(a+b+c)

const arr = [1,2,3,4]

// fn(arr[0],arr[1],arr[2])
//spread operator = "..." el primer elemento es el primer parametro, el segundo elemento el segundo parametro y asi
fn(...arr)

const arr1 = [5,6]

const arr2 = arr.concat(arr1)
console.log(arr2)

//Clase spread operator parte 2
const arr3 = [...arr,...arr1]
console.log(arr2)

const obj1 = { a : 1, b: 2}
const obj2 = {b: 5, c: `chanchito feliz`}
//Esto esta creando una copia de obj1
const obj3 = {...obj1}
obj1.a = 10
console.log(obj3, obj1);
const obj4 = {...obj1,...obj2}
console.log(obj4)

const obj5 = {
    ...obj1,
    loading: true,
    data: {
        prop:"lala",
        animal: "perrito"
    }
}
console.log(obj5)