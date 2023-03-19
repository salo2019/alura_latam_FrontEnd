//capturo el boton
const btn = document.querySelector("[data-form-btn]");

//funcion para listener
const createTask = (evento) => {
    //esto hace que no recarge la pagina
    evento.preventDefault();
    
    //capturo el input del texto
    const input = document.querySelector("[data-form-input]");
    
    //guardo el valor
    const value = input.value;
    
    //capturo la lista donde agregare los elementos
    const list = document.querySelector("[data-list]");

    //creo la tarea y le agrego la clase para los estilos
    const task = document.createElement('li');
    task.classList.add('card');

    //backticks. Contenido que tendra la tarea
    const content = 
    `
        <div>
            <i class="far fa-check-square icon"></i>
            <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>
    `

    //agrego el contenido al elemento que necesito del html
    task.innerHTML = content;

    //reseteo el valor para que se borre del input
    input.value = '';
    
    //a la lista debo agregarle la tarea
    list.appendChild(task);
    
}

//con listener escuchamos eventos. Recibr 2 parametros. Uno, que eventos queremos y el otro lo que queremos hacer. En este caso una funcion
btn.addEventListener("click", createTask);