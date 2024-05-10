import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestoName from "../utils/useRestoName";
import useMenuList from "../utils/useMenuList";
import RestorentCategory from "./RestorentCategory";
import { useState } from "react";

const RestourantMenu = () => {
  const { resID } = useParams();
  const restoName = useRestoName(resID);
  const menuItems = useMenuList(resID);
  const [showIndex, setShowIndex] = useState(0);
  const [closeAccordian, setCloseAccordian] = useState(true);

  if (menuItems === null || restoName === null) return <Shimmer />;

  const {
    name,
    city,
    costForTwoMessage,
    cuisines,
    avgRatingString,
    totalRatingsString,
    sla,
    feeDetails,
  } = restoName?.card?.card?.info;

  const category = menuItems.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="relative w-6/12 mx-auto">
      <div className="rounded-md hover:shadow-2xl ease-in-out duration-500 mt-5 px-3  py-1">
        <div className="font-bold text-xl my-2">{name}</div>
        <div className="font-medium">
          {avgRatingString}({totalRatingsString}) - {costForTwoMessage}
          <div className="text-orange-400 cursor-pointer">
            {cuisines.join(", ")}
          </div>
          <div className="font-normal">
            {city} | {sla?.slaString}
          </div>
          <div className="font-thin border-t my-2 py-2">
            {feeDetails?.message}
          </div>
        </div>
      </div>
      <div className="relative left-[45%] my-6 text-2xl font-bold text-orange-400">
        /DISHES/
      </div>
      <div>
        {category.map((items, index) => {
          return (
            <RestorentCategory
              key={items?.card?.card?.title}
              details={items?.card?.card}
              showAccordian={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
              closeAccordian={closeAccordian}
              setCloseAccordian={() => setCloseAccordian(!closeAccordian)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestourantMenu;
