import { useDispatch } from "react-redux";
import { removeItem } from "../utils/trashSlice";

const Trash_area = ({ items }) => {
  console.log(items);

  const dispatch = useDispatch();
  const handleClear = (id) => {
    console.log(id);
    dispatch(removeItem({ id }));
  };

  return (
    <>
      <div>
        {items.map((item) => (
          <div key={item.id} className="w-9/12 p-2 m-2">
            <div className="border-b-2 border-red-500 text-left flex justify-between">
              {item.text}
              <button
                className="text-white bg-red-500 rounded-sm"
                onClick={handleClear(item.id)}
              >
                clear
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Trash_area;
