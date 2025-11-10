import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import "./App.css";
import UserForm from "./components/UserForm";
import { useForm } from "./hooks/useForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";
import { useState } from "react";
import { FiSend } from "react-icons/fi";

type FormFields = {
  name: string;
  email: string;
  review: string;
  comment: string;
};

const formtemplate: FormFields = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formtemplate);

  const updateFieldHandler = (key: string, value: string) => {
    setData((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />,
  ];

  const { changeStep, currentComponent, currentStep, isLastStep } =
    useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilizze o formulário abaixo para
          avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="submit" onClick={() => {
                alert('Avaliação enviada, obrigado!')
                window.location.reload()
              }}>
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
