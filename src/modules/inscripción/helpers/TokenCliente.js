
import axios from "axios"


export const obtenerTokenFachada=async (token)=>{

    return await obtenerTokenAPIAxios(token);

}  

export  const ingresarTokenFachada=(bodyToken)=>{
    ingresarToken(bodyToken);
} 

const obtenerTokenAPIAxios=async(token)=>{
    

    const headers={
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNaWNoYWVsIiwiaWF0IjoxNjkyODIxNTE5LCJleHAiOjE2OTI4MjIxMTl9.bPUS3-q92Zce9Q-DK9_w2FiatqKdVOVd7qn4EKTp7UZYMdaJ9Vy-t3UKlxSOm5MbFNi6GVrvZjqkBxlq45ixdw",
        "Mensaje":"Valor1"
    }   
    const data= axios.get(`http://localhost:8080/API/v1.0/Autorizacion/tokens/${token}`,{headers:headers}).then(r=>r.data);
    
    return data;
    
    }
    
    const ingresarToken=(bodyToken)=>{
        const headers={
            "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNaWNoYWVsIiwiaWF0IjoxNjkzNjM4MDY2LCJleHAiOjE2OTM2Mzg2NjZ9.8Q4GeRg8qoScbAWlG1zuW6zkT3b69lvSw8UG1ry-Tuug53bt7ECUZPXy1bH6nmCJ2CVPNVJVk1fcD46YnocGqw",
            "Mensaje":"Valor1"
        }   
    
      
        axios.post(`http://localhost:8080/API/v1.0/Autorizacion/tokens`,bodyToken,{headers: headers}).then(r=>r.data);
    }  


