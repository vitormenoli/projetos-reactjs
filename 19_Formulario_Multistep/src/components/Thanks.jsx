import "./Thanks.css";
import {
  BsFillEmojiFrownFill,
  BsFillEmojiHeartEyesFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
} from "react-icons/bs";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

function Thanks({ data, sended }) {
  return (
    <div className="thanks-container">
      {!sended ? (
        <div>
          <h2>Falta pouco...</h2>
          <p>
            A sua opinião é muito importante, em breve você receberá um cupom de
            10% de desconto para a sua próxima compra!
          </p>
          <p>Para concluir a avaliação clique no botão de Enviar abaixo.</p>
        </div>
      ) : (
        <div>
          <h2>Avaliação Enviada!</h2>
          <p>
            Muito obrigado por responder a nossa pesquisa, sua opinião é muito
            importante para nós.
          </p>
        </div>
      )}

      <h3>Aqui está o resumo da sua avaliação {data.name}:</h3>
      <p className="review-data">
        <span>Satisfação com o produto:</span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comentário:</span>
        {" " + data.comment}
      </p>
    </div>
  );
}

export default Thanks;
