import { useSelector } from "react-redux";
import Search from "./Search";

function Favorite() {
    const item = useSelector((store) => store.trash.items);
    console.log(item);

    return (
        <>
        <Search />
        {item}
        </>
    )
}

export default Favorite;