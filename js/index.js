
// Espera hasta que el contenido de la página esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtiene el elemento de entrada de texto y el botón en la página
    const inputElement = document.getElementById("inputText");
    const buttonElement = document.getElementById("buttonText");
  
    // Agrega un evento de escucha al botón
    buttonElement.addEventListener("click", function () {
      // Obtiene el valor ingresado en el campo de entrada de texto
      const inputValue = inputElement.value;
      
      // Almacena el valor en el localStorage bajo la clave "userData"
      localStorage.setItem("userData", inputValue);

      document.getElementById('inputText').value = '';
    });
  });
  


