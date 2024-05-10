import { useState, useContext } from "react";
import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Headder = () => {
  const [btnName, setBtnName] = useState("Log In");
  const onlineStatus = useOnlineStatus();

  const { defaultUser } = useContext(UserContext);

  // subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between px-8 border-b">
      <img
        alt="Logo"
        className="w-[90px] h-[90px] cursor-pointer"
        src={LOGO_IMG}
      />
      <div className="flex items-center">
        <ul className="flex justify-between items-center mx-5 gap-10 text-md font-medium">
          <li>{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="bg-orange-400 px-4 py-1 rounded-md"
            onClick={() => {
              btnName === "Log In"
                ? setBtnName("Log out")
                : setBtnName("Log In");
            }}
          >
            {btnName}
          </button>
          <li>
            <Link to="/grocery">{defaultUser}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Headder;
