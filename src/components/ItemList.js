import { CARD_IMG } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = (props) => {
  const items = props?.data;

  const dispatch = useDispatch();

  const handelClick = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b flex justify-between"
        >
          <div className="w-9/12">
            <div>
              {item?.card?.info?.itemAttribute?.vegClassifier === "NONVEG"
                ? "🔺"
                : "🟢"}
            </div>
            <div className="font-bold text-lg">{item?.card?.info?.name}</div>
            <div className="text-base font-semibold">
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </div>
            <p>{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 rounded-md m-2">
            <div className="absolute my-28 ml-9">
              <button
                className="px-5 py-1 shadow-lg font-semibold m-auto bg-gray-50 text-green-500 rounded-md"
                onClick={() => handelClick(item)}
              >
                Add
              </button>
            </div>
            <img
              src={CARD_IMG + item?.card?.info?.imageId}
              className="w-full rounded-md h-36 object-center"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
