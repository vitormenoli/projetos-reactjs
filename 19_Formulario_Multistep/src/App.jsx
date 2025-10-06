import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForms from "./components/UserForms";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import { useForm } from "./hooks/useForm";

import Steps from "./components/Steps";

import "./App.css";
import { useState } from "react";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);

  const [sended, setSended] = useState(false);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formsComponents = [
    <UserForms data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} sended={sended} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formsComponents);

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={`app ${sended ? "success" : ""}`}>
      <div className="header">
        {!sended ? (
          <div>
            <h2>Deixe sua avaliação</h2>
            <p>
              Ficamos felizes com a sua compra, utilize o formulário abaixo para
              a valiar o produto
            </p>
          </div>
        ) : (
          <div>
            <h2>Avaliação Enviada!</h2>
            <p>
              Muito obrigado por responder a nossa pesquisa, sua opinião é muito importante para nós.
            </p>
          </div>          
        )}
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && !sended && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}

            {!isLastStep && !sended ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              !sended && (
                <button type="button" onClick={() => setSended(true)}>
                  <span>Enviar</span>
                  <FiSend />
                </button>
              )
            )}

            {sended && (
                <button type="button" onClick={reloadPage}>
                  Enviar outro
                </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
