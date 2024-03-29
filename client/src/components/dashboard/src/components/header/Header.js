import React from "react";
import "./header.css";
import dp from "../../assets/dp.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import Popup from "../popup/Popup";
import { resolvePath } from "react-router-dom";

const Header = (props) => {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const getName = async () => {
    setIsVisible(false);
    try {
      const response = await axios.get("https://bit-lock.vercel.app/doc", {
        headers: {
          Authorization: `bearer ${window.localStorage.getItem("token")}`,
        },
      });
      const name = `${response.data.firstName} ${response.data.lastName}`;
      // console.log(response)
      setName(name);
      console.log(response.data.profilePicture);
      //  console.log(name)
      setFile(response.data.profilePicture);
      console.log(file);
      //  console.log(window.localStorage.getItem('token'))
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getName();
    // console.log("here")
  }, []);

  const handlePopup = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="bit_dash" id="home">
      <h1>DASHBOARD</h1>
      <div className="bit_dash_box">
        <div className="bit_dash_image">
          <img src={`https://bit-lock.vercel.app/${file}`} />
        </div>
        <div className="bit_dash_name">
          <h3>{`Welcome, ${name}`}</h3>
        </div>
        <div className="bit_dash_btn">
          {/* <Eyes/> */}
          <button onClick={() => handlePopup()}>UPDATE</button>
          {isVisible && <Popup />}
        </div>
      </div>
    </div>
  );
};

export default Header;
