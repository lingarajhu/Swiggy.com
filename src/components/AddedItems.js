import { CARD_IMG } from "../utils/constants";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const AddedItems = ({ items }) => {
  console.log(items);

  const dispatch = useDispatch();

  const oneMoreItem = useSelector((store) => store.cart.items);

  const handelClickV2 = (item) => {
    dispatch(addItem(item));
  };

  const handelClickV1 = () => {
    dispatch(removeItem());
  };

  return (
    <div>
      {items.map((item) => (
        <div className="flex justify-between items-center font-medium text-lg p-3">
          <div className="w-3/12">
            <img
              className="rounded-md w-full h-full"
              src={CARD_IMG + item.card.info.imageId}
            />
          </div>
          <div className="w-6/12">
            <div className="text-lg font-bold my-2">{item.card.info.name}</div>
            <div>
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </div>
          </div>
          <div className="flex items-center">
            <button
              className="border border-green-400 rounded-s-md bg-gray-50 font-bold px-3"
              onClick={handelClickV1}
            >
              -
            </button>
            {/* <span className="border px-3 border-green-400 bg-gray-50 font-bold">
              C
            </span> */}
            <button
              className="border px-3 border-green-400 rounded-e-md bg-gray-50 font-bold"
              onClick={() => handelClickV2(item)}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddedItems;
