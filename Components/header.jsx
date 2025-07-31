import { Link } from "react-router-dom";
import rabbitdash from "../src/assets/d66278bc50feea307ba525f2d853ece6.png";
import { FaRegUser } from "react-icons/fa";
import Button from "@mui/material/Button";
import { MdMenuOpen } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import Searchbox from "./searchbox";
import { MdOutlineLightMode } from "react-icons/md";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoMdHelp } from "react-icons/io";

import Tooltip from "@mui/material/Tooltip";

import React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Mycontext } from "../src/App";
import { useContext } from "react";

function Header() {
  const { hidesidebar, sethidesidebar } = useContext(Mycontext);
  const [dialogueopen, setdialogueopen] = React.useState(false);

  const handledialogueClickOpen = () => {
    setdialogueopen(true);
  };

  const handlediaogueClose = () => {
    setdialogueopen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function clicktohidesidebar() {
    sethidesidebar(!hidesidebar);
  }
  return (
    <header>
      <div className=" container  ">
        <div className="headercontainer">
          <div className=" logocontainer">
            <Link to="/dashboard">
              {/* <img src={logo} alt="" className="logo" /> */}
              <img src={rabbitdash} alt="" />
            </Link>
            <Button className="circle" onClick={() => clicktohidesidebar()}>
              <MdMenuOpen />
            </Button>
          </div>
          <div className="search">{/* <Searchbox /> */}</div>

          <div className="adminheader">
            <Button className="circle" onClick={handledialogueClickOpen}>
              <IoMdHelp />
            </Button>
            <Dialog
              open={dialogueopen}
              onClose={handlediaogueClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  If you find any bug or you want to suggest any upgrade feel
                  free to contact dev by going to /dev route. Thanks
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handlediaogueClose}>Ok</Button>
              </DialogActions>
            </Dialog>
            <div className="adminloginheader">
              <Box>
                <Tooltip>
                  <Button
                    className="circle"
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <CiUser />
                  </Button>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>
                  <Button style={{ fontSize: "14px", color: "black" }}>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      SignOut
                    </Link>
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Button style={{ fontSize: "14px", color: "black" }}>
                    Rest Password
                  </Button>
                </MenuItem>
              </Menu>

              <span
                style={{
                  fontSize: "17px",
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
              >
                ADMIN01
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
