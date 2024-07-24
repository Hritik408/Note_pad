import { useDispatch, useSelector } from "react-redux";
import { clearTrash, removeItem } from "../utils/trashSlice";
import Bottom from "./Bottom";
import React, { useState, useEffect } from "react";
import { HiEye } from "react-icons/hi";
import { IoDocumentTextOutline, IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";

const Trash_area = () => {
  const items = useSelector((store) => store.trash.items);

  const [textLarge, settextLarge] = useState(false);
  const [textShowIcon, settextShowIcon] = useState(false);
  const [showBgIcon, setshowBgIcon] = useState(false);

  const [changeBackground, setchangeBackground] = useState(false);

  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  const toggleTextSize = () => {
    settextLarge(!textLarge);
    settextShowIcon(!textShowIcon);
  };

  const toggleBackground = () => {
    setchangeBackground(!changeBackground);
    setshowBgIcon(!showBgIcon);
  };

  let time_val = new Date().toLocaleTimeString();
  let date_val = new Date().toLocaleDateString();
  const [time, settime] = useState(time_val);
  const [date, setdate] = useState(date_val);

  useEffect(() => {
    setInterval(() => {
      settime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <>
      <div
        className={`${
          changeBackground ? "bg-stone-200" : "bg-gray-600"
        } w-[62%] flex flex-col h-screen" `}
      >
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

        <div className="mt-auto p-2">
          <div className="bg-gray-800 mx-[-8px] mb-[-8px] flex justify-between">
            <button onClick={toggleTextSize}>
              {textShowIcon ? (
                <IoDocumentTextOutline className="ml-2 mt-1 text-white text-xl" />
              ) : (
                <HiEye className="ml-2 mt-1 text-white text-xl" />
              )}
            </button>

            <h1>{date}</h1>
            <h1>{time}</h1>

            <button onClick={toggleBackground}>
              {showBgIcon ? (
                <IoMoonOutline className="mr-2 text-white text-lg" />
              ) : (
                <GoSun className="mr-2 text-white text-lg" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trash_area;
