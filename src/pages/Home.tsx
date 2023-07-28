import { useStore } from "zustand";
import { Product } from "../components";
import { store } from "../store";

const Home = () => {
  const {products,category} = useStore(store);
  
  return (
    <>
      <h1 className="text-4xl font-black">{category?category:'Inicio'}</h1>
      <p className="text-2xl my-10">Elige y personaliza tu pedido a continuacion</p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product)=>(
          <Product key={product.id} product={product}/>
        ))}
      </div>
    </>
  );
}

export default Home