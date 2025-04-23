import PomodoroTimer from "./components/PomodoroTimer"

function App() {

  return (
    <div className="text-center text-xl mt-4 ">
      <p className="text-4xl mb-10 font-bold uppercase sm:text-6xl">Pomodoro ⏳</p>
      <PomodoroTimer />
    </div>
  )
}

export default App