const useFormatTime = (ms) => {
  const minutes = ("0" + (Math.floor(ms / 60_000) % 60)).slice(-2);
  const seconds = ("0" + (Math.floor(ms / 1000) % 60)).slice(-2);
  const centiseconds = ("0" + (Math.floor(ms / 10) % 100)).slice(-2);

  return `${minutes}:${seconds}:${centiseconds}`;
};

export default useFormatTime;