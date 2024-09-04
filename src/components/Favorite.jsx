import { useSelector } from "react-redux";
import Search from "./Search";
// import { useEffec } from "react";
// function Favorite({ notes, onNoteClick }) {
function Favorite({names}) {
   

    const item = useSelector((store) => store.favorite.items);

    
    return (
        <>
        <Search /> 
        <div className="flex flex-col flex-grow bg-red-50">
            {item.map((it) => (
                <div className="pl-2 pt-2">{it}</div>
                
            ))} 
      
            </div>
      
         </>
    )
}

export default Favorite;


// import React from 'react';
// import Search from './Search';
// import { useSelector } from "react-redux";


// function Favorite({ notes, onNoteClick }) {
//   const savedNames = Object.keys(notes);

//  const item = useSelector((store) => store.favorite.items);


//   return (
//     <>
//     <Search />

//     <div className="flex flex-col flex-grow bg-red-50">
//              {item.map((it) => (
//                  <div className="pl-2 pt-2">{it}</div>                
//              ))}   
//            </div>

//         <div className="mt-4">
//         <h3 className="text-white">Favorite Notes</h3>
//         <ul>
//             {savedNames.map((name) => (
//             <li
//                 key={name}
//                 onClick={() => onNoteClick(name)}
//                 className="cursor-pointer text-blue-300"
//             >
//                 {name}
//             </li>
//             ))}
//         </ul>
//         </div>
//     </>
//   );
// }

// export default Favorite;


