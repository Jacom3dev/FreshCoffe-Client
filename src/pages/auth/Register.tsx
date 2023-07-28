import { Link } from "react-router-dom";
import { RegisterForm } from "../../components";

const Register = () => {
  return (
    <>
      <h1 className="text-4xl font-black text-gray-700 uppercase">Crea una cuenta</h1>

      <div className="bg-white shadow-sm rounden-md mt-10 px-5 py-10">
        <RegisterForm/>
      </div>
      <nav className="mt-5">
        <Link to="/auth/login">¿Ya tienes cuenta? <span className="text-indigo-500">inicia Sesión</span></Link>
      </nav>
    </>
  )
}

export default Register;