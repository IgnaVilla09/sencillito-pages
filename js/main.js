document.addEventListener("DOMContentLoaded", function () {
    // Obtén los botones y el contenido dinámico
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");
    const btn4 = document.getElementById("btn4");
    const btn5 = document.getElementById("btn5");
    const content1 = document.getElementById("content1");
    const content2 = document.getElementById("content2");
    const content3 = document.getElementById("content3");
    const content4 = document.getElementById("content4");
    const content5 = document.getElementById("content5");
  
    // Funciones para mostrar/ocultar contenido
    function showContent(selectedContent) {
      content1.style.display = "none";
      content2.style.display = "none";
      content3.style.display = "none";
      content4.style.display = "none";
      content5.style.display = "none";
      selectedContent.style.display = "block";
    }
  
    // Asigna los eventos a los botones
    btn1.addEventListener("click", function () {
      showContent(content1);
    });
  
    btn2.addEventListener("click", function () {
      showContent(content2);
    });
  
    btn3.addEventListener("click", function () {
      showContent(content3);
    });

    btn4.addEventListener("click", function () {
        showContent(content4);
    });
    
    btn5.addEventListener("click", function () {
        showContent(content5);
    });
  
    // Muestra el primer contenido al cargar la página
    showContent(content1);
  });
  