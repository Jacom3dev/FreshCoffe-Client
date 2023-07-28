import { Outlet } from "react-router-dom";
import { Resumen, Sidebar } from "../components";


export const Layout = () => {
  return (
    <div className="md:flex">
      <Sidebar />
      <main className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-3">
        <Outlet />
      </main>
      <Resumen />
    </div>
  )
}