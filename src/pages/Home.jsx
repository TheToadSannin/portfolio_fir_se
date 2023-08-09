import React from "react";
import my_avatar from "../assets/gaurav_avatar.png";
import wdimg from "../assets/web_developer.png";
import prgimg from "../assets/programmer.png";

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
  return (
    <div className="card">
      <img src={props.src} alt="" />
      <p>{props.title}</p>
    </div>
  );
};
export default Home;
