import React, { useEffect, useState } from "react";
import "./popup.css";
import axios from "axios";
// import { useEffect } from "react";

function Popup2() {
  const [title, setTitle] = useState("");
//   const [input2, setInput2] = useState("");
  const [file, setFile] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if(!file){ 
        console.log('no file')
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title)
    console.log(formData);
    const response = await axios.post("https://bit-lock.vercel.app/doc/upload",  
          formData
      ,{ 
        headers:{
          Authorization : `bearer ${window.localStorage.getItem("token")}`,
          "Content-Type" : "multipart/form-data"
        }
      });
      console.log(formData.file)
      // await axios.put("http://localhost:5000/user/upload", {
      //     formData
      // },{
      //   headers:{
      //     Authorization : `bearer ${window.localStorage.getItem("token")}`
      //   }
      // });


    // console.log(window.localStorage.getItem("token"));
    console.log(response.data.msg);
    window.location.href = "/dashboard"
  };

// useEffect 

  return (
    <div className="popup">
      {/* <form encType="multipart/form-data" onSubmit={handleSubmit}> */}
        <input
          type="text"
          placeholder="Document Title"
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* <input
          type="text"
          placeholder="Last Name"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        /> */}
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button type="submit" onClick={handleSubmit}>Submit</button>
      {/* </form> */}
    </div>
  );
}

export default Popup2;
