import "./restaurante.css"

function ItemCategoria(props){
    return (
        <>
            <div className="tarjetaCategoria">
            <h3>{props.nombre}</h3>
            </div>
        </>
    )
}
export default ItemCategoria 