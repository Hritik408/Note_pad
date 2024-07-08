import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/trashSlice";

function Text() {

    const [inputText, setinputText] = useState(" ");

    const dispatch = useDispatch();
    // const items = useSelector(state => state.trash.items);

    const handleSave_trash = () => {
         dispatch(addItem(inputText));
         setinputText(''); // clear the text after saving
    }

    const handleChange = (e) => {
        setinputText(e.target.value);
    }
    
    return (
        <>
        <div className="bg-slate-600 w-[77%]">
        <button className="text-blue-500" onClick={handleSave_trash}>Trash</button>
        <button className="text-purple-500 ml-3" onClick={handleSave_trash}>Favorite</button>
         <textarea 
         className="bg-slate-400 h-screen w-full"
         value={inputText}
        //  placeholder="Type something here..."
         onChange={handleChange} 
         >
          </textarea>
        </div>
        </>
    )
}

export default Text;