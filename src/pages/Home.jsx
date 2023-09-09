import React from "react";
import my_avatar from "../assets/gaurav_avatar.png";
import wdimg from "../assets/web_developer.png";
import prgimg from "../assets/programmer.png";
import auto_app from "../assets/auto_applica.png";
import videotronics from "../assets/videotronics.png";
import collegeLogo from "../assets/college_logo.png"
import lotusLogo from "../assets/lotus_valley_logo.png"
import springdalesLogo from "../assets/springdales_school.png"
import rocketsend from "../assets/rocket.png"
import chess from "../assets/chess.png"
import gamer from "../assets/gamer.png"
import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser"
import spicy_algo from "../assets/spicy_algo.png"

const Home = () => {

  document.title = 'Gaurav Panwar';

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2sv22fi', 'template_847g5y5', form.current, 'CevKviUGJtabB68KT')
      .then((result) => {
          console.log(result.text);
          alert('Message Sent!')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <main className="home">
      <div className="intro" id="home">
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
        Tech enthusiast at 21, specializing in web development. Proficient in HTML, CSS, and JavaScript, I create user-friendly and visually appealing websites. A meticulous and creative problem solver, I thrive in collaborative settings. Committed to staying current with technology trends, my portfolio reflects my dedication to impactful web solutions.
        </p>
        <div className="cards">
          <SkillCard src={wdimg} title="Web Developer" />
          <SkillCard src={prgimg} title="Programmer" />
          <SkillCard src={chess} title="Chess player" />
          <SkillCard src={gamer} title="Gamer" />
        </div>
      </div>
      <div className="findMe">
        <h1><span className="blue">Find Me Online</span></h1>
        <div className="links">
          <a href="https://github.com/TheToadSannin" target="_blank"><i class="fa-brands fa-github" style={{"color": "#FFFFFF"}}></i></a>
          <a href="https://twitter.com/TheToadSannin" target="_blank"><i class="fa-brands fa-square-twitter" style={{"color": "#FFFFFF"}}></i></a>
          <a href="www.linkedin.com/in/gaurav-panwar-85822a22b" target="_blank"><i class="fa-brands fa-linkedin" style={{"color": "#FFFFFF"}}></i></a>
        </div>
      </div>
      <div className="projects" id="projects">
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
          <ProjectCard
            link={"https://good-teal-woodpecker-tam.cyclic.app"}
            img={auto_app}
            name={"Auto-Applica"}
            detail = {"Designed and developed a secure web application empowering students to effortlessly generate, submit, and communicate with teachers via encrypted channels, enhancing academic workflows and data privacy in education."}
          />
          <ProjectCard
            link={"https://www.livevideotronics.com/"}
            img={videotronics}
            name={"Video-Tronics"}
            detail = {"Crafted a specialized web application for a cutting-edge drone and camera repair center, streamlining repair requests, inventory management, and secure client communication. Elevating efficiency and customer satisfaction in the tech repair industry."}
          />
          <ProjectCard
            link={"https://spicy-algorithm.vercel.app/"}
            img={spicy_algo}
            name={"Spicy-Algorithm"}
            detail={"Crafted a user-centric web app for cafeteria feedback, bridging students and culinary services. Enhancing satisfaction and driving culinary service improvements through streamlined feedback collection."}
          />
        </div>
        <div>
          <h1>
            Visit My <a href="https://github.com/TheToadSannin/">Github</a> For More 
          </h1>
        </div>
      </div>
      <div className="qualifications">
        <h1>
          <span className="blue">Qualifications</span>
        </h1>
      <p>All of my Qualifications till now</p>
        <div className="quali-cards">
          <QualiCard type="College / Unviersity" image = {collegeLogo} detail="Pursuing Bachelor Of Technology in Computer Science and Engineering(2020 - 2024) from Amity University Madhya Pradesh Gwalior . With a major in Artificial Intelligence and Machine Learning. Holding the aggregate CGPA of 7.55."/>
          <QualiCard type="Higher secondary" image = {springdalesLogo} detail="Completed Higher Secondary schooling from Springdales School from Kota Rajasthan with a major in Science and Mathematics with the aggregate percentage of 67%."/>
          <QualiCard type="High School" image = {lotusLogo} detail="Completed High Schooling from Lotus Valley School in Mandsaur Mahdya Pradesh. with the Aggregate of 72%. "/>
        </div>
      </div>
      <div className="contactus" id="contactus">
        <div className="planets">
          <div id="earth"></div>
        </div>
        <div className="inputs">
          <h1><span className="blue">CONTACT ME HERE</span></h1>
          <form ref={form} onSubmit={sendEmail}>
          <input type="text" name = "user_email" placeholder="Your Email" required />
          <input type="text" name = "user_name" placeholder="Your Name" required />
          <textarea type="text" name="message" placeholder="Message for me..." required/>
          <button type="submit"><img src={rocketsend} alt="" /></button>
          </form>
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
  const handleProjectClick = () =>{
    window.open(props.link);
  }
  return (
    <div className="project-card cardhover" onClick={handleProjectClick}>
      <div>
        <img src={props.img} alt="" />
        <h2>{props.name}</h2>
        <p>
          {props.detail}
        </p>
        <p>
          <span className="green">#reactjs </span>
          <span className="blue">#mongodb </span>
          <span className="pink">#nodejs </span>
        </p>
      </div>
    </div>
  );
};


const QualiCard = (props) => {
  return (
    <div className="qualicard">
      <h1>{props.type}</h1>
      <div style={{height:"150px"}}>
      <img src={props.image} width={100 + "px"} alt={props.type} />
      </div>
      <p>{props.detail}</p>
    </div>
  )
}
export default Home;
