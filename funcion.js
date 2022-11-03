
let nombres = ['Andres', 'Maria', 'Carolina', 'Jose', 'pablo'];

nombres.forEach((nombre)=>{
    if(nombre.startsWith("Ma")){
        console.log("SALUDOS "+ nombre)
    }
    console.log("Nombre:" + nombre)
});

// ---OPERADORES LOGICOS--- 


console.log("Operador Logico AND");
//Operador AND ( && ) DEVUELVE B SI A Y B SON VERDADERAS

console.log(45 && true); //True 
console.log(false && 25); //false

// --- Operador OR--- 
//OPERADOR OR (||) devuelve a  (si es verdadero), o sino, b
//OPERADOR NULLIS (??) Devuelve b solo cuando es undefined o null

console.log(null || false); //false
console.log(true || false); //true

//Tenemos una data donde tenemos almacenado la cantidad de las balas que le quedan al persona.
//Necesitamos mostrar al usuario visualmente si se ha quedado sin balas o no. Utilizaremos ||
//Si quisieramos sumar la cantidad de balas que tiene con los proyectiles utilizariamos ??

const data = {balas : 0 };
console.log(data.balas || "Sin balas");
console.log(data.balas ?? "sin balas");

const requerido = true;
const saludar = () => "Hola clase!";

console.log(requerido && saludar());


const celular = {
    //Propiedades del objeto
    color: "negro",
    modelo: "moto g8 power",
    canCamara: "5",
    huella: "si",
    resolucion: "1080 pixeles",
    sonarAlarma: () => "beep beep 6:00AM",
    apagarCel: function(){
        return console.log("Apagar");
    }
}

const tableta = {
    //Propiedades del objeto
    color: "negro",
    modelo: "moto g8 power",
    canCamara: "5",
    huella: "si",
    resolucion: "1080 pixeles",
    apagarCel: function(){
        return console.log("Apagar");
    }
}

//Clases ---> archivos que contienen metodos
//Herencia

console.log(celular.modelo);
console.log(celular.sonarAlarma())