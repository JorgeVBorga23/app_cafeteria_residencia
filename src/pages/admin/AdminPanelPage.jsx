import React from 'react'
import NavBar from '../../components/admin/NavBar'
import SideMenu from '../../components/admin/SideMenu'
import "./admin.css"
import { Route, Routes } from 'react-router-dom'
import Productos from "./Productos"
import PrivateRoute from "../../router/PrivateRoute"
import Pedidos from "./Pedidos"
import Carritos from "./Carritos"
import Usuarios from "./Usuarios"
import Categorias from "./Categorias"

const AdminPanelPage = () => {
  return (
    <>

      <NavBar />
      <div className="flex">
        <SideMenu />
        <div className="content">
        <Routes>
        <Route path="alimentos" exact element={<PrivateRoute><Productos/></PrivateRoute>} />
        <Route path="pedidos" exact element={<PrivateRoute><Pedidos/></PrivateRoute>} />
        <Route path="carritos" exact element={<PrivateRoute><Carritos/></PrivateRoute>} />
        <Route path="usuarios" exact element={<PrivateRoute><Usuarios/></PrivateRoute>} />
        <Route path="categorias" exact element={<PrivateRoute><Categorias/></PrivateRoute>} />

        </Routes>
      </div>
      </div>
     

    </>
  )
}
export default AdminPanelPage