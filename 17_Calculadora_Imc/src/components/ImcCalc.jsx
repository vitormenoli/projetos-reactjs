import { useState } from "react";
import Button from "./Button";
import "./ImcCalc.css";
import { data } from "../data/data";

function ImcCalc({ calcImc }) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [showModal, setShowModal] = useState(false);

  const clearForm = (e) => {
    e.preventDefault();
    setHeight("");
    setWeight("");
  };

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  };

  const handleHeightChange = (e) => {
    const updatedValue = validDigits(e.target.value);
    setHeight(updatedValue);
  };

  const handleWeightChange = (e) => {
    const updatedValue = validDigits(e.target.value);
    setWeight(updatedValue);
  };

  const toggleModal = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura (m):</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo: 1,75"
              onChange={(e) => handleHeightChange(e)}
              value={height}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Peso (kg):</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="Exemplo: 70,5"
              onChange={(e) => handleWeightChange(e)}
              value={weight}
              required
            />
          </div>
        </div>
        <div className="action-control">
          <Button
            id="calc-btn"
            text="Calcular"
            action={(e) => calcImc(e, height, weight)}
          />
          <Button id="clear-btn" text="Limpar" action={clearForm} />
          <Button id="imc-btn" text="O que é IMC?" action={toggleModal} />
        </div>
      </form>

      {showModal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>O que é IMC?</h3>
            <p>
              O Índice de Massa Corporal (IMC) é uma medida que avalia se uma
              pessoa está no peso ideal em relação à sua altura. Ele é
              calculado dividindo o peso (em kg) pela altura ao quadrado (em
              metros).
            </p>
            <h4>Classificações:</h4>
            <div id="imc-table">
              <div className="table-header">
                <h4>IMC</h4>
                <h4>Classificação</h4>
                <h4>Obesidade</h4>
              </div>
              {data.map((item) => (
                <div key={item.info} className="table-data">
                  <p>{item.classification}</p>
                  <p>{item.info}</p>
                  <p>{item.obesity}</p>
                </div>
              ))}
            </div>
            <Button id="close-btn" text="Fechar" action={toggleModal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImcCalc;