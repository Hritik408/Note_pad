import { useDispatch, useSelector } from "react-redux";
import { clearTrash, removeItem } from "../utils/trashSlice";

const Trash_area = () => {
    const items = useSelector((store) => store.trash.items)
    console.log(items);

   const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem({id}));
};


  return (
    <>
         
         <div>
             {items.map(item => (
                    <div key={item.id} className="flex justify-between p-1 m-1 border-b-2">
                        <div className="pr-3 ">{item.text}</div>
                        <button 
                            className="text-red-500 ml-3" 
                            onClick={() => handleRemoveItem(item.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
          </div>

    </>
  );
};

export default Trash_area;
