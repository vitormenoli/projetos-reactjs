import { useState } from "react";
import useAllLaps from "../hooks/useAllLaps";

function LapList({ laps, allLaps, setAllLaps }) {
  const [showLaps, setShowLaps] = useState(false);

  const [lapsButtonText, setLapsButtonText] = useState("Voltas Salvas \u2228");

  function handleLaps() {

    setAllLaps(useAllLaps)

    if (allLaps.length === 0) {
      setLapsButtonText("Não há Voltas Salvas!");
      return;
    }

    setShowLaps(!showLaps);
    setLapsButtonText(
      showLaps ? "Voltas Salvas \u2228" : "Voltas Salvas \u2227"
    );
  }

  return (
    <div className="timer-laps">
      <h3>Voltas:</h3>
      <ul>
        {laps.map((lap, index) => {
          return (
            <li key={index}>
              VOLTA {index + 1}: <span>{lap}</span>
            </li>
          );
        })}
      </ul>

      <button onClick={handleLaps}>{lapsButtonText}</button>
      {showLaps && allLaps.length > 0 && (
        <ul>
          {allLaps.map((lap, index) => (
            <li key={index}>
              VOLTA {index + 1}: <span>{lap}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LapList;
