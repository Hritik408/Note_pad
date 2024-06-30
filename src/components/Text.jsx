import React, {useState} from "react";

function Text() {

    const [text, settext] = useState(" ");
    const handleChange = (e) => {
        settext(e.target.value);
    }
    
    return (
        <>
        <div className="bg-slate-600 w-[77%]">
         <textarea 
         className="bg-slate-400 h-screen w-full"
         value={text}
         onChange={handleChange}
         ></textarea>
        </div>
        </>
    )
}

export default Text;