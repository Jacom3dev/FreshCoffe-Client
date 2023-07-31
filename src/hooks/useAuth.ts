import { Dispatch,useEffect } from "react";
import useSWR from 'swr';
import { IUser } from "../interfaces";
import { API } from "../store/api";
import { useNavigate } from "react-router-dom";

export const useAuth = ({middleware,url}:{middleware:string,url:string})=>{
    const AUTH_TOKEN = `Bearer ${localStorage.getItem('AUTH_TOKEN')??''}`;
    const navigate = useNavigate();

    const {data:user,error,mutate} = useSWR('/user',() =>
        API.get('/user',{
            headers: {
                Authorization: AUTH_TOKEN
            }
        })
        .then(res=>res.data)
        .catch(e=> {throw Error(e?.response?.data?.errors)})
    );

    const login = async(user:Pick<IUser,'email'| 'password'>,setErrors: Dispatch<React.SetStateAction<string[]>>) =>{
        try {
            const {data} = await API.post('/login',user);
            localStorage.setItem("AUTH_TOKEN",data.token);  
            setErrors([]);
            await mutate();
        } catch (e:any) {        
            setErrors(Object.values(e?.response?.data?.errors));
        }
    }
    const register = async(user:IUser,setErrors: Dispatch<React.SetStateAction<string[]>>)=>{
        try {
            const {data} = await API.post<{token:string}>('/register',user);
            localStorage.setItem("AUTH_TOKEN",data.token);  
            setErrors([]);
            await mutate();  
          } catch (e:any) {     
            setErrors(Object.values(e?.response?.data?.errors))
        }
    }
    const logout = async () =>{
        try {
            await API.post<{token:string}>('/logout',{});
            localStorage.removeItem('AUTH_TOKEN');
            await mutate();  
        } catch (e:any) {     
           
        }
    }

    useEffect(() => {
     if (middleware === "guest" && url && user) {
        navigate(url)
     }
     
     if (middleware === "auth" && error) {
        navigate(url)
     }
    }, [user,error])
    
    return{
        login,
        register,
        logout,
        user,
        error
    }
}