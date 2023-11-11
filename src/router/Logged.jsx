import { Navigate, useLocation } from "react-router-dom"
const Logged = ({children}) => {
  const {state} = useLocation()
    return state?.logged ? <Navigate to="/"/> : children
}

export default Logged
