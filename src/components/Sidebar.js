import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/instagram">Instagram</Link>
        </li>
        <li>
          <Link to="/youtube">YouTube</Link>
        </li>
        <li>
          <Link to="/facebook">Facebook</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
