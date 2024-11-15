import React from "react";
import style from "./WaveBanner.module.css";

const WaveBanner = () => {
  return (
    <div className={style.container}>
      <div className={style.ocean}>
        <div className={style.wave}></div>
        <div className={style.wave}></div>
      </div>
    </div>
  );
};

export default WaveBanner;
