import { FormEvent, useState } from "react";
import { User } from "../types/user";
import { validate } from "../utils/validate";

function Form() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [agree, setAgree] = useState<boolean>(false);

  const [errors, setErrors] = useState<User | null>(null);

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrors(null);

    const data: User = { name, email, agree };

    const validateErrors = validate(data);

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      {submitted ? (
        <p className="font-bold text-center text-green-500">
          Obrigado por se inscrever na nossa Newsletter!
        </p>
      ) : null}
      <div className="flex flex-col gap-1 mb-4">
        <label htmlFor="">Nome</label>
        <input
          type="text"
          placeholder="Digite o seu nome"
          className={`border rounded p-1 ${submitted ? "cursor-not-allowed" : ""}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={submitted}
        />
        {errors?.name && <small className="text-red-500">{errors.name}</small>}
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <label htmlFor="" className="">
          Email
        </label>
        <input
          type="email"
          placeholder="Digite o seu email"
          className={`border rounded p-1 ${submitted ? "cursor-not-allowed" : ""}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={submitted}
        />
        {errors?.email && (
          <small className="text-red-500">{errors.email}</small>
        )}
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <a href="#" className="underline text-[.8rem]">
          Leia os termos
        </a>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className={`${submitted ? "cursor-not-allowed" : "cursor-pointer"}`}
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            disabled={submitted}
          />
          <label htmlFor="">Concordo com os termos</label>
        </div>
        {errors?.agree && (
          <small className="text-red-500">{errors.agree}</small>
        )}
      </div>

      {submitted ? (
        <button
          className={`bg-yellow-400 text-white hover:text-shadow-white  py-1 px-4 rounded hover:bg-yellow-300 transition-colors duration-300 cursor-pointer`}
          onClick={() => window.location.reload()}
        >
          Cadastrar novamente!
        </button>
      ) : (
        <button
          className={`bg-green-400 text-white hover:text-shadow-white py-1 px-4 rounded hover:bg-green-300 transition-colors duration-300 cursor-pointer`}
          disabled={submitted}
        >
          Cadastrar!
        </button>
      )}
    </form>
  );
}

export default Form;
