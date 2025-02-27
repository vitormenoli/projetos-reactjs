function TimeControls({ timerOn, onStart, onStop, onReset, onLap }) {
  return (
    <div className="timer-controls">
      {!timerOn && (
        <button className="start" onClick={onStart}>
          Iniciar
        </button>
      )}
      {timerOn && (
        <button className="stop" onClick={onStop}>
          Parar
        </button>
      )}
      {timerOn && (
        <button className="mark" onClick={onLap}>
          Marcar
        </button>
      )}
      <button className="clear" onClick={onReset}>
        Zerar
      </button>
    </div>
  );
}

export default TimeControls;
