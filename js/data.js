// Espera hasta que el contenido de la página esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtiene el elemento donde se mostrará el dato del localStorage
    const dataElement = document.getElementById("data");

    // Obtiene el dato almacenado en el localStorage bajo la clave "userData"
    const storedData = localStorage.getItem("userData");
  
    // Comprueba si hay un dato almacenado en el localStorage
    if (storedData) {
      // Si hay un dato almacenado, actualiza el contenido del elemento para mostrar el dato
      dataElement.textContent = storedData;
    } else {
      // Si no hay un dato almacenado, muestra un mensaje indicando que no hay datos
      dataElement.textContent = "No hay datos almacenados.";
    }
  });
  


  