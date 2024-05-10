import { MENU_API } from "../utils/constants";
import { useState, useEffect } from "react";

const useRestoName = (resID) => {
  const [restoName, setRestoName] = useState(null);

  useEffect(() => {
    fetchRestoData();
  }, []);

  const fetchRestoData = async () => {
    const data = await fetch(MENU_API + resID);
    const json = await data.json();

    setRestoName(json?.data?.cards[2]);
  };

  return restoName;
};

export default useRestoName;
