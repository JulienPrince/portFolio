import { Button, Typography } from "@material-ui/core";
import React from "react";
import "./lastwork.css";
import WorkItem from "./workItem/workItem";
import { projects } from "./data";

const Lastwork: React.FC = () => {
  return (
    <>
      <div className="titre">
        <div className="titre_line"></div>
        <Typography noWrap variant="h2">
          Dernier Projet
        </Typography>
      </div>
      <div className="container">
        {projects.map((project, index) => (
          <WorkItem key={index} {...project} />
        ))}
      </div>
      <div className="div-btn">
        <Button variant="outlined" size="large">
          Plus de project
        </Button>
      </div>
    </>
  );
};

export default Lastwork;
