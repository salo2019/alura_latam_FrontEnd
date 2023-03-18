//declaracion 01
const ciudades = new Array("Bogota", "Lima", "Santiago");

//declaracion 02
const paisesDisponibles = ["Colombia", "Peru", "Chile"];

//agregar al final
paisesDisponibles.push("Uruguay");

//agregar al principio
ciudades.unshift("Quito");

//mostrar un elemento
console.log(ciudades[0]);

//borrar elementos de la lista y agregar SPLICE
paisesDisponibles.splice(0, 1, 'Argentina', 'Brasil'); //1er parametro es la posicion desde donde elimina, el 2do es hasta que posicion inclusive, y los otros 2 son elementos nuevos a agregar

//tamaño de lista
const cantidadCiudades = ciudades.length;

//eliminar primer elemento
ciudades.shift();

//eliminar el ultimo elemento
paisesDisponibles.pop();

//filtrar elementos
const paisesFiltrados = paisesDisponibles.filter((e) => e.length > 6);

//pasar todas los elementos a una variable separados cada uno por -
console.log(paisesDisponibles.join('-'));

//ordenar lista
console.log(paisesDisponibles.sort());

//saber la posicion de un elemento
console.log(`Peru esta en la posicion ${paisesDisponibles.indexOf('Peru')}`);

//concatenar 2 listas
const ciudadesPaises = paisesDisponibles.concat(ciudades);