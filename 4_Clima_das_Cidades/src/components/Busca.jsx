import { BotaoBuscar, BuscaCidade, BuscarContainer } from './BuscaStyles'

function Busca({ cidade, setCidade, buscarClima }) {
  return (
    <BuscarContainer>
        <BuscaCidade
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            placeholder="Digite uma cidade"
        />
        <BotaoBuscar
            onClick={buscarClima}
        >Buscar</BotaoBuscar>
    </BuscarContainer>
  )
}

export default Busca