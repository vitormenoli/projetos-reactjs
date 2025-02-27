import { useEffect, useState } from "react";

export const useTimer = () => {
  const [ms, setMs] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  const startTime = () => {
    return setInterval(() => {
      setMs((prevMs) => prevMs + 10);
    }, 10);
  };

  const stopTimer = (interval) => {
    clearInterval(interval);
    return interval;
  };

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = startTime(interval);
    } else {
      interval = stopTimer(interval);
    }

    return () => stopTimer(interval);
  }, [timerOn]);


  return { ms, setMs, timerOn, setTimerOn }
};
