import { useStore } from 'zustand';
import { ICategory } from "../../interfaces";
import { store } from "../../store";

interface IProps {
  category:ICategory
}

export const Category = ({category}:IProps) => {
  const {filterProducts,category:categoryStore} = useStore(store);
  const {name,icon,id} = category;
  
  return (
    <div className={`flex items-center gap-4 border w-full p-3 hover:bg-amber-400 ${categoryStore === name&&'bg-amber-400'} `} onClick={()=>filterProducts(id)}>
      <img src={`/img/icono_${icon}.svg`} alt={name} className="w-12" />
      <p className="text-lg font-bold cursor-pointer truncate">{name}</p>
    </div>
  )
}
