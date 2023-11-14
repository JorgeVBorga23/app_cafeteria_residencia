import { useState, useEffect } from "react";


export function useCategorias(){
    const [categorias, setCategorias] = useState([]);
    const apiUrl = "http://localhost:3000/categoria"
    useEffect(() => {
      fetch(apiUrl)
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          setCategorias(datos);
        })
        .catch((err) => console.log(err));
    }, []);

    return {categorias}
  }


