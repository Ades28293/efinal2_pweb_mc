
<template>
    <div class="background">
      <h1>Bienvenido a la API de Inscripcion</h1>
      <h2>"Podras utilizar diferentes verbos en el Modelo Inscripcion en esta Página Web "</h2>
  
      <p id="parrafo1">
        Una API de Inscripcion implementa las operaciones  para gestionar insertar estudiantes.
      </p>
  
      <img id="principal" src="https://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2022/01/131-woman-student-1-coloring-page.png">
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .background {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    background-color: white;
    border: 5px solid;
    margin: 25px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  
  #principal {
    width: 450px;
    height: 450px;
    border: 5px solid;
    border-radius: 50px;
  
  }
  
  h1,h2,p{
    background-color: white;
    border: 5px solid;
    border-radius: 25px;
  }
  
  #parrafo1 {
    font-size: 30px;
  }
  </style>
  
  