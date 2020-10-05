import { Button, Typography } from "@material-ui/core";
import React from "react";
import "./lastwork.css";
import WorkItem from "./workItem/workItem";
import { project1, project2 } from "./data";
import { InfoProps } from "./workItem/workItem";

const InfoProps1: InfoProps = {
  title: project1.title,
  img: project1.img,
};
const InfoProps2: InfoProps = {
  title: project2.title,
  img: project2.img,
};

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
        <WorkItem {...InfoProps1} />
        <WorkItem {...InfoProps2} />
        <WorkItem {...InfoProps1} />
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
