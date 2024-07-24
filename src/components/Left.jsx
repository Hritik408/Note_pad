import { Link } from "react-router-dom";
import Trashitem from "./Trash";

function Left() {
  return (
    <>
      <div className=" bg-slate-600 w-[16%] h-screen">
        <div className="pt-3 pb-3 hover:bg-green-700">
          {/* <Link to="new_note"> */}
            <button className="">
            <Link to="new_note">
              <span className="text-white pl-3 pr-28">
                <span className="bg-white">➕</span> New notes
              </span>
              </Link>
            </button>
          {/* </Link> */}
        </div>

        <div className="hover:bg-blue-700 pt-1 pb-1 cursor-pointer">
          <Link to="/scratch">
            <button className="">
              <span className="text-white pl-3 ">📝 Scratch pad</span>
            </button>
          </Link>
        </div>

        <div className="hover:bg-blue-700 pt-1 pb-1 cursor-pointer">
          <button className="">
            <span className="text-white pl-3 ">🧾 Notes</span>
            {/* Notes  */}
          </button>
        </div>

        <div className="hover:bg-blue-700 pt-1 pb-1 cursor-pointer">
          <button>
            <span className="text-white pl-3 ">⭐ Favorite</span>
          </button>
        </div>

        <Link to="/trash">
        <div className="hover:bg-blue-700 pt-1 pb-1 cursor-pointer">
            <button>
              <span className="text-white pl-3 ">🗑️ Trash</span>
            </button>
        </div>
        </Link>

        <div className="hover:bg-blue-700 pt-1 pb-1 cursor-pointer">
          <button>
            <span className="text-white pl-3 ">📚categories</span>
          </button>
        </div>
      </div>
    </>
  );
}
export default Left;
