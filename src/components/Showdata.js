import React from "react";
function Showdata(props) {
  return (
    <div className="container d-flex flex-row ">
    {props.item.map((data)=>
      <div className="card mx-3 my-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title"> {data.name}</h5>
          <p className="card-text">{data.gender}</p>
        </div>
      </div>
    )}
    
      
    </div>
  );
}

export default Showdata;
