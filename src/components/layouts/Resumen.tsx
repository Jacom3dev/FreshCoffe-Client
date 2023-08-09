import { useStore } from 'zustand';
import { store } from '../../store';
import { ResumenProduct } from './ResumenProduct';
import { formatMoney } from '../../helpers/formatMoney';
import { useAuth } from '../../hooks/useAuth';

export const Resumen = () => {
  const { order,createOrder } = useStore(store);

  const {logout} = useAuth({middleware:"",url:"/"});
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    createOrder(order,logout);
  }
  return (
    <div className="md:w-72 overflow-y-scroll h-screen p-5">
      <h1 className="text-4xl font-black">Mi Pedido</h1>
      <p className="text-lg my-5">Aqui podras ver el resumen y totales de los productos que desees comprar</p>

      <div className="py-4">
        {order.length === 0
          ?
          <p className="text-2xl font-black uppercase text-center">no hay productos</p>
          : order.map((product)=>(
            <ResumenProduct {...product} key={product.id}/>
          ))
        }
      </div>

      <p className="text-xl mt-10">total: {formatMoney(order?.reduce((total,order)=>total+(order.price*order.amount),0))} </p>

      <form className="w-full" onSubmit={onSubmit}>
        <div className="mt-5">
          <button
            type="submit"
            className={`bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded uppercase text-white font-bold text-center w-full cursor-pointer ${order.length===0&&'disabled:bg-indigo-400'}`}
            disabled={order.length===0}
          >confirmar pedido</button>
        </div>
      </form>
    </div>
  )
}
