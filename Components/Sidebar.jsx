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

function Sidebar() {
  const [isopen, setisopen] = useState([false, false, false]);

  function openclose(index) {
    const newarr = [...isopen];

    newarr[index] = !newarr[index];
    setisopen(newarr);
  }
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/" className="w-100">
            <Button className="w-100">
              <span className="icon">
                <MdSpaceDashboard />
              </span>
              Dasboard
              <span className="arrow"></span>
            </Button>
          </Link>
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
                <Link to="">All Products</Link>
              </li>
              <li>
                <Link to="">Create</Link>
              </li>
              <li>
                <Link to="">Update</Link>
              </li>
              <li>
                <Link to="">Delete</Link>
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
                <Link to="">All Orders</Link>
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
                <Link to="">All Users</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Button className="w-100">
            <span className="icon">
              <FaTasks />
            </span>
            Daily Task
            <span className="arrow"></span>
          </Button>
        </li>
      </ul>
      <div
        style={{
          position: "absolute",
          bottom: "5px",
          padding: "1rem",
        }}
      >
        <img
          src="\src\assets\TAfT.gif"
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
