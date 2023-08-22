import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <a href={"/#home"}>
          <i class="fa-solid fa-house"></i>
        </a>

        <a href={"/#projects"}>
          <i class="fa-solid fa-diagram-project"></i>
        </a>
        <a href={"/#contactus"}>
          <i class="fa-solid fa-phone"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
