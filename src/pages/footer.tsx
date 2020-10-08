import { Typography } from "@material-ui/core";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Typography variant="h1">
        © Julien Prince - {new Date().getFullYear()}
      </Typography>
      <Typography variant="h2" className="footer_subtitle">
        Template inspired by <span className="color_text">Lightning Lab</span>{" "}
        and proudly powered <span className="color_text">by Webflow.</span> |
        Template Version:<span className="color_text"> V1.5</span>
      </Typography>
    </div>
  );
};

export default Footer;
