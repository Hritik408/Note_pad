import React, {useState} from "react";
function Scratch() {

    const initial_text = [
      '# Scratchpad',
      'The easiest note to find.'
    ].join('\n');   // Convert the array to a string with newlines

  const [text, settext] = useState(initial_text);

  const handleChange = (e) => {
     settext(e.target.value);
  };

  return (
    <>
      <div className="bg-gray-700 w-[85%] h-screen">
        
      <textarea
        className="pl-1 w-full h-full bg-gray-700 text-white" 
        value={text}
        onChange={handleChange}
        >
      </textarea>
      </div>
    </>
  );
}


export default Scratch;
