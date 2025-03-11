import { useState } from "react"
import formattedDate from "../hooks/formattedDate"
import { Data, PrevisaoContainer, Temperatura, Clima, PrevisaoInfos, FiltrosContainer, VerMais } from "./PrevisaoStyles"

function Previsao({ previsoes, handleVerMais, buttonName }) {

  const [data, setData] = useState(true)
  const [temperatura, setTemperatura] = useState(true)
  const [clima, setClima] = useState(true)


  const handleData = () => {
    if (!temperatura && !clima) return
    setData(!data)
  }

  const handleTemperatura = () => {
    if (!clima && !data) return
    setTemperatura(!temperatura)
  }

  const handleClima = () => {
    if (!data && !temperatura) return
    setClima(!clima)
  }

  

  return (
    <PrevisaoContainer>
        <h4>Previsão para as próximas horas</h4>

        <FiltrosContainer>
        <p>Filtros</p>

        <PrevisaoInfos>
          <Data onClick={handleData}>Data</Data>
          <Temperatura onClick={handleTemperatura}>Temperatura</Temperatura>
          <Clima onClick={handleClima}>Clima</Clima>
        </PrevisaoInfos>

        </FiltrosContainer>

        <ul>
          {previsoes.map((previsao) => (
            <li key={previsao.dt}>
              <img
                src={`http://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`}
                alt="img"
              />
              {data && <Data>{formattedDate(previsao.dt_txt)}</Data>}
              {temperatura && <Temperatura>{Math.floor(previsao.main.temp) + 1}°C</Temperatura>}
              {clima && <Clima>{previsao.weather[0].description}</Clima>}
            </li>
          ))}
        </ul>

        <VerMais>
          <button
            onClick={handleVerMais}
          >{buttonName}</button>
        </VerMais>
    </PrevisaoContainer>
  )
}

export default Previsao