import Controllers from "./components/Controllers";
import Audio from "./components/Audio";

function App() {
  return (
    <>
      <div className="grid grid-cols-[minmax(200px,_300px)_minmax(300px,_1fr)] h-screen p-4 grid-rows-[auto_200px] gap-3">

        <div className="bg-[#1A1A1A] rounded-md shadow-lg p-3">
          <Audio/>
        </div>

        <div className="bg-[#1A1A1A] rounded-md shadow-lg text-lg overflow-hidden">
          <textarea
            className="bg-inherit resize-none w-full h-full outline-none p-3 overflow-y-auto">
          </textarea>
        </div>

        <div className="bg-[#1A1A1A] rounded-md shadow-lg col-span-2 p-3">
          <Controllers />
        </div>
      </div>
    </>
  )
}

export default App
