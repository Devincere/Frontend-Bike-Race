import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";

function Timer() {
  const calculateTimeLeft = () => {
    //let year = new Date().getFullYear();
    const difference = +new Date(`2023-04-1`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minute: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <h2>Event starting the 1st April 2023</h2>
      <h2>
        Countdown <FontAwesomeIcon icon={faStopwatch} />
      </h2>
      <div className="timer">
        {Object.keys(timeLeft).map((interval, key) => <span key={key}>{timeLeft[interval]} {interval}{" "}</span>)}
      </div>
    </div>
  );
}
export default Timer;
