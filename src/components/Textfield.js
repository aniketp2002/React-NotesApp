import { TextareaAutosize } from "@mui/material";
import React, { useRef, useState } from "react";

import "../cssfiles/textfield.css";
function Textfield(props) {
  
  const titleRef=useRef();
  const desRef=useRef();

  // const [title, settitle] = useState("")
  // const [description, setdescription] = useState("")
  // const titlechng = (event)=>{
    
  //   settitle(event.target.value)
  //   console.log(title)
  // }
  // const descriptionchng = (event)=>{
  //   console.log(event.target.value)
  //   setdescription(event.target.value)
  // }
  const onclck= ()=>{
    props.setdata([...props.data,{name:titleRef.current.value, gender:desRef.current.value}])
    titleRef.current.value = desRef.current.value = ""
  }
  console.log(props.data)
  return (
    <div className="container">
      <div className="form-group mt-4 ">
        <label
          htmlFor="exampleFormControlTextarea1"
          style={{ fontSize: "40px" }}
        >
          Add task
        </label>
        <input
          placeholder="Title"
          className="form-control area1 "
          id="exampleFormControlTextarea1"
          rows={1}
          // value={title}
          // onChange={titlechng}
          ref={titleRef}
        />
        <TextareaAutosize
          style={{minHeight:"140px"}}
          placeholder="Description"
          className="form-control area2"
          id="exampleFormControlTextarea1"
          // value={description}
          // onChange={descriptionchng}
          ref={desRef}
        />
        
      </div>
      <div className="d-flex p-2 flex-row bd-highlight justify-content-center">
      <button type="button" className="btn btn-primary" onClick={onclck}>Save the note</button>
      </div>
    </div>
  );  
}

export default Textfield;
