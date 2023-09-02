<template>
    <div class="formulario">
      <h3>Ingrese los datos del Token:</h3>
      <div>
        <label for="semilla">Semilla:</label>
        <input v-model="semilla" type="text" id="semilla">
      </div>
  
      <div>
        <label for="tiempo">Tiempo Vigencia:</label>
        <input v-model="tiempo" type="text" id="tiempo">
      </div>
  
      <div>
        <label for="clave">Token:</label>
        <input v-model="clave" type="text" id="clave">
      </div>

    
      <div>
        <button @click="guardarToken">Guardar</button>
      </div>
     
    </div>
</template>

<script>


import { ingresarTokenFachada } from "../helpers/TokenCliente"

export default {
    data() {
        return {
            semilla: 'semilla1',
            tiempo:'30000000',
            clave:'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNaWNoYWVsIiwiaWF0IjoxNjkzNjY1OTY1LCJleHAiOjE2OTM2NjY5NjV9.pqZgX0SbAyJMD2eb7Q9PACOX3gM4i7iMTL0kfMN0H6dAngb45zz8PHDTCpIAkE3gvbTOimP3XPZh8bL46e6gyg',
        };
    },
    methods:{
     guardarToken(){
        const data={
            semilla:this.semilla,
            tiempo:this.tiempo,
            clave:'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNaWNoYWVsIiwiaWF0IjoxNjkzNjY1OTY1LCJleHAiOjE2OTM2NjY5NjV9.pqZgX0SbAyJMD2eb7Q9PACOX3gM4i7iMTL0kfMN0H6dAngb45zz8PHDTCpIAkE3gvbTOimP3XPZh8bL46e6gyg',

        }
        alert("Token guardado con éxito");
        console.log("Token Intertadi"+data)
        ingresarTokenFachada(data)
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