import { IoIosSearch } from "react-icons/io";
import Button from "@mui/material/Button";

function Searchbox() {
  return (
    <div className="searchbox">
      <input type="text" placeholder="Search Products" />
      <Button className="circle">
        <IoIosSearch />
      </Button>
    </div>
  );
}

export default Searchbox;
