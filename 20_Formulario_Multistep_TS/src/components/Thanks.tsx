import {
  BsFillEmojiFrownFill,
  BsFillEmojiHeartEyesFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
} from "react-icons/bs";

import "./Thanks.css";
import { type ReactElement } from "react";

type ThanksProps = {
  data: {
    name: string;
    review: string;
    comment: string;
  };
};

type emojiObbject = {
  unsatisfied: ReactElement;
  neutral: ReactElement;
  satisfied: ReactElement;
  very_satisfied: ReactElement;
};

const emojiData: emojiObbject = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

function Thanks({ data }: ThanksProps) {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom de 10%
        de desconto para a sua próxima compra!
      </p>
      <p>Para concluir a avaliação clique no botão de Enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação {data.name}:</h3>
      <p className="review-data">
        <span>Satisfação com o produto: {emojiData[data.review as keyof typeof emojiData]}</span>
      </p>
      <p className="review-data">
        <span>Comentário: </span> {data.comment}
      </p>
    </div>
  );
}

export default Thanks;
