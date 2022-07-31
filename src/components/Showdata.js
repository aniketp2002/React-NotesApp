import React from "react";
function Showdata({item}) {
  return (
    <div className="container d-flex flex-row ">

    {
      item.length!==0?
      item.map((data)=>{
      return <div className="card mx-3 my-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title"> {data.name}</h5>
          <p className="card-text">{data.gender}</p>
        </div>
      </div>
    })
    :
    <h5>
      Add something
    </h5>
    }

    </div>
  );
}

export default Showdata;
