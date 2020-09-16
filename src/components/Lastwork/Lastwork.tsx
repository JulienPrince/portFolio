import { Typography } from "@material-ui/core";
import React from "react";
import "./lastwork.css";

const Lastwork: React.FC = () => {
  return (
    <>
      <div className="titre">
        <div className="titre_line"></div>
        <Typography noWrap variant="h2">
          Dernier Projet
        </Typography>
      </div>
    </>
  );
};

export default Lastwork;
