import React from "react";
import "./storage.css";
import document from "../../assets/document.svg";
// import folder from '../../assets/folder.svg'
// import pdf from '../../assets/pdf.svg'
import { useState, useEffect } from "react";
import axios from "axios";
import Docum, { Products } from "./Docum";
import Popup2 from "../popup/Popup2";

const Card = (props) => {
  return (
    <div className="bit_storage_smallbox1">
          <a href={`${props.link}`}>
            <img src={document} alt="folder" />
            <h3>{props.title}</h3>
            <div className="bit_storage_smallbox1_bottom1">
              <h5>Delete File</h5>
              <h6>120 KB</h6>
            </div>
          </a>
        </div>

  )
}

const Storage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [docs, setDocs] = useState([]);
  // const arr = [1,2,3,4];
  const getArray = async () => {
    const response = await axios.get("https://bit-lock.vercel.app/doc", {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem("token")}`,
      },
    });

    // this.setDocs({
    //   arrayvar: this.Docs.arrayvar.concat(response.data.documents)
    // })

  //  arr = response.data.documents;
    // console.log(arr);
    setDocs(response.data.documents);
    console.log(docs);
    // docs = response.data.documents
    console.log(response.data);   
    console.log(docs)
  };

  useEffect(() => {
    setIsVisible(false);
    getArray();
  }, []);

  const handlePopup = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="bit_storage" id="storage">
      {/* {getArray} */}
      <div className="bit_storage_bigbox">
        <h2>STORAGE AREA</h2>
        <div className="bit_dash_btnn">
          <button onClick={handlePopup}>ADD</button>
          {isVisible && <Popup2 />}
        </div>
  <div className='bit_storage_smallbox1'>
              <a href={`${props.link}`}>
              <img src={document} alt='folder'/>
              <h3>{props.title}</h3>
              <div className='bit_storage_smallbox1_bottom1'>
                <h5>Delete File</h5>
                { <h6>120 kb</h6> }
              </div>
              </a>
            </div>
        
        // {docs.map((docs) => {
        // <Card title={docs.title} link={docs.link} />
          // <Docum title={docs[0].title} id={docs[0]._id} link={docs[0].link} />;
        // })}
      </div>
    </div>
  );
};

export default Storage;
