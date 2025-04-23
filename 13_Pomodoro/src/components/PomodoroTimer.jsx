import { useEffect, useState } from "react";
import AlertCard from "./AlertCard";

function PomodoroTimer() {
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [userTime, setUserTime] = useState(10);
  const [timerZIndex, setTimerZIndex] = useState("z-50");
  const [cardZIndex, setCardZIndex] = useState("z-0");
  const [cardVisibility, setCardVisibility] = useState("invisible");
  const [bgVisibility, setBgVisibility] = useState("invisible");

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(interval);
          setIsActive(false);
          setMinutes(userTime);
          setSeconds(0);
          setTimerZIndex("z-0");
          setCardZIndex("z-50");
          setCardVisibility("visible");
          setBgVisibility("visible");
          return 0;
        }

        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            setMinutes(minutes - 1);
            return 59;
          }

          return prevSeconds - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, userTime]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(userTime);
    setSeconds(0);
  };

  const handleChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value, 10) || 1);
    setUserTime(value);
    setMinutes(value);
  };

  return (
    <>
      <div
        className={`w-60 sm:w-full max-w-sm mx-auto p-4 bg-white shadow-md rounded-2xl relative ${timerZIndex}`}
      >
        <p className="text-4xl mb-4 text-center font-bold text-gray-800">
          {String(minutes).padStart(2, "0")} :{" "}
          {String(seconds).padStart(2, "0")}
        </p>
        <form className="mb-4">
          <label
            htmlFor="timer"
            className="block text-gray-700 font-medium mb-2"
          >
            Definir tempo (minutos)
          </label>
          <input
            className="border border-gray-300 rounded p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
            type="number"
            name="timer"
            value={userTime}
            onChange={handleChange}
            disabled={isActive}
            min={1}
          />
          <div className="flex justify-around">
            <button
              className={`${
                isActive
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "bg-green-500 hover:bg-green-600"
              } text-white px-4 py-2 rounded 
            transition cursor-pointer`}
              type="button"
              onClick={toggleTimer}
            >
              {isActive ? "Pausar" : "Iniciar"}
            </button>
            <button
              onClick={resetTimer}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition cursor-pointer"
              type="button"
            >
              Reiniciar
            </button>
          </div>
        </form>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 opacity-50 ${bgVisibility}`}
      ></div>
      <AlertCard
        cardZIndex={cardZIndex}
        setCardZIndex={setCardZIndex}
        cardVisibility={cardVisibility}
        setCardVisibility={setCardVisibility}
        setTimerZIndex={setTimerZIndex}
        setBgVisibility={setBgVisibility}
      />
    </>
  );
}

export default PomodoroTimer;
