import React, { useState } from "react";
import "./popup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Popup() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [file, setFile] = useState()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('file',file)
    console.log(formData)
    const response = await axios.put("https://bit-lock.vercel.app/user/uploadName",
      {
        headers:{
            "Authorization": `bearer ${window.localStorage.getItem('token')}`
        }
      }, {
        firstName: input1,
        lastName: input2,
        // profilePicture:formData
        }
    );
    console.log(window.localStorage.getItem('token'))
    console.log(response.data.msg)
    // window.location.href = "/dashboard"
  };

  return (
    <div className="popup">
      <form encType="multipart/form-data" onSubmit={handleSubmit} >
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
        <input type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Popup;
