import { useState } from "react";
import { IUser } from "../../interfaces";
import { Alert } from '..';
import { useAuth } from '../../hooks/useAuth';

export const RegisterForm = () => {
    const [user,setUser] = useState<IUser>({
        name: "",
        email:"", 
        password: "",
        password_confirmation : "",
    });

    const [errors,setErrors] = useState<string[]>([]);

    const {register} = useAuth({middleware:'guest',url: '/'});
    
  
    const onChange = (input : keyof typeof user ,value:string)=>{
        setUser({...user,[input]: value})
    }

    const submit = (e:any)=>{
        e.preventDefault();
        register(user,setErrors);  
    }

    return (
        <form onSubmit={submit} noValidate>
            {errors&&errors.map((error:any,i:number)=>(
                <Alert key={i}>{error}</Alert>
            ))}
            <div className="mb-4">
                <label htmlFor="name" className="text-slate-800">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    className="mt-5 w-full p-3 bg-gray-50"
                    placeholder="Tu nombre"
                    onChange={({target})=>onChange('name',target.value)}
                />
            </div>
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
            <div className="mb-4">
                <label htmlFor="password_confirmation" className="text-slate-800">Confirmar Contraseña:</label>
                <input
                    type="password"
                    id="password_confirmation"
                    className="mt-5 w-full p-3 bg-gray-50"
                    placeholder="Repetir contraseña"
                    onChange={({target})=>onChange('password_confirmation',target.value)}
                />
            </div>

            <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
            >Crear Cuenta</button>


        </form>
    );
}
