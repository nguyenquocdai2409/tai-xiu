import React, { useState } from "react";
import Footer from "./Footer";

export default function DemoHook() {
  let [number, setnumber] = useState(0);

  let handleLike = () => {
    setnumber(number++)
  };

  return (
    <div>
      <div style={{ width: "400px" }} className="card text-left">
        <img
          className="card-img-top"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg"
          alt
        />
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="text-danger"> {number} ♥</p>
        </div>
        <button onClick={handleLike} className="btn btn-danger">
          {" "}
          Like{" "}
        </button>
        <Footer
        handleSetNumber={setnumber} number={number}/>
      </div>
    </div>
  );
}
