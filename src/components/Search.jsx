import { useDispatch } from "react-redux";
import { clearTrash } from "../utils/trashSlice";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

function Search({ showButton }) {
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearTrash());

  };

  const {loggedInUser} = useContext(UserContext);  // {loggedInUser} must be same as the in the UserContext
  // console.log(loggedInUser);
  return (
    <> 
      <div className=" bg-slate-700  h-screen flex">
        <div className="pt-1 pl-1 border-b border-b-grey pb-1">
          <input
            type="text"
            className="bg-gray-500 pl-3 pb-1 rounded-md w-[277px] h-8"
            placeholder="Search for notes"
          ></input>
        </div>

        {showButton && (
          <div>
            <button
              className="bg-sky-500 text-white hover:bg-sky-700 rounded-md mt-2 mx-1 px-1"
              onClick={handleClear}
            >
              Empty
            </button>
          </div>
        )}

        
        <div>
          {loggedInUser}
          </div>

      </div>
    </>
  );
}
export default Search;
