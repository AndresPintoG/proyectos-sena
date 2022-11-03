console.log("Hola Mundo");

//Una funcion que reciba dos numeros por parametros y muestre el resultado en consola

function numeros (n1, n2){
    console.log(n1 * n2)
}
numeros(5, 5);

//FileSysten
const fs = require("fs");

const primerTxt = fs.readFileSync("./archivos/primero.txt", "utf-8");
console.log(primerTxt);


let content = " Tengo 17 años";
fs.writeFileSync("./archivos/segundo.txt", content, {flag: "a"});

//Estamos agregando texto al archivo txt, y con flag hacemos que se añada el texto a continuacion del archivo sin sobreescribir


//Vamos a crear una promesa que devolvera un texto en un archivo
function getText(pathFile){
    return new Promise((resolve, reject) => {
        fs.readFile(pathFile, "utf-8", (err, data) => {
            if(err){
                reject(err)
            }
            resolve(data)
            
        })
    })
}

getText("./archivos/segundo.txt")
    .then((result)=> {
        console.log(result);
    })
    .catch((error)=> {
        console.log(error)
    });