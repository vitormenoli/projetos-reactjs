import { useState } from "react";
import "./CurrencyConverter.css";
import { useEffect } from "react";
import axios from "axios";

function CurrencyConverter() {
  const [rates, setRates] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://v6.exchangerate-api.com/v6/3aff8a778d333061c76769e5/latest/USD"
      )
      .then((response) => {
        setRates(response.data.conversion_rates);
      })
      .catch((e) => {
        console.log("Ocorreu um erro: ", e);
      });
  }, []);

  useEffect(() => {
    if (rates) {
      const rateFrom = rates[fromCurrency] || 0;
      const rateTo = rates[toCurrency] || 0;
      setConvertedAmount(((amount / rateFrom) * rateTo).toFixed(2));
    }
  }, [amount, rates, fromCurrency, toCurrency]);

  if (!rates) {
    return <></>;
  }

  return (
    <div className="converter">
      <h2>Conversor de Moedas</h2>
      <input
        type="number"
        placeholder="Digite o valor..."
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        min={0}
      />
      <p>Converter moedas</p>
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
        id="currency"
      >
        {Object.keys(rates).map((currency) => (
          <option
            value={currency}
            key={currency}
            disabled={currency === toCurrency}
          >
            {currency}
          </option>
        ))}
      </select>
      <p>para moedas</p>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        id="toCurrency"
      >
        {Object.keys(rates).map((currency) => (
          <option
            value={currency}
            key={currency}
            disabled={currency === fromCurrency}
          >
            {currency}
          </option>
        ))}
      </select>

      <div className="results">
        <h3>
          <span>{convertedAmount} {toCurrency}</span>
        </h3>
        <p>
          <span id="fromCurrency">{amount} {fromCurrency}</span> valem <span id="toCurrency">{convertedAmount} {toCurrency}</span>
        </p>
      </div>
    </div>
  );
}

export default CurrencyConverter;
