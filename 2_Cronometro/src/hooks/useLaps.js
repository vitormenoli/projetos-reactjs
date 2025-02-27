import { useState } from "react";
import useFormatTime from "./useFormatTime";

export const useLaps = (ms) => {
    const [laps, setLaps] = useState([]);

    const formatTime = useFormatTime(ms)

    const addLap = () => {
        setLaps([...laps, formatTime]);
    };

    return { laps, setLaps, addLap }
}