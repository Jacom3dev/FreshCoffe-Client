import { useEffect } from 'react';
import { useStore } from 'zustand';
import { Category } from './Category';
import { store } from '../../store';
import { useAuth } from '../../hooks/useAuth';

export const Sidebar = () => {
    const {categories,getCategories} = useStore(store);
    const {logout} = useAuth({middleware:'auth',url:'/auth/login'});

    useEffect(() => {
        getCategories();
    }, [])


    return (
        <aside className="md:w-72">
            <div className="p-4">
                <img
                    src="/img/logo.svg"
                    alt="logo"
                    className="w-40"
                />
            </div>
            <div className="mt-1">
                {categories.map((category)=>(
                    <Category key={category.id}  category={category}/>
                ))}
            </div>
            <div className="my-5 px-5">
                <button
                    type="button" className="text-center bg-red-500 w-100 p-3 font-bold text-white truncate"
                    onClick={logout}
                >Cancelar order</button>
            </div>
        </aside>
    );
}
