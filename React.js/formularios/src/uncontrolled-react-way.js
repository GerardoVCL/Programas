import { useRef } from "react";


const App = () => {
    const file = useRef()
    const input = useRef()
    const submit = () =>{
        console.log(input.current.value)
        console.log(file.current.files[0])
        const form = new FormData()
        form.append('archivo', file.current.files[0])
        form.append('campo', file.current.value)
        fetch('/lala' , {method: 'POST', body:form})
    }
    return(
        <div>
            <div>
                <span>lala<span/>
                <input type='text' name='campo' ref={input}/>
                <input type='file' ref={file}/>
                </span>
            </div>
            <input type='submit' value='Enviar' onClick={submit}/>
        </div>
    )
}


export default App;