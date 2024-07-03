import { useSelector } from "react-redux"
import Search from "./Search";
import Trash_area from "./Trash_area";

function Trashitem() {

 const item = useSelector((store) => store.trash.items)

return (
    <>
    <Search />
    <Trash_area items = {item}/>
    </>
)
}

export default Trashitem;