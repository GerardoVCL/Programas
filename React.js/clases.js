class Chancho {
    propiedad = "mi propiedad"
    //crea una propiedad privada usando el "#" y solo puede ser accedida por las instancias de los objetos de clase,
    //es decir, los metodos que se llaman desde los objetos
    #hambre = false
    constructor(estado = "Feliz" , hambre = false){
        this.estado = estado
        this.#hambre = hambre
    }
    hablar(){
        console.log(`soy un chancho ${this.estado} ${this.#hambre ? "Con mucha hambre" : "satisfecho"}`);
    }
    //los metodos estaticos dentro de una clase no puede acceder a las propiedades de una clase
    //ya que las propiedades pertenecen a las instancias, pero si puede acceder a propiedades static (estaticas), se pueden llamar sin crear el objeto
    static comer(){
        console.log("Estoy comiendo")
    }

}

Chancho.comer()

const feliz = new Chancho(`feliz`)
console.log(feliz)
//Esto muestra las funciones de feliz, es decir, las funciones de la clase Chancho
console.log(feliz.comer)
//feliz.hablar()
const triste = new Chancho("triste")
//triste.hablar()
const nose = new Chancho()
//nose.hablar()
