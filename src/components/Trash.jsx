import { useSelector } from "react-redux"
import Search from "./Search";
import Trash_area from "./Trash_area";

function Trash() {

return (
    <>
    <div >
        <Search showButton={true}/>
    </div>
     {/* <Search />  */}
    <Trash_area />
    </>
)
}

export default Trash;