import { create } from 'zustand';
import { ICategory, IOrder, IProduct, IStore } from '../interfaces';
import { notify } from '../helpers/notify';
import { API } from './api';


export const store = create<IStore>((set) => ({
  showModal:false, 
  category:null,
  categories:[],
  product:null,
  order: [],
  errors: null,
  setCategory: (category:ICategory)=>{
   set({category});
  },
  getCategories:async ()=>{
    try {
      const {data} = await API.get('/categories');    
      set({categories:data.data});
      set({category:data.data[0]});
    } catch (e) {
      //TODO: errors
    }
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
      return product;
    })
    set({order:chanteValues});
  },
  deleteProduct:(order:IOrder[],productId:number)=>{
    const filterProduct = order.filter((product)=>product.id!==productId);
    set({order:filterProduct});
    notify('Producto eliminado corectamente!.')
  }
}))