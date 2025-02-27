function useAllLaps() {
  const storedLaps = localStorage.getItem("cronometro");
  return storedLaps ? JSON.parse(storedLaps).laps : [];
}

export default useAllLaps