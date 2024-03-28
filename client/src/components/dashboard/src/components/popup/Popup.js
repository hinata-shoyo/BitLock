import React, { useState } from "react";
import "./popup.css";
import axios from "axios";

function Popup() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [file, setFile] = useState()
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Pass the input values to the onSubmit function
    // onSubmit(input1, input2);
    // Reset input fields
    setInput1("");
    setInput2("");
    await axios.put("https://bit-lock.vercel.app/user/uploadName",
      {
        headers:{
            "Authorization": `bearer ${localStorage.getItem('token')}`
        }
      }, {
        firstName: input1,
        lastName: input2,
        }
    );
  };

  return (
    <div className="popup">
      <form encType="multipart/form-data" >
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

        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Popup;
