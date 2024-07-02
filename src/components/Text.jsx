import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/trashSlice";

function Text() {

    const [inputText, setinputText] = useState(" ");
    const handleChange = (e) => {
        settext(e.target.value);
    }

    const dispatch = useDispatch();
    const handleSave_trash = () => {
         dispatch(addItem(inputText));
         setinputText(''); // clear the text after saving
    }
    
    return (
        <>
        <div className="bg-slate-600 w-[77%]">
            {/* <button className="text-red-500 mr-3" >Favourite</button> */}
            {/* <button className="text-blue-500" onClick={handleTrash}>Trash</button> */}
         <textarea 
         className="bg-slate-400 h-screen w-full"
         value={inputText}
         placeholder="Type something here..."
         onChange={handleChange} 
         >
          </textarea>
    <button className="text-blue-500" onClick={handleSave_trash}>Trash</button>

        </div>
        </>
    )
}

export default Text;