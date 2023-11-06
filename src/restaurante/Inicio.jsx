
import Navegacion from "./Navegacion";
import Carrusel from "./Carrusel";
import CarruselPromociones from "./CarruselPromociones";
import Categorias from "./Categorias";

const Inicio= () => {
    return (<>

        <Navegacion />
        <div className="container">
            <div className="row">
                <div className="col-md 6">
                    <Carrusel />
                    <CarruselPromociones />
                </div>
                <div className="col-md 6">
                    <Categorias />
                </div>
            </div>
        </div>
    </>)

}

export default Inicio
