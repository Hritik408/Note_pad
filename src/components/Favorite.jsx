import { useSelector } from "react-redux";
import Search from "./Search";

function Favorite() {

    const item = useSelector((store) => store.favorite.items);
    // const prod = useSelector((store) => store.temp.items);
    
    return (
        <>
        <Search /> 
        <div className="flex flex-col flex-grow bg-red-50">
            {item.map((it) => (
                <div className="pl-2 pt-2">{it}</div>
            ))}

            {/* {prod.map((it) => (
                <div className="pl-2 pt-2 text-orange-400">{it}</div>
            ))} */}
            
        </div> 
         {/* {items} */}
      
         </>
    )
}

export default Favorite;