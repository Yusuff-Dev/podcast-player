function App() {
  return (
    <>
      <div className="grid grid-cols-[minmax(100px,_300px)_1fr] h-screen p-4 grid-rows-[auto_200px] gap-3">
        <div className="bg-[#1A1A1A] rounded-md shadow-lg">1</div>
        <div className="bg-[#1A1A1A] rounded-md shadow-lg">2</div>

        <div className="bg-[#1A1A1A] rounded-md shadow-lg col-span-2 p-3">
          <div className="grid md:grid-cols-[minmax(100px,_300px)_1fr] gap-4">
            <div className="flex items-center gap-1 justify-between">
              <label className="form-control w-full max-w-[120px]">
                <input type="text" placeholder="Start Time" className="input input-bordered w-full" />
              </label>
              <label className="form-control w-full max-w-[120px]">
                <input type="text" placeholder="End Time" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span>00:00</span>
              <progress className="progress w-full rounded-full" value="10" max="100"></progress>
              <span>00:00</span>
            </div>
          </div>
          
          <div className="border mt-2">2</div>
        </div>
      </div>
    </>
  )
}

export default App
