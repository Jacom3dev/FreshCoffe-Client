import { useState } from 'react';
import { useStore } from 'zustand';
import { formatMoney } from "../../helpers/formatMoney"
import { IOrder } from "../../interfaces"
import { store } from '../../store';

export const ResumenProduct = ({ name, amount, image, price, id }: IOrder) => {
  const [amountState, setAmountState] = useState(amount);
  const { order, changeAmount,deleteProduct } = useStore(store);

  return (
    <div className="shadow space-y-1 p-4 bg-white border-t-2 mb-1">
      <img src={`/img/${image}.jpg`} alt={name} className="w-full h-32" />
      <div className="space-y-2">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-lg text-gray-700">Cantidad: <span className="text-indigo-600">{amountState}</span></p>
        <p className="text-lg font-bold text-amber-500">
          Precio:{formatMoney(price)}
        </p>
        <p className="text-lg text-gray-700">
          Subtotal: {formatMoney(price * amountState)}
        </p>
      </div>

      <div className="flex justify-between gap-2 pb-4">
        <div className="flex gap-4 mt-2">
          <button type="button" onClick={() => { 
              if (amountState>1) {        
                setAmountState(amountState - 1);
                changeAmount(order, id, -1);
              }
            }
          }>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6 text-indigo-600 hover:text-indigo-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <p className="text-2xl">{amountState}</p>
          <button type="button" onClick={() => { 
              if (amountState<5) {
                setAmountState(amountState+1);
                changeAmount(order, id, +1);
              }  
           }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6 text-indigo-600 hover:text-indigo-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
        <button
          type="button"
          className="bg-red-700 p-2 text-white rounded-md font-bold uppercase shadow-md text-center"
          onClick={()=>deleteProduct(order,id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
