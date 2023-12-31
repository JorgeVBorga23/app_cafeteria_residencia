import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import Logged from "../router/Logged"
import PrivateRoute from "../router/PrivateRoute"
import AdminPanelPage from "../pages/admin/AdminPanelPage"
import CategoriaPage from "../pages/CategoriaPage"
export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Logged><LoginPage/></Logged>} />
        <Route path="/admin/*" element={<PrivateRoute><AdminPanelPage/></PrivateRoute>} />
        <Route path="/categoria/:id" element={<CategoriaPage/>} />
    </Routes>
    </>
  )
}


