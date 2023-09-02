
import axios from "axios"


export const obtenerEstudianteFachada=async (cedula)=>{

    return await obtenerEstudianteAPIAxios(cedula);

}  

export const obtenerEstudianteTotalFachada=async ()=>{
   
    return await obtenerEstudianteTotalAPIAxios();

}  


export  const ingresarEstudianteFachada=(bodyEstudiante)=>{
    ingresarEstudiante(bodyEstudiante);
} 




const obtenerEstudianteAPIAxios=async(cedula)=>{
    

    const headers={
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNaWNoYWVsIiwiaWF0IjoxNjkzNjY4ODY2LCJleHAiOjE2OTM2Njk4NjZ9.SYCkZludVMwTRez1XhZfsEs6hWkx2XQdAZrrsaerGX0fIv_nsttUOfpYIwCRjbcyMObOfUh-vcRbtGFNlFex3g",
        "Mensaje":"Valor1"
    }   
    const data= axios.get(`http://localhost:8080/API/v1.0/Inscripcion/estudiantes/${cedula}`,{headers:headers}).then(r=>r.data);
    

    return data;
    
    }

    const obtenerEstudianteTotalAPIAxios=async()=>{
    

        const headers={
            "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNaWNoYWVsIiwiaWF0IjoxNjkzNjY4ODY2LCJleHAiOjE2OTM2Njk4NjZ9.SYCkZludVMwTRez1XhZfsEs6hWkx2XQdAZrrsaerGX0fIv_nsttUOfpYIwCRjbcyMObOfUh-vcRbtGFNlFex3g",
            "Mensaje":"Valor1"
        }   
        const data= axios.get(`http://localhost:8080/API/v1.0/Inscripcion/estudiantes`,{headers:headers}).then(r=>r.data);
        
       
        return data;
        
        }

    
    const ingresarEstudiante=(bodyEstudiante)=>{
        const headers={
            "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNaWNoYWVsIiwiaWF0IjoxNjkzNjY4ODY2LCJleHAiOjE2OTM2Njk4NjZ9.SYCkZludVMwTRez1XhZfsEs6hWkx2XQdAZrrsaerGX0fIv_nsttUOfpYIwCRjbcyMObOfUh-vcRbtGFNlFex3g",
            "Mensaje":"Valor1"
        }   
    
      
        axios.post(`http://localhost:8080/API/v1.0/Inscripcion/estudiantes`,bodyEstudiante,{headers: headers}).then(r=>r.data);
    }  


