import React from "react";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgEnter, CgProductHunt } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaAdversal } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import Button from "@mui/material/Button";
import { MdSpaceDashboard } from "react-icons/md";
import { useContext } from "react";
import { Mycontext } from "../src/App";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import rabbitgif from "../src/assets/TAfT.gif";

function Sidebar() {
  const {
    rightsidecomponent,
    setrightsidecomponent,
    hidesidebar,
    sethidesidebar,
  } = useContext(Mycontext);

  const [isopen, setisopen] = useState([false, false, false]);

  function renderrightcomponent(props) {
    const newarr = [...rightsidecomponent];

    for (let i = 0; i < newarr.length; i++) {
      newarr[i] = false;
    }

    newarr[props] = true;

    setrightsidecomponent(newarr);
  }

  function openclose(index) {
    const newarr = [...isopen];

    newarr[index] = !newarr[index];
    setisopen(newarr);
  }
  return (
    <div className={hidesidebar ? "sidebar" : "nosidebar"}>
      <ul>
        <li>
          <Button className="w-100">
            <span className="icon">
              <MdSpaceDashboard />
            </span>
            <Link to="/dashboard" onClick={() => renderrightcomponent(0)}>
              Dashboard
            </Link>
            <span className="arrow" onClick={() => sethidesidebar(false)}>
              <FaArrowAltCircleLeft />
            </span>
          </Button>
        </li>

        <li>
          <Button className="w-100" onClick={() => openclose(0)}>
            <span className="icon">
              <CgProductHunt />
            </span>
            Products
            <span className="arrow">
              <IoMdArrowDropdown />
            </span>
          </Button>
          <div className={isopen[0] ? "active" : "close"}>
            <ul className="submenu">
              <li>
                <Link onClick={() => renderrightcomponent(1)}>
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/dashboard" onClick={() => renderrightcomponent(2)}>
                  Create
                </Link>
              </li>
              <li>
                <Link to="/dashboard" onClick={() => renderrightcomponent(3)}>
                  Update
                </Link>
              </li>
              <li>
                <Link to="/dashboard" onClick={() => renderrightcomponent(4)}>
                  Delete
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Button className="w-100" onClick={() => openclose(1)}>
            <span className="icon">
              <FaShoppingCart />
            </span>
            Orders
            <span className="arrow">
              <IoMdArrowDropdown />
            </span>
          </Button>
          <div className={isopen[1] ? "active" : "close"}>
            <ul className="submenu">
              <li>
                <Link to="/dashboard" onClick={() => renderrightcomponent(5)}>
                  All Orders
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Button className="w-100" onClick={() => openclose(2)}>
            <span className="icon">
              <FaUser />
            </span>
            Users
            <span className="arrow">
              <IoMdArrowDropdown />
            </span>
          </Button>
          <div className={isopen[2] ? "active" : "close"}>
            <ul className="submenu">
              <li>
                <Link to="/dashboard" onClick={() => renderrightcomponent(6)}>
                  All Users
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Button className="w-100">
            <span className="icon">
              <FaTasks />
            </span>
            <Link to="/dashboard" onClick={() => renderrightcomponent(7)}>
              Task Board
            </Link>
            <span className="arrow"></span>
          </Button>
        </li>
      </ul>
      <div
        className="rabbitgif"
        style={{
          position: "absolute",
          bottom: "5px",
          padding: "1rem",
        }}
      >
        <img
          src={rabbitgif}
          alt="Bottom GIF"
          style={{
            maxWidth: "170px",
            height: "auto",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
}

export default Sidebar;
