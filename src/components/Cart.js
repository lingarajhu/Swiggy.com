import { useSelector } from "react-redux";
import AddedItems from "./AddedItems";
import { CART_IMG } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCart());
  };

  return cartItems.length === 0 ? (
    <div className="w-5/12 p-3 m-auto border rounded-md text-center">
      <h1 className="font-bold text-xl bg-orange-400 text-white text-center my-3 p-2">
        Your Cart is empty
      </h1>
      <img src={CART_IMG} />
      <h1 className="font-bold text-2xl">
        GO TO{" "}
        {
          <Link className="text-orange-500 hover:underline ease-in-out" to="/">
            HOME
          </Link>
        }{" "}
        TO ADD ITEMS
      </h1>
    </div>
  ) : (
    <div className="w-5/12 p-3 border rounded-md m-auto">
      <div className="font-bold text-xl bg-orange-400 text-white text-center my-3 p-2">
        You added this items
      </div>
      <div>
        <AddedItems items={cartItems} />
      </div>
      <button
        className="bg-black text-white w-full p-2 m-2 rounded-lg text-lg font-semibold"
        onClick={handleClick}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
