import React from "react";
import { Typography } from "@material-ui/core";
import "./presantation.css";
import { Link } from "react-router-dom";
import Profil from "../../asset/Profile.jpg";
import Typed from "react-typed";

const Type1 = (
  <Typed
    strings={["Prince Julien, ", "A votre service. "]}
    typeSpeed={60}
    backSpeed={30}
  />
);

const Presantation: React.FC = () => {
  return (
    <div className="body">
      <div className="body_letf">
        <div className="body_title">
          <Typography variant="h1">{Type1}</Typography>
          <div>
            <Typography variant="h1">Développeur Web </Typography>
          </div>
        </div>
        <Typography variant="h5">
          Bonjour, Mon nom c'est Prince, concepteur de sites Web indépendant.
          Sûr de mon expérience dans l'industrie du développement. Vous pouvez
          consulter mon travail ci-dessous.
        </Typography>
        <div>
          <Link to="#"> Scroll Down</Link>
          <svg
            style={{ marginLeft: "5px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="10.635"
            height="10.443"
            viewBox="0 0 6.635 9.443"
          >
            <g
              id="Group_6"
              data-name="Group 6"
              transform="translate(-404.217 -700.5)"
            >
              <path
                id="chevron_left"
                data-name="chevron left"
                d="M3.035,6.07,0,3.035,3.035,0h0"
                transform="translate(404.5 709.377) rotate(-90)"
                fill="none"
                stroke="#000026"
                strokeWidth="0.8"
              />
              <line
                id="Line_8"
                data-name="Line 8"
                y2="8.837"
                transform="translate(407.524 700.5)"
                fill="none"
                stroke="#000026"
                strokeWidth="0.8"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="div-image">
        <img src={Profil} alt="profile" />
      </div>
      <div className="social">
        <Link to="#" className="linkeding">
          {" "}
          LinkedIn
        </Link>
        <Link to="#" className="facebook">
          Facebook
        </Link>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Presantation;
