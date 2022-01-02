//Esta importando el componente cabezera de la carpeta componentes
import Cabezera from "./componentes/Cabezera"

function App() {
  //Se pueden crear constantes que se pueden poner en el return para mostrarlas en la pagina
  const name = "Brad"

  return (
    <div className="Contenedor">
      {/*
      Esto es una cabezera sin importar la cabezera 
      <h1>Hello from react</h1>
      <h2>Hello {name}</h2> 
      Llama a cabezera para usarla como cabezera*/}
      <Cabezera/>
    </div>
  );
}

export default App;
