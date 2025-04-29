import InfiniteScroll from "./components/InfiniteScroll"

function App() {
  return (
    <>
      <h1 id="inicio" className="text-3xl text-center m-5 font-bold px-5 py-2 bg-yellow-500 rounded-lg w-min mx-auto whitespace-nowrap">
        Infinite Scroll
      </h1>
      <InfiniteScroll />
    </>
  )
}

export default App
