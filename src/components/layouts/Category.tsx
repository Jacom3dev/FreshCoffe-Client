import { useStore } from 'zustand';
import { ICategory } from "../../interfaces";
import { store } from "../../store";

interface IProps {
  category:ICategory
}

export const Category = ({category}:IProps) => {
  const {setCategory,category:categoryStore} = useStore(store);
  const {name,icon,id} = category;
  
  return (
    <div
      className={`flex items-center gap-4 border w-full p-3 hover:bg-amber-400 ${categoryStore?.id === id&&'bg-amber-400'} `}
      onClick={()=>setCategory(category)}
    >
      <img src={`/img/icono_${icon}.svg`} alt={name} className="w-12" />
      <p className="text-lg font-bold cursor-pointer truncate">{name}</p>
    </div>
  )
}
