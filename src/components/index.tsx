import React from "react";
import Presantation from "./Presanation/Presantation";
import "./index.css";
import Lastwork from "./Lastwork/Lastwork";
const Index: React.FC = () => {
  return (
    <div>
      <section className="header_section">
        <div
          className="presantation"
          style={{ paddingLeft: "20px", paddingRight: "20px" }}
        >
          <Presantation />
        </div>
      </section>
      <section className="latest_Work">
        <div>
          <Lastwork />
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default Index;
