import { useState } from "react";

function Result({
  name,
  lastname,
  gender,
  email,
  password,
}: {
  name: string;
  lastname: string;
  gender: string;
  email: string;
  password: string;
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col gap-5 p-4 my-4 bg-white rounded-md shadow-md w-full max-w-md border border-slate-300">
      <h2 className="text-2xl text-center bg-yellow-300 p-2 rounded-md">
        Cadastro realizado!
      </h2>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-1 gap-2">
          <div className="flex gap-2 items-start p-2 bg-slate-50 rounded-md min-w-0">
            <p className="text-sm text-slate-600 shrink-0">Nome:</p>
            <span className="font-medium text-slate-800 flex-1 min-w-0 wrap-break-word whitespace-normal">{name}</span>
          </div>

          <div className="flex gap-2 items-start p-2 bg-slate-50 rounded-md min-w-0">
            <p className="text-sm text-slate-600 shrink-0">Sobrenome:</p>
            <span className="font-medium text-slate-800 flex-1 min-w-0 wrap-break-word whitespace-normal">{lastname}</span>
          </div>

          <div className="flex gap-2 items-start p-2 bg-slate-50 rounded-md min-w-0">
            <p className="text-sm text-slate-600 shrink-0">Gênero:</p>
            <span className="font-medium text-slate-800 flex-1 min-w-0 wrap-break-word whitespace-normal">{gender}</span>
          </div>

          <div className="flex gap-2 items-start p-2 bg-slate-50 rounded-md min-w-0">
            <p className="text-sm text-slate-600 shrink-0">Email:</p>
            <span className="font-medium text-slate-800 flex-1 min-w-0 wrap-break-word whitespace-normal">{email}</span>
          </div>


          <div className="flex gap-2 items-start p-2 bg-slate-50 rounded-md min-w-0">
            <p className="text-sm text-slate-600 shrink-0">Senha:</p>

            <div className="flex items-center flex-row justify-between w-full min-w-0">
              <span className="font-medium text-slate-800 flex-1 min-w-0 wrap-break-word whitespace-normal">
                {showPassword
                  ? password
                  : password
                  ? "•".repeat(password.length)
                  : "•".repeat(6)}
              </span>

              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                className="flex items-center justify-center w-8 h-8 rounded hover:bg-slate-100 cursor-pointer text-slate-600"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.965 9.965 0 012.223-3.327M6.18 6.18A9.965 9.965 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.97 9.97 0 01-4.166 5.257M3 3l18 18"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="w-full h-11 bg-yellow-300 rounded-md my-2 hover:bg-yellow-400 transition-all cursor-pointer"
        onClick={() => window.location.reload()}
      >
        Cadastrar novamente
      </button>
    </div>
  );
}

export default Result;
