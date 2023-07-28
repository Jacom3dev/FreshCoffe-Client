import { create } from 'zustand'
import { categories } from '../data/categories';
import { products } from '../data/products';
import { ICategory, IProduct } from '../interfaces';


interface IStore {
  category?: string;
  categories:ICategory[];
  products: IProduct[];
  filterProducts: (category_id:number)=>void
}

export const store = create<IStore>((set) => ({
  category:'',
  categories,
  products,
  filterProducts: (category_id:number) =>{
    set({category:categories[category_id-1].name});
    const filter =  products.filter((product)=>product.category_id === category_id);
    set({products:filter});
  },
}))