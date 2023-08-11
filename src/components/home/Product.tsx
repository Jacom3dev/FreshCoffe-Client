import { useStore } from "zustand";
import { formatMoney } from "../../helpers/formatMoney";
import { IProduct } from "../../interfaces";
import { store } from "../../store";


interface IProps {
  product: IProduct;
  button: 'add' | 'disabled'
}

export const Product = ({ product, button }: IProps) => {
  const { name, price, image, } = product;
  const { setShowModal, setProduct, changeStateProduct} = useStore(store);
  return (
    <div className="border p-3 shadow bg-white">
      <img src={`/img/${image}.jpg`} alt={name} className="w-full" />

      <div className="p-5">
        <h3 className="text-1xl lg:text-2xl font-bold">{name}</h3>
        <p className="mt-5 font-black text-2xl lg:text-4xl text-amber-500">{formatMoney(price)}</p>

        {button === "add" ?
          <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
            onClick={() => {
              setShowModal(true);
              setProduct(product);
            }}
          >Agregar</button> :
          <button
            type="button"
            className="bg-red-600 hover:bg-red-800 text-white w-full mt-5 p-3 uppercase font-bold"
            onClick={() =>changeStateProduct(product.id)}
          >Porducto agotado</button>
        }

      </div>
    </div>
  )
}
