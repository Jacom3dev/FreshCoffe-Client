import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth";

export const AdminSidebar = () => {
    const {logout} = useAuth({middleware:'auth',url:'/auth/login'});
  return (
    <aside className="md:w-72 h-screen">
        <div className="p-4">
            <img src="/img/logo.svg" alt="logo" className="w-40" />
        </div>
        <nav className="flex flex-col p-4">
            <Link to="/admin" className="font-bold text-lg">Ordenes</Link>
            <Link to="products" className="font-bold text-lg">Productos</Link>
        </nav>

        <div className="my-4 px-5">
            <button
                type="button" className="text-center bg-red-500 w-100 p-3 font-bold text-white truncate"
                onClick={logout}
            >Cerrar Sesión</button>
        </div>
    </aside>
  )
}
