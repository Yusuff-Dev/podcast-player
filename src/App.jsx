import Controllers from "./components/Controllers";

function App() {
  return (
    <>
      <div className="grid grid-cols-1 h-screen p-4 grid-rows-[auto_200px] gap-3">
        <div className="bg-[#1A1A1A] rounded-md shadow-lg text-lg overflow-hidden w-full">
          <textarea
            placeholder="Please drag and drop your text here!!!"
            className="bg-inherit resize-none w-full md:w-1/2 mx-auto block h-full outline-none p-3 overflow-y-auto">
          </textarea>
        </div>

        <div className="bg-[#1A1A1A] rounded-md shadow-lg p-3">
          <Controllers />
        </div>
      </div>
    </>
  )
}

export default App
