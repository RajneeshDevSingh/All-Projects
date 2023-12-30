import React from "react";
import { useSelector , useDispatch} from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "./utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
 const handleClearCart = ()=>
 {
    dispatch(clearCart())
 }
  return (
    <div className="m-3 p-3 mx-auto my-5 flex flex-col rounded-xl w-3/5 bg-slate-200 shadow-xl bg-stone-200-300 border-solid border-4 border-white">
      <div className="flex text-center justify-center">
        <button className="w-auto p-2 border-5 border-solid border-red-500 bg-slate-300 rounded-xl " onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
      <div>
    {cartItems.length == 0 && (<h1 className="p-2 flex text-2xl text-center justify-center">Cart is empty, Add items to the cart</h1>)}
      <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
