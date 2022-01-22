
const MiComponente = ({miProp}) => {
  return (
    <div>
      Nombre : {miProp}
    </div>
  )
}

const App = () => {
  return (
    <MiComponente miProp={'Chanchito feliz'} />
  )
}

export default App
