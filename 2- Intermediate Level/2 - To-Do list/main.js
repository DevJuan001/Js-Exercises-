// Seleccionar elementos del DOM
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.querySelector(".input button");
const taskList = document.querySelector(".List ul");
const deleteAllBtn = document.querySelector(".delete-all-button button");

function toggleDeleteAllButton() {
  if (taskList.children.length === 0) {
    deleteAllBtn.style.display = "none";
  } else {
    deleteAllBtn.style.display = "block";
  }
}

// toggle = alternar (sirve para mostrar u ocultar el boton de eliminar todas las tareas)
toggleDeleteAllButton(); // Actualizar el estado del botón

// Agregar un evento al botón de eliminar todas las tareas
deleteAllBtn.addEventListener("click", () => {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  toggleDeleteAllButton(); // Actualizar el estado del botón
});



addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim(); // Obtener el texto del input y eliminar espacios

  // Si el contenido de la tarea no esta vacio ejecuta este trozo de codigo
  if (taskText !== "") {

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => {
      li.remove(); 
      toggleDeleteAllButton();
    });
    li.appendChild(deleteButton); 

    taskList.appendChild(li);

    // Limpiar el campo de entrada
    taskInput.value = "";
    toggleDeleteAllButton(); // Actualizar el estado del botón
  } else {
    alert("Por favor, ingresa una tarea.");
  }
});


