function AlertCard({
  cardZIndex,
  setCardZIndex,
  cardVisibility,
  setCardVisibility,
  setTimerZIndex,
  setBgVisibility,
}) {
  const handleZIndex = () => {
    setTimerZIndex("z-50");
    setCardZIndex("z-0");
    setBgVisibility("invisible");
    setCardVisibility("invisible");
  };

  return (
    <div
      className={`border border-blue-500 rounded-lg p-4 text-center bg-blue-100 mx-auto fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${cardZIndex} ${cardVisibility}`}
    >
      <h2 className="text-blue-500 text-lg font-bold">Tempo Esgotado!</h2>
      <button
        className="bg-blue-500 text-white rounded px-4 py-2 mt-4 hover:bg-blue-600 cursor-pointer transition"
        onClick={handleZIndex}
      >
        OK
      </button>
    </div>
  );
}
export default AlertCard;
