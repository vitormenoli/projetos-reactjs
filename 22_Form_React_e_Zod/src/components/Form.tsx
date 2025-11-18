import { useState } from "react";
import { useForms } from "../hooks/useForms";
import type { FormSchema } from "../schemas/formSchema";
import Result from "./Result";

function Form() {
  const { register, handleSubmit, errors } = useForms();
  const [result, setResult] = useState<FormSchema | null>(null);

  const onSubmit = (data: FormSchema) => {
    console.log(data);

    setResult(data);
  };

  return (
    <>
      {!result && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md bg-white p-4 rounded-md border border-slate-300"
        >
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              placeholder="Digite seu nome"
              {...register("name")}
              className="w-full max-w-full h-10 pl-2 rounded-md border border-slate-300 overflow-x-auto"
            />
            {errors.name && (
              <small className="text-red-600 italic">
                {errors.name.message}
              </small>
            )}
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="lastname">Sobrenome:</label>
            <input
              type="text"
              id="lastname"
              placeholder="Digite seu sobrenome"
              {...register("lastname")}
              className="w-full max-w-full h-10 pl-2 rounded-md border border-slate-300 overflow-x-auto"
            />
            {errors.lastname && (
              <small className="text-red-600 italic">
                {errors.lastname.message}
              </small>
            )}
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="gender">Gênero:</label>
            <select
              id="gender"
              {...register("gender")}
              className="w-full max-w-full h-10 pl-1 rounded-md border border-slate-300"
            >
              <option value="select">Selecione</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Prefiro não informar">Prefiro não informar</option>
            </select>
            {errors.gender && (
              <small className="text-red-600 italic">
                {errors.gender.message}
              </small>
            )}
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
              {...register("email")}
              className="w-full max-w-full h-10 pl-2 rounded-md border border-slate-300 overflow-x-auto"
            />
            {errors.email && (
              <small className="text-red-600 italic">
                {errors.email.message}
              </small>
            )}
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              {...register("password")}
              className="w-full max-w-full h-10 pl-2 rounded-md border border-slate-300 overflow-x-auto"
            />
            {errors.password && (
              <small className="text-red-600 italic">
                {errors.password.message}
              </small>
            )}
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="confirmpassword">Confirme sua senha:</label>
            <input
              type="password"
              id="confirmpassword"
              placeholder="Confirme sua senha"
              {...register("confirmpassword")}
              className="w-full max-w-full h-10 pl-2 rounded-md border border-slate-300 overflow-x-auto"
            />
            {errors.confirmpassword && (
              <small className="text-red-600 italic">
                {errors.confirmpassword.message}
              </small>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex flex-row gap-2 items-center">
              <input
                type="checkbox"
                id="agree"
                {...register("agree")}
                className="h-10 pl-2 rounded-md border border-slate-300"
              />
              <label htmlFor="agree">Concordo com os termos.</label>
            </div>
            {errors.agree && (
              <small className="text-red-600 italic">
                {errors.agree.message}
              </small>
            )}
          </div>
          <button
            type="submit"
            className="w-full h-11 bg-cyan-400 rounded-md my-2 hover:bg-cyan-500 transition-all cursor-pointer"
          >
            Cadastrar
          </button>
        </form>
      )}

      {result && <Result {...result} />}
    </>
  );
}

export default Form;
