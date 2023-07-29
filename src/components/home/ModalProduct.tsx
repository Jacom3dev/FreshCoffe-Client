import { useState } from 'react';
import { useStore } from 'zustand';
import { store } from '../../store';
import { formatMoney } from '../../helpers/formatMoney';

  
export const ModalProduct = () => {
  const [amount, setAmount] = useState(1);
  const {setShowModal,product,order,setOrder} = useStore(store);

  return (
    <div className="md:flex gap-10">
        <div className="md:w-1/3">
            <img src={`/img/${product?.image}.jpg`} alt={product?.name} />
        </div>
        <div className="md:w-2/3">
            <div className="flex justify-end">
                <button onClick={()=>setShowModal(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
            <h1 className="text-3xl font-bold">{product?.name}</h1>
            <p className="mt-5 font-black text-5xl text-amber-500">{formatMoney(product?.price??0)}</p>
            <div className="flex gap-4 mt-5">
                <button type="button" onClick={()=>setAmount(amount===1?1:amount-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                <p className="text-3xl">{amount}</p>
                <button type="button" onClick={()=>setAmount(amount=== 5?5:amount+1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
            <button
                className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 text-white font-bold uppercase rounded"
                onClick={()=>{
                    product&&setOrder(order,{...product,amount}),setShowModal(false)
                }}
            >Añadir al pedido</button>
        </div>
    
    </div>
  )
}
