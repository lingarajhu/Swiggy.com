import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useMenuList = (resID) => {
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(MENU_API + resID);
    const json = await data.json();

    setMenuItems(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  };

  return menuItems;
};

export default useMenuList;
