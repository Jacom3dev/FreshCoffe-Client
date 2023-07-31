import { useState } from "react";
import { Alert } from "..";
import { useAuth } from "../../hooks/useAuth";

export const LoginForm = () => {
    const [data,setData] = useState({
        email:"", 
        password: "",
    });
    const [errors,setErrors] = useState<string[]>([]);

    const {login} = useAuth({
        middleware: 'guest',
        url: '/'
    });
  
    const onChange = (input : keyof typeof data ,value:string)=>{
        setData({...data,[input]: value})
    }

    const submit = (e:any)=>{
        e.preventDefault();
        login(data,setErrors);
    }

    return (
        <form onSubmit={submit} noValidate>
             {errors&&errors.map((error:any,i:number)=>(
                <Alert key={i}>{error}</Alert>
            ))}
            <div className="mb-4">
                <label htmlFor="email" className="text-slate-800">Correo:</label>
                <input
                    type="email"
                    id="email"
                    className="mt-5 w-full p-3 bg-gray-50"
                    placeholder="Tu correo"
                    onChange={({target})=>onChange('email',target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="text-slate-800">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    className="mt-5 w-full p-3 bg-gray-50"
                    placeholder="Tu contraseña"
                    onChange={({target})=>onChange('password',target.value)}
                />
            </div>

            <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
            >Iniciar Sesión</button>
        </form>
    )
}
