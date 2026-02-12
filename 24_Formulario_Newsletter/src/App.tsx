import Form from "./components/Form";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen w-full flex flex-col items-center justify-center px-4">
      <h1 className="font-bold text-[2rem] text-white text-center">
        Inscreva-se
      </h1>
      <p className="text-white text-center">
        Assine nossa Newsletter e mantenha-se informado
      </p>

      <div className="w-full max-w-md mt-4 bg-stone-200 px-4 py-5 rounded-lg">
        <Form />
      </div>

      <p className="text-slate-100 text-xs w-full max-w-md mt-2 text-center">
        Ao se inscrever, você passará a receber nossas atualizações e novidades
        diretamente no seu e-mail.
      </p>
    </div>
  );
}

export default App;
