import React, { useState } from "react";
import "./style.scss";
import bgGame from "./bgGame.png";
import XucSac from "./XucSac";
import KetQua from "./KetQua";
import { TAI, XIU } from "./utils";

let defaultXucSac = [
  {
    img: "./imgXucSac/1.png",
    giaTri: 1,
  },
  {
    img: "./imgXucSac/1.png",
    giaTri: 1,
  },
  {
    img: "./imgXucSac/1.png",
    giaTri: 1,
  },
];

export default function TaiXiuPage() {
  let [xucSacArr, setXucSacArr] = useState(defaultXucSac);
  let [luaChon, setluaChon] = useState("");
  let [soBanThang, setSoBanThang] = useState(0);
  let [soLuotChoi, setSoLuotChoi] = useState(0);
  let handlePlayGame = () => {
    //tao mang xuc sac moi
    let tongDiem = 0;
    let newXucSac = xucSacArr.map((item) => {
      let random = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
      tongDiem += random;
      return {
        img: `./imgXucSac/${random}.png`,
        giaTri: random,
      };
    });
    setXucSacArr(newXucSac);
    setSoLuotChoi(++soLuotChoi);
    // xu ly thang thua
    if((tongDiem >= 11 && luaChon == TAI) || ( tongDiem < 11 && luaChon==XIU)) {
      setSoBanThang(++soBanThang);
    }
  };
  return (
    <div
      className=" py-5 text-center"
      style={{ backgroundImage: `url(${bgGame})` }}
      id="game-page"
    >
      <XucSac
        xucSacArr={xucSacArr}
        setluaChon={setluaChon}
        handlePlayGame={handlePlayGame}
      />
      <KetQua
        luaChon={luaChon}
        soBanThang={soBanThang}
        soLuotChoi={soLuotChoi}
      />
    </div>
  );
}
