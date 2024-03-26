import React from "react";
import people from "../../assets/people.png";
import Illustration from "../../assets/image.png";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="bit__header section__padding" id="home">
    <div className="bit__header-content">
      <h1 className="gradient__text">Digital Power to Empower Everyone!</h1>
      <p>
        Welcome to our Digital Locker. Securely store all Documents and
        Credentials in one place
      </p>

      <Link to="/signup" className="bit__header-content__input">
        <button type="button">Get Started</button>
      </Link>

      <div className="bit__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="bit__header-image">
      <img src={Illustration} />
    </div>
  </div>
);

export default Header;
