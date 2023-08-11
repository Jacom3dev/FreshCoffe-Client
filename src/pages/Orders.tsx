import useSWR from "swr";
import { useStore } from "zustand";
import { API } from "../store/api";
import { formatMoney } from "../helpers/formatMoney";
import { store } from "../store";


const Orders = () => {
    const {completeOrder} = useStore(store);
    const AUTH_TOKEN = `Bearer ${localStorage.getItem('AUTH_TOKEN')??''}`;
    const fetcher = ()=>API.get('/order',{
        headers:{
            Authorization: AUTH_TOKEN
        }
    }).then(({data})=>data);

    const {data} = useSWR('/oder',fetcher,{refreshInterval:2000});

  return (
    <div className="">
        <h1 className="text-4xl font-black">Ordenes</h1>
        <p className="text-2xl my-10">Administra las ordenes desde aquí</p>

        <div className="grid grid-cols-2 gap-2">
            {data?.data.map((order:any)=>(
            <div key={order.id} className="p-5 bg-white shadow space-y-2 border-b">
                <p className="text-xl font-bold text-slate-600">Contenido del pedido</p>
                {order?.products.map((product:any)=>(
                    <div key={product.id} className="border-b border-b-slate-200 last-of-type:border-none py-4 flex justify-between items-center">
                        <div>
                            <p className="text-sm">ID: {product.id}</p>
                            <p>{product.name}</p>
                            <p>Cantidad: <span className="font-bold">{product.pivot.amount}</span></p>
                        </div>
                        <img src={`/img/${product.image}.jpg`} alt={product.name} className="w-32 h-32" />
                    </div>
                ))}
                <p className="text-lg font-bold text-amber-500">Total a pagar: <span className="font-normal text-slate-600">{formatMoney(order.total)}</span></p>
                
                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded uppercase text-white font-bold text-center w-full cursor-pointer"
                    onClick={()=>completeOrder(order.id)}
                >Complettar</button>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Orders;