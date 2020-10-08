import React from "react";
import Lastwork from "../components/Lastwork/Lastwork";
import Navbar from "../components/Navbar/Navbar";
import Presantation from "../components/Presanation/Presantation";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Presantation />
      <Lastwork />
      <Footer />
    </>
  );
};

export default Home;
