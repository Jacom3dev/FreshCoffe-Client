import { useStore } from "zustand";
import useSWR from 'swr';
import { Product } from "../components";
import { store } from "../store";
import { API } from "../store/api";
import { IProduct } from "../interfaces";


const Home = () => {
  const AUTH_TOKEN = `Bearer ${localStorage.getItem('AUTH_TOKEN')??''}`;
  const {category} = useStore(store);

  const fetcher = () => API.get("/products",{
    headers:{
        Authorization: AUTH_TOKEN
    }
  }).then(({data})=>data.data)
  const {data,isLoading} = useSWR("/products",fetcher);

  if (isLoading) {
    return 'Loading...';
  }
  
  const products = data?.filter((product:IProduct)=>product.category_id === category?.id);

  return (
    <>
      <h1 className="text-4xl font-black">{category&&category.name}</h1>
      <p className="text-2xl my-10">Elige y personaliza tu pedido a continuacion</p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product:IProduct)=>(
          <Product key={product.id} product={product} button="add"/>
        ))}
      </div>
    </>
  );
}

export default Home;