function ImageUpload({ setImage, largura, setLargura, isCentralized, setIsCentralized }) {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  return (
    <>
      <p className="titleConfig">Configurações da Imagem</p>
      <div className="imageUpload bg-gray">
        <label className="configLabel" id="arquivoContainer">
          <p>Arquivo: </p>

          <input
            type="file"
            accept="image/*"
            className="fileInput"
            onChange={handleImageUpload}
          />
        </label>

        <label className="configLabel">
          <p>Largura:</p>
          <div>
            <label>
              <input
                type="radio"
                value="P"
                checked={largura === "P"}
                onChange={(e) => setLargura(e.target.value)}
              />
              P
            </label>

            <label>
              <input
                type="radio"
                value="M"
                checked={largura === "M"}
                onChange={(e) => setLargura(e.target.value)}
              />
              M
            </label>

            <label>
              <input
                type="radio"
                value="G"
                checked={largura === "G"}
                onChange={(e) => setLargura(e.target.value)}
              />
              G
            </label>
          </div>
        </label>

        <label className="configLabel">
          <p>Centralizar:</p>
          <input
            type="checkbox"
            value={isCentralized}
            onChange={(e) => setIsCentralized(e.target.checked)}
          />
        </label>
      </div>
    </>
  );
}

export default ImageUpload;
