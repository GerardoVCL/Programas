//Libreria para tener props en los componentes, que sirven para ordenar mejor el codigo
import PropTypes from "prop-types"
//Este componente corresponde a la cabezera de la pagina
const Cabezera = ({title}) => {
    return (
        <header>
            {/* El style le cambia el estilo a lo que este en h1
            <h1 style = {headingStyle}>{title}</h1>*/}
            <h1 >{title}</h1>
        </header>
    )
}
//El prop por defecto que va a tener el titulo va a ser libreria
Cabezera.defaultProps = {
    title : "Libreria"
}

//El tipo de variable que va a ser el titulo es de string, sirve para hacer el codigo mas robusto en caso de errores.
Cabezera.propTypes ={
    title : PropTypes.string.isRequired
}

//Constante que cambia el estilo de la cabezera
const headingStyle ={
    color : "red" , backgroundColor : "Black"
}

export default Cabezera
