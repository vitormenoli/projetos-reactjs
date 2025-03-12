import { useState } from "react"
import Citacao from "./components/Citacao"
import citacoes from "./data"

function App() {
  const [indice, setIndice] = useState(0)

  const proximaCitacao = () => {
    setIndice((indiceAtual) => (indiceAtual + 1) % citacoes.length)
  }

  return (
    <div
      className="container mt-5 d-flex flex-column ai-center align-items-center justify-content-center bg-secondary rounded-5"
    >
      <h1>Citações</h1>
      <button
        className="btn btn-warning mt-2 fw-bold"
        onClick={proximaCitacao}
      >Próxima citação</button>
      <Citacao
        texto={citacoes[indice].texto}
        autor={citacoes[indice].autor}
      />
    </div>
  )
}

export default App
