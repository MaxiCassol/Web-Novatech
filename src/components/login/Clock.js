"use client";
import style from "./clock.module.css";
import { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const interval = setInterval(() => {
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", {
        timeZone: userTimeZone,
        hour: "numeric",
        minute: "numeric",
      });
      const date = now.toLocaleDateString("en-US", {
        timeZone: userTimeZone,
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      setCurrentTime(time);
      setCurrentDate(date);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.clock_container}>
      <p className={style.time}> {currentTime}</p>
      <p className={style.date}>{currentDate}</p>
    </div>
  );
};

export default Clock;
