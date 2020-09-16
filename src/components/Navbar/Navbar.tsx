import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { SidebarData } from "./NavbarData";
import logo from "../../asset/Prince.png";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";

const Navbar: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="nabar">
        <img className="nabar_image" src={logo} alt="logo" />
        <IconButton onClick={showSidebar}>
          <MenuIcon style={{ fontSize: "80px" }} />
        </IconButton>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <IconButton onClick={showSidebar}>
            <CloseIcon fontSize="large" />
          </IconButton>
          {SidebarData.map((item, index) => {
            return (
              <li className={item.cName} key={index}>
                <Link to={item.path}>
                  {item.icon}
                  <span style={{ marginLeft: "10px" }}>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
