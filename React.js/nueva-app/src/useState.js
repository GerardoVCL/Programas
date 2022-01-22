import { useState } from "react"
//Reglas de hooks:
//No se llaman hooks en loops, es decir, useState se llama preferentemente al principio, y no puede estar dentro de nada, tiene que estar en el nivel mas alto.
//Se llaman en componentes de react, funciones que retornan jsx
//Se llaman en custom hooks
//Cuando se crea un custom hook, este tiene que comenzar con use[nombre_hook]


const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial)
    const incrementar = () => {
        setContador(contador + 1)
    }
    return [contador,incrementar]
}

const App = () => {
    const [contador,incrementar] = useContador(0)
    return (
        <div>
        Contador: {contador}
        <button onClick = {incrementar}>Incrementar</button>
        </div>
    )
}


export default App