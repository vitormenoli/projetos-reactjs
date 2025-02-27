import { useState } from "react";
import "./Modal.css";

function Modal({ modalOn, setModalOn, laps, setLaps }) {
  const [text, setText] = useState('Deseja salvar as voltas marcadas?')

  const [showButtons, setShowButtons] = useState(true)

  function onPositive() {
    localStorage.setItem('cronometro', JSON.stringify({ laps }) )
    setText('As voltas foram salvas com sucesso!')
    setShowButtons(false)
  }

  function onNegative() {
      setModalOn(false)
      setLaps([])
    }
    
  function onBack() {
    setModalOn(false)
    setShowButtons(true)
    setText('Deseja salvar as voltas marcadas?')
    setLaps([])
  }

  return (
    <>
      <div className={`
        backdrop ${modalOn ? 'displayBlock' : ''}
        `}
        ></div>
      <div className={`
        container-modal ${modalOn ? 'displayBlock' : ''}
        `}>
        <p>{text}</p>

        {!showButtons ? (
            <button className="back"
            onClick={onBack}
          >Voltar</button>
        ) : ''}

        {showButtons && <div className="buttons">

          <button className="positive"
            onClick={onPositive}
          >Sim</button>
          <button className="negative"
            onClick={onNegative}
          >Não</button>
        </div>}
      </div>
    </>
  );
}

export default Modal;
