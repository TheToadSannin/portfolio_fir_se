import React from "react";
import my_avatar from "../assets/gaurav_avatar.png";
import wdimg from "../assets/web_developer.png";
import prgimg from "../assets/programmer.png";
import { useEffect } from "react";

const Home = () => {
  return (
    <main className="home">
      <div className="intro">
        <div>
          <h1>
            Hi, I'am <span>Gaurav</span>
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
          <Card src={wdimg} title="Web Developer" />
          <Card src={prgimg} title="Programmer" />
          <Card src={prgimg} title="Programmer" />
          <Card src={prgimg} title="Programmer" />
        </div>
      </div>
    </main>
  );
};

const Card = (props) => {

  useEffect(()=>{

    let card = document.getElementsByClassName("card");

    card = Array.from(card);

    card.forEach(element => {
      element.addEventListener("mousemove", (e)=>{
        const x = -1*(((element.offsetWidth/2)-e.offsetX)/element.offsetWidth)*90;
        const y = (((element.offsetHeight/2)-e.offsetY)/element.offsetHeight)*90;
        

        element.children[0].style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
      })

      element.addEventListener("mouseleave", (e)=>{
        element.children[0].style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
      })
    });

    


  },[]);


  return (
    <div className="card">
      <div>
        <img src={props.src} alt="" />
        <p>{props.title}</p>
      </div>
    </div>
  );
};
export default Home;
