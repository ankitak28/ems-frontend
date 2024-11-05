import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <p className="navbar-brand">Employee Management System</p>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item ">
              <Link className="nav-link active" aria-current="page" to="/employees">
                Employee
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page"  to="/department">
                Department
              </Link>
            </li>
          </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
