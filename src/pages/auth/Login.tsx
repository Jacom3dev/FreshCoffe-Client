import { Link } from "react-router-dom";
import { LoginForm } from "../../components";


const Login = () => {
  return (
    <>
      <h1 className="text-4xl font-black text-gray-700 uppercase">Iniciar Sesión</h1>
      <div className="bg-white shadow-sm rounden-md mt-10 px-5 py-10">
        <LoginForm/>
      </div>
      <nav className="mt-5">
        <Link to="/auth/register">¿No tienes cuenta? <span className="text-indigo-500">Crear una</span></Link>
      </nav>
  </>
  );
}

export default Login;