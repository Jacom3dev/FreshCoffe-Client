import { ICategory, IOrder, IProduct } from ".";

export interface IStore {
  showModal: boolean;
  category: ICategory | null;
  categories:ICategory[];
  product: IProduct | null;
  order: IOrder[];
  createOrder: (oder:IOrder[],fn:() => Promise<void>)=>void;
  setCategory: (category:ICategory)=>void;
  getCategories: ()=>void;
  setProduct: (product:IProduct)=>void;
  setShowModal: (state:boolean)=>void;
  setOrder:(order:IOrder[],product:IOrder)=>void;
  changeAmount:(order:IOrder[],productId:number,value:number)=>void;
  deleteProduct:(order:IOrder[],productId:number)=>void;
}
