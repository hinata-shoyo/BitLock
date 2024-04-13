import react from "react";
import "./storage.css";
import document from "../../assets/document.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import Popup2 from "../popup/Popup2";

const Card = (props) => {
  const handledelete = async (id) => {
    try {
      await axios.delete(`https://bit-lock.vercel.app/doc/delete${id}`, {
        headers: {
          authorization: `bearer ${window.localStorage.getItem("token")}`,
        },
      });
      window.location.reload()
    } catch (error) {}
  };

  return (
    <div className="bit_storage_smallbox">
      <a href={`${props.link}`} target="_blank">
        <img src={document} alt="folder" />
        <h3 className="link">{props.title}</h3>
      </a>
      <div className="bit_storage_smallbox_bottom">
        <h5 className="link">
          <button className="del_button" onClick={() => handledelete(props.id)}>
            Delete
          </button>
        </h5>
        {/* <h6>120 kb</h6> */}
      </div>
    </div>
  );
};

const Storage = () => {
  const [isvisible, setisVisible] = useState(false);
  const [docs, setdocs] = useState([]);
  const getarray = async () => {
    const response = await axios.get("https://bit-lock.vercel.app/doc", {
      headers: {
        authorization: `bearer ${window.localStorage.getItem("token")}`,
      },
    });
    setdocs(response.data.documents);
    console.log(docs);
  };

  useEffect(() => {
    setisVisible(false);
    getarray();
  }, []);

  const handlePopup = () => {
    console.log("here");
    setisVisible(!isvisible);
  };

  return (
    <div className="bit_storage" id="storage">
      <div className="bit_storage_bigbox">
        <div className="storage_title">
          <h2>Storage Area</h2>
          <div className="bit_dash_btnn">
            <button onClick={handlePopup}>ADD</button>
            {isvisible && <Popup2 />}
          </div>
        </div>
        <div className="col">
          {docs.map((docs) => {
            return <Card title={docs.title} link={docs.link} id={docs._id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Storage;
