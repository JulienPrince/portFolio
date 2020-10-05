import { Button, Typography } from "@material-ui/core";
import React from "react";
import "./workItem.css";
export interface InfoProps {
  title: string;
  img: any;
}

const WorkItem: React.FC<InfoProps> = ({ img, title }) => {
  return (
    <>
      <div className="wrapper">
        <div className="card">
          <img src={img} alt="projet" className="img" />
          <Typography variant="h2">{title}</Typography>
          <div className="btn">
            <Button variant="outlined">nfos</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkItem;
