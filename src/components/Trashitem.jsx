import { useSelector } from "react-redux"

function Trashitem() {

 const item = useSelector((store) => store.trash.items)

return (
    <>
    <div>
        "hello"
    </div>
    </>
)
}

export default Trashitem;