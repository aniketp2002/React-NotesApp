import React, { useState } from "react";

import "../cssfiles/textfield.css";
function Textfield(props) {
 
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const data1 = []
  const titlechng = (event)=>{
    
    settitle(event.target.value)
    console.log(title)
  }
  const descriptionchng = (event)=>{
    console.log(event.target.value)
    setdescription(event.target.value)
  }
  const onclck= ()=>{
    const ele = new Object();
  ele.name= title;
  ele.gender = description;
  data1.push(ele);
    // data1.push({
    //   name:title,
    //   gender:description
    // })
    console.log(data1)
    // props.addfun(data1)
  }
  return (
    <div className="container">
      <div className="form-group mt-4 ">
        <label
          htmlFor="exampleFormControlTextarea1"
          style={{ fontSize: "40px" }}
        >
          Add task
        </label>
        <textarea
          placeholder="Title"
          className="form-control area1 "
          id="exampleFormControlTextarea1"
          rows={1}
          value={title}
          onChange={titlechng}
        />
        <textarea
          placeholder="Description"
          className="form-control area2"
          id="exampleFormControlTextarea1"
          rows={4}
          value={description}
          onChange={descriptionchng}
        />
        
      </div>
      <div className="d-flex p-2 flex-row bd-highlight justify-content-center">
      <button type="button" className="btn btn-primary" onClick={onclck}>Save the note</button>
      </div>
    </div>
  );  
}

export default Textfield;
