import React from "react";

export default function Footer({ number, handleSetNumber }) {
  return (
    <div>
      <h1>gap doi so luong</h1>
      <h1>{number * 2}</h1>
      <button
        onClick={() => {
          handleSetNumber(Math.floor(Math.random() * 10));
        }}
        className="btn btn-dark"
      >
        random
      </button>
    </div>
  );
}
