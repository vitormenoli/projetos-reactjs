import { ClimaInfo } from "./ClimaAtualStyles"

function ClimaAtual({ clima }) {
  return (
    <ClimaInfo>
        <h3>{clima.name}</h3>
        <img
          src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`}
          alt={clima.weather[0].description}
        />
        <p>{Math.floor(clima.main.temp) + 1}°C</p>
        <p>{clima.weather[0].description.toUpperCase()}</p>
    </ClimaInfo>
  )
}

export default ClimaAtual