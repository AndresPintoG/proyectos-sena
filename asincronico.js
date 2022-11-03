console.log("Cargando Banner ...");
console.log("Cargando textos ...")

let tareaAsincrona = () => {
    let promesa = new Promise ((resolve, reject) => {
        setTimeout( () =>{
            console.log("Mensaje cargando asincronicamente");
            resolve();
        }, 1300);
    });
    return promesa
}

tareaAsincrona();
console.log("Cargando footer");