import ItemList from "./ItemList";

const RestorentCategory = (props) => {
  const handelClick = () => {
    props.setShowIndex();
    props.setCloseAccordian();
  };
  return (
    <div>
      <div className="p-3 shadow-lg mx-auto my-4 bg-gray-50">
        <div
          className="flex justify-between items-center cursor-pointer select-none"
          onClick={handelClick}
        >
          <span className="text-lg font-medium">
            {props?.details?.title} ({props?.details?.itemCards.length})
          </span>
          <span>▼</span>
        </div>
        {props?.showAccordian && props?.closeAccordian && (
          <ItemList data={props?.details?.itemCards} />
        )}
      </div>
    </div>
  );
};

export default RestorentCategory;
