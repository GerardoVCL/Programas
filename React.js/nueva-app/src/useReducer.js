import { useReducer, useState } from "react"

//action es un objeto que tiene una propiedad de type 
//action = {type: string , payload: any}


const inicial = {contador: 0}
const reducer = (state,action) => {
    switch(action.type){
        case 'incrementar':
            return{contador: state.contador + 1}
        case 'disminuir':
            return { contador: state.contador - 1}
        case 'set':
            return{contador: action.payload}
        default:
            return state
    }

}

const App = () => {
    const [state,dispatch] = useReducer(reducer,inicial)
    const [valor,setValor] = useState(0)

    return (
        <div>
            Contador: {state.contador}
            <input value={valor} onChange={e=> setValor(e.target.value)}/>
            <button onClick = {() => dispatch({type: 'incrementar'})}>Más</button>
            <button onClick = {() => dispatch({type: 'disminuir'})}>Menos</button>
            <button onClick = {() => dispatch({type: 'set',payload:valor})}>Set</button>
        </div>
    )
}


export default App