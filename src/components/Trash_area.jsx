import { useDispatch, useSelector } from "react-redux";
import { clearTrash, removeItem } from "../utils/trashSlice";

const Trash_area = () => {
    const items = useSelector((store) => store.trash.items)
    // console.log(items);

   const dispatch = useDispatch();

  const handleclear = () => {
    dispatch(removeItem());
  }

  return (
    <>
       {/* <div>
        {items.map((item) => (
          // <div key={item.id} className="w-9/12 p-2 m-2">
          <div className="w-9/12 p-2 m-2">
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
       </div>  */}

      <div>
        {items.map((item) => (
          <div className="p-1 m-1 border-b-2 border-red-500 flex justify-between">
          <div className="pr-3">{item}</div>
          <button className="pl-1 pr-1 rounded-md bg-red-400 text-white"
           onClick={handleclear}
          >clear me</button>
          </div>
        ))}
      </div>

    </>
  );
};

export default Trash_area;
