import { Link } from "react-router-dom";

function Left() {
  return (
    <>
      <div className=" bg-slate-600 w-[20%] h-screen">
        <div className="pt-3 pb-3 hover:bg-green-700">
            <Link to="new_note">
          <button className="">
            <span className="text-white pl-3 pr-28">
              {" "}
              <span className="bg-white">➕</span> New notes</span>
          </button>
           </Link>
        </div>

        <div className="hover:bg-blue-700 pt-1 pb-1">
          <Link to="/scratch">
            <button>
              <span className="text-white pl-3 pr-28">📝 Scratch pad</span>
            </button>
          </Link>{" "}
        </div>

        <div className="hover:bg-blue-700 pt-1 pb-1">
          <button>
            <span className="text-white pl-3 pr-36">🧾 Notes</span>
          </button>
        </div>
        <div className="hover:bg-blue-700 pt-1 pb-1">
          <button>
            <span className="text-white pl-3 pr-32">⭐ Favorite</span>
          </button>
        </div>
        <div className="hover:bg-blue-700 pt-1 pb-1">
          <button>
            <span className="text-white pl-3 pr-36">🗑️ Trash</span>
          </button>
        </div>
        <div className="hover:bg-blue-700 pt-1 pb-1">
          <button>
            <span className="text-white pl-3 pr-32">📚categories</span>
          </button>
        </div>
      </div>
    </>
  );
}
export default Left;
