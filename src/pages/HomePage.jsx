
import Navegacion from "../components/restaurante/Navegacion";
import Carrusel from "../components/restaurante/Carrusel";
import CarruselPromociones from "../components/restaurante/CarruselPromociones";
import Categorias from "../components/restaurante/Categorias";
import { useLocation } from "react-router-dom";
import Carrito from "../components/restaurante/Carrito";


const HomePage= () => {
    return (<>
        <Navegacion />
        <div className="container">
            <div className="row">
                <div className="col-md-6 ">
                    <Carrusel />
                    <CarruselPromociones />
                </div>
                <div className="col-md-6">
                    <Categorias />
                </div>
            </div>
        </div>
    </>)

}
export default HomePage
