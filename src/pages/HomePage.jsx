
import Navegacion from "../components/restaurante/Navegacion";
import Carrusel from "../components/restaurante/Carrusel";
import CarruselPromociones from "../components/restaurante/CarruselPromociones";
import Categorias from "../components/restaurante/Categorias";
import { useLocation } from "react-router-dom";
import Carrito from "../components/restaurante/Carrito";
import Footer from "../components/restaurante/Footer";


const HomePage = () => {
    return (<>
        <Navegacion />
        <Carrusel />
        <Categorias />
        <Footer />



    </>)

}
export default HomePage
