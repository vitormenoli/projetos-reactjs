import { useEffect, useState } from 'react'
import axios from 'axios'
import Busca from './components/Busca'
import ClimaAtual from './components/ClimaAtual'
import Previsao from './components/Previsao'
import { ClimaContainer, Titulo } from './AppStyles'

function App() {
  const [cidade, setCidade] = useState('')
  const [clima, setClima] = useState(null)
  const [previsao, setPrevisao] = useState([])
  const [previsaoCompleta, setPrevisaoCompleta] = useState([])
  const [lenghtList, setLenghtList] = useState(5)
  const [buttonName, setButtonName] = useState('⬇ Ver Mais')

  const apiKey = import.meta.env.VITE_API_KEY || ''

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude
      const lon = position.coords.longitude
      try {
        const resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`)
        setCidade(resposta.data.name)

        console.log(resposta)

      } catch (error) {
        console.log('Erro na geolocalização: ', error)
      }
    })
  }, [apiKey])

  const buscarClima = async () => {
    if (!cidade || cidade.length < 3) return
    try {
      setLenghtList(5)
      const respostaClima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`)
      const respostaPrevisao = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`)

      setClima(respostaClima.data)
      setPrevisaoCompleta(respostaPrevisao.data.list)
      setPrevisao(respostaPrevisao.data.list.slice(0, 5))

    } catch (error) {
      console.log('Erro ao buscar clima: ', error)
      alert('Não foi possível obter resultados para: ' + cidade)
      setCidade('')
    }
  }

  useEffect(() => {
    if (previsaoCompleta.length) {
      setPrevisao(previsaoCompleta.slice(0, lenghtList))
    }
  }, [lenghtList, previsaoCompleta])

  const handleVerMais = () => {
    if (lenghtList >= 40) {
      setLenghtList(5)
      setButtonName('⬇ Ver Mais')
    } else {
      const novoLength = lenghtList + 5
      setLenghtList(novoLength)
      if (novoLength >= 36) {
        setButtonName('⬆ Ver Menos')
      }
    }
  }

  return (
    <ClimaContainer>
      <Titulo>Condições Climáticas</Titulo>
      <Busca
        cidade={cidade}
        setCidade={setCidade}
        buscarClima={buscarClima}
      />
      {clima && <ClimaAtual clima={clima} />}
      {previsao.length > 0 && (
        <Previsao
          previsoes={previsao}
          handleVerMais={handleVerMais}
          buttonName={buttonName}
        />
      )}
    </ClimaContainer>
  )
}

export default App
