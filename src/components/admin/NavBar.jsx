import { useLocation, Link } from "react-router-dom"

function NavBar() {
    let {state} = useLocation()
    console.log(state)

    return (<>

        <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">

            <div class="container-fluid">
                <Link to="/admin" state={state}>ADMIN</Link>

                <div className="d-flex">
                    <p className="text-white">Estas conectado como: <span className="text-success h4 m-1">{state?.nombre}</span> </p>
                    <button className="btn btn-sm btn-outline-warning ms-4">
                        Cerrar Sesion
                    </button>
                </div>
                
            </div>
        </nav>
    </>)


}

export default NavBar