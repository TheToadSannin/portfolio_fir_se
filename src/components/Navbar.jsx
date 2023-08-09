import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <Link to={"/"}>
          <i class="fa-solid fa-house"></i>
        </Link>

        <Link to={"/"}>
          <i class="fa-solid fa-diagram-project"></i>
        </Link>
        <Link to={"/"}>
          <i class="fa-solid fa-phone"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
