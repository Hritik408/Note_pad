function Right() {
  return (
    <>
      <div className=" bg-slate-500 w-3/4  justify-center items-center flex flex-col">
        <div className="text-lg pl-20 text-white pr-3 justify-center items-center pb-3">
          {" "}
          Create a note{" "}
        </div>

        <div className="flex pl-16">
          <button className="text-white bg-slate-800 pl-2 pr-2 rounded-md">
            CTRL
          </button>{" "}
          <span className="text-white pl-2 pr-2">+</span>
          <button className="text-white bg-slate-800 pl-2 pr-2 rounded-md">
            ALT
          </button>{" "}
          <span className="text-white pl-2 pr-2">+</span>
          <button className="text-white bg-slate-800 pl-2 pr-2 rounded-md">
            N
          </button>
        </div>
      </div>
    </>
  );
}
export default Right;
