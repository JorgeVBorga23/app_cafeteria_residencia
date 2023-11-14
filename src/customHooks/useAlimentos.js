import { useState, useEffect } from "react";


export function useAlimentos(){
    const [alimentos, setAlimentos] = useState([]);
    const apiUrl = "http://localhost:3000/productos"
    useEffect(() => {
      fetch(apiUrl)
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          setAlimentos(datos);
        })
        .catch((err) => console.log(err));
    }, []);

    return { alimentos, setAlimentos }
  }


