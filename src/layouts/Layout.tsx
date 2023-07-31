import { Outlet } from "react-router-dom";
import Modal from 'react-modal';
import { ModalProduct, Resumen, Sidebar } from "../components";
import { useStore } from "zustand";
import { store } from "../store";
import { useAuth } from "../hooks/useAuth";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};


Modal.setAppElement('#root');

export const Layout = () => {
  useAuth({middleware: 'auth',url: '/auth/login'});

  const {showModal} = useStore(store);
  return (
   <>
      <div className="md:flex">
        <Sidebar />
        <main className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-3">
          <Outlet />
        </main>
        <Resumen />
      </div>
      {
        showModal &&(
          <Modal isOpen={showModal} style={customStyles}>
            <ModalProduct />
          </Modal>
        )
      }
   </>
  )
}
