import Restocard from "./Restocard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restoData, setRestoData] = useState([]);
  const [filteredResto, setFilteredResto] = useState([]);

  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  // context
  const { defaultUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);

    const json = await data.json();
    setRestoData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResto(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // console.log(filteredResto);

  if (onlineStatus === false)
    return <h1>SOMETHING WENT WRONG PLEASE CHECK YOUR INTERNET CONNECTION</h1>;

  return restoData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="overflow-x-hidden relative left-20">
      <div className="m-5 gap-4 px-4 ">
        <div className="flex items-center gap-4">
          <input
            className="border w-[350px] h-9 rounded-2xl pl-2"
            data-testid="searchInput"
            type="text"
            placeholder="Find any Food....."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-orange-400 px-3 py-1 rounded-md"
            onClick={() => {
              const filterdBySearch = restoData.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredResto(filterdBySearch);
            }}
          >
            Search
          </button>
          <button
            className="bg-orange-400 px-3 py-1 rounded-md"
            onClick={() => {
              const filtered = restoData.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredResto(filtered);
            }}
          >
            Top Restorents
          </button>
          <label>User Name: </label>
          <input
            className="border h-9 rounded-2xl pl-2"
            value={defaultUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="left-8 relative flex gap-8 flex-wrap">
        {filteredResto.map((restorent) => (
          <Link key={restorent.info.id} to={"/restourant/" + restorent.info.id}>
            <Restocard resDetails={restorent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
