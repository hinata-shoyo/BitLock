import React, { useEffect, useState } from "react";
import "./popup.css";
import axios from "axios";
// import { useEffect } from "react";

function Popup() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [file, setFile] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    console.log(formData);
    const response = await axios.put(
      "https://bit-lock.vercel.app/user/uploadName",
      {
        firstName: input1,
        lastName: input2,
      },
      {
        headers: {
          Authorization: `bearer ${window.localStorage.getItem("token")}`,
        },
      }
    );
    const resp = await axios.post("https://bit-lock.vercel.app/user/upload", formData, {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data"
      },
    });

    // console.log(window.localStorage.getItem("token"));
    console.log(response.data.msg);
    window.location.href = "/dashboard";
  };

  // useEffect

  return (
    <div className="popup">
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Popup;
