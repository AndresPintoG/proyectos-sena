class Persona {
    //Dentro de esta clase van todas las propiedades y metodos de una persona
    //El constructor es lo primero que se ejecuta cuandi ejecutamos una clase
    constructor(nombre, age, raza){
        this.nombre = nombre;
        this.age = age;
        this.raza = raza;
    }

    saludar(){
        console.log("Hola! "+ this.nombre);
    }
    
    mostrarinformacion(){
        console.log(`Nombre:${this.nombre} Año:${this.age} Raza:${this.raza}`);
    }
}

//Estamos heredando de la clase persona
class Profesor extends Persona{
    constructor(nombre, age, raza, profesion){
    super(nombre, age, raza);
    this.profesion = profesion;
    }
    
    infoProfesor(){
        console.log(`Nombre:${this.nombre} Año:${this.age} Raza:${this.raza} profesion: ${this.profesion}`);
    }
}


//Vamos Instanciar la clase Persona
let person = new Persona('Marc zukenber', 42, 'reptil');
person.saludar(); //Hola a todos!
person.mostrarinformacion();

let jesualdo = new Profesor("Jesualdo", 40, "Humano", "Ing. sistema");
jesualdo.infoProfesor();