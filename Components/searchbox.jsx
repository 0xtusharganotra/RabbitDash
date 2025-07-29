import { IoIosSearch } from "react-icons/io";
import Button from "@mui/material/Button";

function Searchbox(props) {
  return (
    <div className="searchbox">
      <input type="text" placeholder={props.text} />
      <Button className="circle">
        <IoIosSearch />
      </Button>
    </div>
  );
}

export default Searchbox;
