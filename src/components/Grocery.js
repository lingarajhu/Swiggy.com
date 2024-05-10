import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Grocery = () => {
  const { defaultUser } = useContext(UserContext);

  return (
    <div>
      <h1 className="text-7xl text-green-500">This is grocery section </h1>
      <h1>{defaultUser}</h1>
    </div>
  );
};

export default Grocery;
