import { useState, useEffect } from "react";

export const useListaAlimentos =(id)=>{
    const [alimentos, setAlimentos] = useState([])
    useEffect(() => {
  
      fetch("http://recuerdosdeorizaba.ddns.net:3001/categoria/lista-productos/" + id)
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          setAlimentos(datos);
        })
        .catch((err) => console.log(err));
  
    }, [])

    return { alimentos, setAlimentos}

}




  