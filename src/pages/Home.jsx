import React from "react";
import my_avatar from "../assets/gaurav_avatar.png";
import wdimg from "../assets/web_developer.png";
import prgimg from "../assets/programmer.png";
import auto_app from "../assets/auto_applica.png";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    let card = document.getElementsByClassName("cardhover");

    card = Array.from(card);

    card.forEach((element) => {
      element.addEventListener("mousemove", (e) => {
        const x =
          -1 *
          ((element.offsetWidth / 2 - e.offsetX) / element.offsetWidth) *
          90;
        const y =
          ((element.offsetHeight / 2 - e.offsetY) / element.offsetHeight) * 90;

        element.children[0].style.transition = "";
        element.children[0].style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
      });

      element.addEventListener("mouseleave", (e) => {
        element.children[0].style.transition = "all ease 0.5s";
        element.children[0].style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
      });
    });
  }, []);

  return (
    <main className="home">
      <div className="intro">
        <div>
          <h1>
            Hi, I'am <span className="blue">Gaurav</span>
          </h1>
          <p>
            I develop User Interfaces <br /> and Web Applications
          </p>
        </div>
        <img src={my_avatar} alt="" />
      </div>
      <div className="overview">
        <h3>INTRODUCTION</h3>
        <h1>OVERVIEW</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius nulla a
          ullam esse magnam, magni odio consequatur maxime asperiores quaerat
          cupiditate, doloribus voluptate laboriosam omnis inventore
        </p>
        <div className="cards">
          <SkillCard src={wdimg} title="Web Developer" />
          <SkillCard src={prgimg} title="Programmer" />
          <SkillCard src={prgimg} title="Programmer" />
          <SkillCard src={prgimg} title="Programmer" />
        </div>
      </div>
      <div className="projects">
        <div>
          <p>MY WORK</p>
          <h1>
            <span className="blue">PROJECTS</span>
          </h1>
          <p>
            Following projects showcases my skills and experiences through
            real-world examples of my work. Each project is biefly described
            with links to code repositories and live demos in it. it reflects my
            ability to save complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        </div>
        <div className="project-cards">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </main>
  );
};

const SkillCard = (props) => {
  return (
    <div className="card cardhover">
      <div>
        <img src={props.src} alt="" />
        <p>{props.title}</p>
      </div>
    </div>
  );
};

const ProjectCard = (props) => {
  return (
    <div className="project-card cardhover">
      <div>
        <img src={auto_app} alt="" />
        <h2>Auto Applica</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          molestiae consectetur ipsa autem, sint ipsum porro tempora, voluptate
          provident placeat accusamus
        </p>
        <p>
          <span className="green">#reactjs</span>{" "}
          <span className="blue">#mongodb</span>{" "}
          <span className="pink">#nodejs</span>
        </p>
      </div>
    </div>
  );
};
export default Home;
