import React, { Fragment } from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Hero from "./Hero/Hero";
import TechStack from "./TechStack/TechStack";
import Project from "./Project/Project";
import { useSelector } from "react-redux";
import Loader from "../Layout/Loader/Loader";

const Home = () => {
  const { loading, users } = useSelector((state) => state.users);

  const user = users && users[0];

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Header />

          <div id="home">
            <Hero image={user && user.avatar.url} />
          </div>

          <TechStack techStack={user && user.techStack} />

          <div id="about">
            <About aboutMe={user && user.aboutMe} />
          </div>

          <div id="project">
            <Project projects={user && user.projects} />
          </div>

          <div id="contact">
            <Contact />
          </div>

          <Footer />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
