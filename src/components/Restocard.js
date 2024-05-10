import { CARD_IMG } from "../utils/constants";

const Restocard = (props) => {
  const { resDetails } = props;

  const { name, cuisines, costForTwo, cloudinaryImageId, sla, avgRating } =
    resDetails?.info;
  return (
    <div
      data-testid="restoCard"
      className="w-[320px] h-[350px] p-2 rounded-md hover:shadow-2xl ease-in-out duration-500"
    >
      <div className="h-[60%]">
        <img
          alt="hotel Image"
          className="h-[100%] w-[100%] rounded-md"
          src={CARD_IMG + cloudinaryImageId}
        />
      </div>
      <div className="">
        <div className="flex items-center justify-between mt-3">
          <h4 className="font-bold text-lg">{name}</h4>
          <h5 className="bg-green-500 px-2 rounded-md">{avgRating}</h5>
        </div>
        <div className="flex items-center justify-between my-1 font-medium">
          <p>{cuisines.join(", ")}</p>
          <p className="">{costForTwo}</p>
        </div>
        <p className="my-1">{sla?.slaString}</p>
      </div>
    </div>
  );
};

export default Restocard;
