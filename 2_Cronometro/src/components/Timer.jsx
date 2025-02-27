import "./Timer.css";

import LapList from "./LapList";
import TimeControls from "./TimeControls";
import TimerDisplay from "./TimerDisplay";

import { useTimer } from "../hooks/useTimer.js";
import useFomatTime from "../hooks/useFormatTime.js";
import { useLaps } from "../hooks/useLaps.js";
import useModal from "../hooks/useModal.js";
import Modal from "./Modal.jsx";
import { useState } from "react";
import useAllLaps from "../hooks/useAllLaps.js";

function Timer() {
  const { ms, setMs, timerOn, setTimerOn } = useTimer();
  const { laps, setLaps, addLap } = useLaps(ms);
  const formatTime = useFomatTime(ms);
  const { modalOn, setModalOn } = useModal();

  const resetTimer = () => {
    if (laps.length < 1) {
      setTimerOn(false);
      setMs(0);
    } else {
      setModalOn(true);
      setTimerOn(false);
      setMs(0);
    }
  };

  const [allLaps, setAllLaps] = useState(useAllLaps);

  return (
    <>
      <Modal
        modalOn={modalOn}
        setModalOn={setModalOn}
        laps={laps}
        setLaps={setLaps}
        setAllLaps={setAllLaps}
      />
      <div className="timer-container">
        <TimerDisplay time={formatTime} />
        <TimeControls
          timerOn={timerOn}
          onStart={() => setTimerOn(true)}
          onStop={() => setTimerOn(false)}
          onReset={resetTimer}
          onLap={addLap}
        />
        <LapList laps={laps} allLaps={allLaps} setAllLaps={setAllLaps} />
      </div>
    </>
  );
}

export default Timer;
