import { create } from 'zustand'
import { categories } from '../data/categories';
import { products } from '../data/products';
import { ICategory, IOrder, IProduct } from '../interfaces';
import { notify } from '../helpers/notify';


interface IStore {
  showModal: boolean;
  category: string;
  categories:ICategory[];
  product: IProduct | null;
  products: IProduct[];
  order: IOrder[];
  filterProducts: (category_id:number)=>void;
  setProduct: (product:IProduct)=>void;
  setShowModal: (state:boolean)=>void;
  setOrder:(order:IOrder[],product:IOrder)=>void;
  changeAmount:(order:IOrder[],productId:number,value:number)=>void;
  deleteProduct:(order:IOrder[],productId:number)=>void;
}

export const store = create<IStore>((set) => ({
  showModal:false, 
  category:'',
  categories,
  product:null,
  products,
  order: [],
  filterProducts: (category_id:number) =>{
    set({category:categories[category_id-1].name});
    const filter =  products.filter((product)=>product.category_id === category_id);
    set({products:filter});
  },
  setProduct: (product:IProduct)=>{
    set({product});
  },
  setShowModal: (state:boolean)=>{
    set({showModal:state});
  },
  setOrder: (orders:IOrder[],product:IOrder)=>{
    const findProductById = orders.find(({id})=>id === product.id);
    if (!findProductById) {
      notify('Producto añadido correctamente!.')
      const newOrder = [product,...orders];
      set({order:newOrder});
    }
  },
  changeAmount:(order:IOrder[],productId:number,value:number)=>{
    const chanteValues = order.map((product)=>{
        if (product.id === productId) {
          product.amount = product.amount+value
        }
        return product
    })
    set({order:chanteValues});
  },
  deleteProduct:(order:IOrder[],productId:number)=>{
    const filterProduct = order.filter((product)=>product.id!==productId);
    set({order:filterProduct});
    notify('Producto eliminado corectamente!.')
  }
}))