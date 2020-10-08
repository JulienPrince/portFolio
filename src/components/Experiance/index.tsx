import { Typography } from "@material-ui/core";
import React from "react";
import "./experiance.css";

const Experiance = () => {
  return (
    <div className="experiance_main">
      <div className="experiance_left">
        <Typography>01</Typography>
        <Typography>Client</Typography>
      </div>
      <div className="experiance_center">
        <Typography>+02</Typography>
        <Typography>Années D'expérience</Typography>
      </div>
      <div className="experiance_rigth">
        <Typography>+1.5K</Typography>
        <Typography>Heures de Code</Typography>
      </div>
    </div>
  );
};

export default Experiance;
