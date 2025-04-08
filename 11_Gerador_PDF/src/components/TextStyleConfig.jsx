function TextStyleConfig({
  configName,
  fontSize,
  setFontSize,
  fontColor,
  setFontColor,
  isBold,
  setIsBold,
  isItalic,
  setIsItalic,
  justOrCenter,
  isJustify,
  setIsJustify
}) {
  return (
    <>
      <p className="titleConfig">Configurações do {configName}</p>
      <div className="textStyleConfig bg-gray">
        <label className="configLabel">
          <p>Tamanho:</p>
          <input
            type="number"
            min={1}
            max={32}
            className="input"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          />
        </label>
        <label className="configLabel">
          <p>Cor:</p>
          <input
            type="color"
            className="colorPicker"
            value={fontColor}
            onChange={(e) => setFontColor(e.target.value)}
          />
        </label>
        <label className="configLabel">
          <p>Negrito:</p>
          <input
            type="checkbox"
            value={isBold}
            checked={isBold}
            onChange={(e) => setIsBold(e.target.checked)}
          />
        </label>
        <label className="configLabel">
          <p>Itálico:</p>
          <input
            type="checkbox"
            value={isItalic}
            onChange={(e) => setIsItalic(e.target.checked)}
          />
        </label>
        <label className="configLabel">
          <p>{justOrCenter}:</p>
          <input
            type="checkbox"
            checked={justOrCenter === "Centralizar" || isJustify}
            value={isJustify}
            onChange={(e) => setIsJustify(e.target.checked)}
          />
        </label>
      </div>
    </>
  );
}

export default TextStyleConfig;
