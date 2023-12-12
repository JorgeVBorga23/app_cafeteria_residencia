import { useState, useEffect } from "react";


export function useCategoria(id){
    const [categoria, setCategoria] = useState([]);
    const apiUrl = "http://recuerdosdeorizaba.ddns.net:3001/categoria/"+id
    useEffect(() => {
      fetch(apiUrl)
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          setCategoria(datos);
        })
        .catch((err) => console.log(err));
    }, []);

    return { categoria } 
  }


