export const RegisterForm = () => {
    return (
        <form>
            <div className="mb-4">
                <label htmlFor="name" className="text-slate-800">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    className="mt-5 w-full p-3 bg-gray-50"
                    placeholder="Tu nombre"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="text-slate-800">Correo:</label>
                <input
                    type="email"
                    id="email"
                    className="mt-5 w-full p-3 bg-gray-50"
                    placeholder="Tu correo"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="text-slate-800">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    className="mt-5 w-full p-3 bg-gray-50"
                    placeholder="Tu contraseña"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password_confirmation" className="text-slate-800">Confirmar Contraseña:</label>
                <input
                    type="password"
                    id="password_confirmation"
                    className="mt-5 w-full p-3 bg-gray-50"
                    placeholder="Repetir contraseña"
                />
            </div>

            <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
            >Crear Cuenta</button>


        </form>
    );
}
