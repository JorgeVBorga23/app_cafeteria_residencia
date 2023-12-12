import "./restaurante.css"


function ItemCategoria(props) {
    return (
        <>
            <div className="category-card">
                <img className="category-image" src={"http://recuerdosdeorizaba.ddns.net:3001" + props.imagen} alt="Nombre de la categoría"/>
                    <span className="category-text">{props.nombre}</span>
            </div>
        </>
    )
}
export default ItemCategoria 