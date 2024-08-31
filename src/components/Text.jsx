import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/trashSlice";
import UserContext from "../utils/UserContext";
import { addSaved } from "../utils/savedSlice";
import { addtemp } from "../utils/tempSlice";
import { addThing } from "../utils/FavoriteSlice";

function Text({myvalue}) {

  const [inputText, setinputText] = useState(myvalue);
  const [isSaved, setisSaved] = useState(false);
  const { loggedInUser, setuserName } = useContext(UserContext);

  const dispatch = useDispatch();
  // const items = useSelector(state => state.trash.items);

  const handleSave_trash = () => {
    dispatch(addItem(inputText));
    setinputText(""); // clear the text after saving
  };

  const handleSave_favorite = () => {
    dispatch(addThing(inputText));
    setinputText(""); // clear the text after saving
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setinputText(value);
    // console.log(value);

    if (!isSaved && value.length <= 45) {
      setuserName(value);
      //  dispatch(addSaved(loggedInUser));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter" && !isSaved) {
      setisSaved(true);
    //  console.log(e.target.value);
    const value = e.target.value;
      // dispatch(addSaved(e.target.value));
      dispatch(addtemp(value));
    } 
    else if (
      e.key == "Backspace" &&
      isSaved &&
      e.target.selectionStart == loggedInUser.length
    ) {
      setisSaved(false);
      setuserName(inputText);
      dispatch(addSaved(inputText));
    }
  };

  // const{loggedInUser, setuserName} = useContext(UserContext);

  return (
    <>
      <div className="bg-slate-600 w-[77%]">
        <button className="text-blue-500" onClick={handleSave_trash}>
          Trash
        </button>
        <button className="text-purple-500 ml-3" onClick={handleSave_favorite}>
          Favorite
        </button>

        <textarea
          className="bg-slate-400 h-screen w-full pl-3"
          value={inputText}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></textarea>

      </div>
    </>
  );
}

export default Text;
