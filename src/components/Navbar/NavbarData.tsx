import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ContactMailIcon from "@material-ui/icons/ContactMail";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <AssignmentIcon />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/product",
    icon: <ContactMailIcon />,
    cName: "nav-text",
  },
];
