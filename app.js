// Escribe tu código aquí.

var Arreglo = ["manzana", "pera", "mango", "fresa", "platano", "sandia", "melon", "durazno", "guayaba", "naranja"];
var palabraEntrada = "lapiz";
var respuesta =[];

Arreglo.forEach((palabra, index) => {
    if(palabra.length>palabraEntrada.length){
        respuesta.push(palabra);
    }
    return respuesta;
});

var lista = document.getElementsByClassName(".lista");
var dato = document.createElement("li");

dato.appendChild(Arreglo[0]);
lista.appendChild(dato);


/*for(i=0; i<respuesta.length;i++){
dato.document.appendChild(respuesta[n]);
lista.document.appendChild(lista);
}

console.log(respuesta);*/