// import { useState } from "react";
import Search from "./Search";
import Text from "./Text";

function NewNotes() {

  const initial = '';
  return (
    <>
      <div className="flex w-[84%]">
        <Search />
        <Text myvalue = {initial} />
      </div>
    </>
  );
}

export default NewNotes; //
