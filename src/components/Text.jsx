import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import UserContext from "../utils/UserContext";
import { addItem } from "../utils/trashSlice";
import { addThing } from "../utils/FavoriteSlice";
import { addSaved } from "../utils/savedSlice";
import { addtemp } from "../utils/tempSlice";
import Favorite from "./Favorite";

function Text({ myvalue }) {
  const [inputText, setInputText] = useState(myvalue);
  const [isSaved, setIsSaved] = useState(false);
  const [savedNotes, setSavedNotes] = useState({});
  const { loggedInUser, setuserName } = useContext(UserContext);

  const dispatch = useDispatch();
  const handleSave_trash = () => {
    dispatch(addItem(inputText));
    setInputText(""); // clear the text after saving
  };

  const handleSave_favorite = () => {
    dispatch(addThing(inputText));
    setInputText(""); // clear the text after saving
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputText(value);

    if (!isSaved && value.length <= 45) {
      setuserName(value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isSaved) {
      setIsSaved(true);
      const value = e.target.value;
      setSavedNotes({
        ...savedNotes,
        [loggedInUser]: value,
      });
      dispatch(addtemp(value));
    } else if (
      e.key === "Backspace" &&
      isSaved &&
      e.target.selectionStart === loggedInUser.length
    ) {
      setIsSaved(false);
      setuserName(inputText);
      dispatch(addSaved(inputText));
    }
  };

  const openNote = (name) => {
    setuserName(name);
    setInputText(savedNotes[name]);
    setIsSaved(true); // Prevent further saving as this is already a saved note
  };

  return (
    <div className="bg-slate-600 w-[77%] p-4">
      <div className="mb-4">
        <button className="text-blue-500" onClick={handleSave_trash}>
          Trash
        </button>
        <button className="text-purple-500 ml-3" onClick={handleSave_favorite}>
          Favorite
        </button>
      </div>

      <textarea
        className="bg-slate-400 h-screen w-full p-3"
        value={inputText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></textarea>

      {/* <Favorite notes={savedNotes} onNoteClick={openNote} /> */}
    </div>
  );
}

export default Text;




