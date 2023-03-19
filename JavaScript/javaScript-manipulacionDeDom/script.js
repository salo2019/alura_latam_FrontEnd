//capturo el boton
const btn = document.querySelector("[data-form-btn]");

//funcion para listener
const createTask = (evento) => {
    //esto hace que no recarge la pagina
    evento.preventDefault();
    //capturo el input del texto
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}

//con listener escuchamos eventos. Recibr 2 parametros. Uno, que eventos queremos y el otro lo que queremos hacer. En este caso una funcion
btn.addEventListener("click", createTask);