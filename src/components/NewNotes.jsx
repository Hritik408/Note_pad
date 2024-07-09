import Search from "./Search";
import Text from "./Text";

function NewNotes() {
  return (
    <>
      <div className="flex w-[84%]">
        <Search />
        <Text />
      </div>
    </>
  );
}

export default NewNotes;
