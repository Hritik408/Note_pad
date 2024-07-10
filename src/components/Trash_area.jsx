import { useDispatch, useSelector } from "react-redux";
import { clearTrash, removeItem } from "../utils/trashSlice";
import Bottom from "./Bottom";
import React, { useState, useEffect } from "react";
import { HiEye } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";

const Trash_area = () => {
  const items = useSelector((store) => store.trash.items);

  const [textLarge, settextLarge] = useState(false);
  const [showIcon, setshowIcon] = useState(false);

  const [changeBackground, setchangeBackground] = useState(false);

  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  const toggleTextSize = () => {
    settextLarge(!textLarge);
    setshowIcon(!showIcon);
  };

  const toggleBackground = () => {
    setchangeBackground(!changeBackground);
  }
  

  return (
    <>
    <div className={`${changeBackground ? "bg-gray-700" : "bg-stone-200"} w-[62%] flex flex-col h-screen" ` }>

<div className="flex flex-col flex-grow">
  {items.map((item) => (
    <div
      key={item.id}
      className="flex justify-between p-1 m-1 border-b-2 border-neutral-300"
    >
      <div className={` ${textLarge ? "text-2xl" : " "}`}>
        {item.text}
      </div>
      <button
        className="text-red-500 ml-3"
        onClick={() => handleRemoveItem(item.id)}
      >
        Remove
      </button>
    </div>
  ))}
</div>

    
     

        <div className="mt-auto p-2 bg-gray-200 ">
      
          <div className="bg-gray-800 mx-[-8px] mb-[-8px] flex">

            <button onClick={toggleTextSize}>
              {showIcon ? (
                <IoDocumentTextOutline className="ml-2 mt-1 text-white text-xl" />
              ) : (
                <HiEye className="ml-2 mt-1 text-white text-xl" />
              )}
            </button>

            <button onClick={toggleBackground}>
              bright
            </button>
        

          </div>
        </div>
      </div>
    </>
  );
};

export default Trash_area; 
