import Button from "./Button";
import Chart from "./Chart";
import "./ImcTable.css";

function ImcTable({ data, imc, info, infoClass, resetCalc }) {
  return (
    <div id="result-container">
      <div className="result-table">
        <p id="imc-number">
          Seu IMC: <span className={infoClass}>{imc}</span>
        </p>
        <p id="imc-info">
          Situação atual: <span className={infoClass}>{info}</span>
        </p>
        <h3>Confira as classificações</h3>
        <div id="imc-table">
          <div className="table-header">
            <h4>IMC</h4>
            <h4>Classificação</h4>
            <h4>Obesidade</h4>
          </div>
          {data.map((item) => {
            const isHighlighted = imc >= item.min && imc <= item.max;

            return (
              <div
                key={item.info}
                className={`table-data ${isHighlighted ? item.infoClass : ""}`}
              >
                <p>{item.classification}</p>
                <p>{item.info}</p>
                <p>{item.obesity}</p>
              </div>
            );
          })}
        </div>
      </div>

      <Chart imc={imc} />

      <Button id="back-btn" text="Voltar" action={resetCalc} />
    </div>
  );
}

export default ImcTable;