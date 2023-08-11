import useSWR from "swr";
import { API } from "../store/api";
import { Product } from "../components";
import { IProduct } from "../interfaces";

const Products = () => {

  const AUTH_TOKEN = `Bearer ${localStorage.getItem('AUTH_TOKEN')??''}`;
  const fetcher = () => API.get("/products",{
    headers:{
        Authorization: AUTH_TOKEN
    }
}).then(({data})=>data.data)
  const {data,isLoading} = useSWR("/products",fetcher,{refreshInterval:2000});

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <div>
        <h1 className="text-4xl font-black">Productos</h1>
        <p className="text-2xl my-10">Administra los productos desde aquí</p>

        
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {data?.map((product:IProduct)=>(
          <Product key={product.id} product={product} button="disabled"/>
        ))}
      </div>
    </div>
  )
}

export default Products;