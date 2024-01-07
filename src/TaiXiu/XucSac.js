import React from "react";
import { TAI, XIU } from "./utils";

export default function XucSac({ xucSacArr, setluaChon, handlePlayGame }) {
  let renderXucSac = () => {
    return xucSacArr.map((item) => {
      return <img src={item.img} className="mx-5" />;
    });
  };
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <button
        onClick={() => { setluaChon(TAI) }}
        className="btn btn-danger p-5">Tai</button>
        <div>{renderXucSac()}</div>
        <button
        onClick={() => { setluaChon(XIU) }}
        className="btn btn-dark p-5">Xiu</button>
      </div>
      <button
      onClick={handlePlayGame}
      className="btn btn-warning my-5 px-5 py-2">Play Game</button>
    </div>
  );
}
