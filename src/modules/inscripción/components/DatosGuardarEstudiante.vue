<template>
    <div class="formulario">

        <h2>Token</h2>
        <div>
        <label for="token">Token:</label>
        <input v-model="token" type="text" id="token">
      </div>



      <h3>Ingrese los datos del Estudiante:</h3>
      <div>
        <label for="nombre">Nombre:</label>
        <input v-model="nombre" type="text" id="nombre">
      </div>
  
      <div>
        <label for="apellido">Apellido:</label>
        <input v-model="apellido" type="text" id="apellido">
      </div>
  
      <div>
        <label for="cedula">Cedula:</label>
        <input v-model="cedula" type="text" id="cedula">
      </div>

    
      <div>
        <button @click="guardarEstudiante">Guardar</button>
      </div>

      <h4>Lista Estudiantes</h4>

      <div>
        <button @click="mostrarEstudianteTotal">Mostrar</button>
      </div>

      

     
    </div>
</template>

<script>


import { ingresarEstudianteFachada } from "../helpers/EstudianteCliente"

const arrayEstudiantes = [];

export default {
    data() {
        return {
            nombre: null,
            apellido:null,
            cedula:null,
            miArreglo:arrayEstudiantes,
            token:'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNaWNoYWVsIiwiaWF0IjoxNjkzNjY4ODY2LCJleHAiOjE2OTM2Njk4NjZ9.SYCkZludVMwTRez1XhZfsEs6hWkx2XQdAZrrsaerGX0fIv_nsttUOfpYIwCRjbcyMObOfUh-vcRbtGFNlFex3g'
        };
    },
    methods:{
     guardarEstudiante(){
        const data={
            nombre:this.nombre,
            apellido:this.apellido,
            cedula:this.cedula,
            token:'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNaWNoYWVsIiwiaWF0IjoxNjkzNjY4ODY2LCJleHAiOjE2OTM2Njk4NjZ9.SYCkZludVMwTRez1XhZfsEs6hWkx2XQdAZrrsaerGX0fIv_nsttUOfpYIwCRjbcyMObOfUh-vcRbtGFNlFex3g'

        }
        alert("Estudiante guardado con éxito");
        console.log("Estudiante Intertadi"+data)
        ingresarEstudianteFachada(data)
        },
        agregarEstudiante() {
      const nuevoEstudiante = {
        nombre: this.nombre,
        apellido: this.apellido,
        cedula:this.cedula
      };
      this.miArreglo.push(nuevoEstudiante);
    },
    mostrarEstudianteTotal() {
      const nuevoEstudiante = {
        nombre: this.nombre,
        apellido: this.apellido,
        cedula:this.cedula
      };
      this.miArreglo.push(nuevoEstudiante);
      obtenerEstudianteTotalFachada(nuevoEstudiante)
    },


    },

}
</script>

<style scoped>
.formulario {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 5px solid black;
  padding: 80px;
  width: 400px; 
  margin: 0 auto; 
}

button:hover {
  background-color: aqua;
}

button {
  width: 150px;
  height: 25px;
  border-radius: 25px;
  margin-top: 25px;
}

label {
  margin-left: 1px;
}



input {
  margin-left: 4px;
  width: 150px;
}


.formulario > div:not(:last-child) {
  margin-bottom: 10px;
}
</style>



