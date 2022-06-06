import Link from "next/link"


function Banner() {
  return (
    <div className=" text-blue text-center pt-10 pb-10">
    <div className="px-10 space-y-5 ">
      <h1 className="text-5xl sm:text-7xl xl:text-8xl font-sans">
        <span className="decoration-4 text-darkdarkblue ">Open source is a methodology 
        </span>{" "} and a social movement!</h1>
        <h2 className="text-darkdarkblue pl-10 pr-10">
         With an open philosofy and metodology we can solve the global grand challanges in more effective, transparent and democratic ways.
        </h2>
        <div className="space-x-3 space-y-2 pt-5 pb-5">
          <button class="bg-blue-500 bg-white text-darkblue border border-darkblue font-bold py-2 px-4 rounded inline-flex items-center">
            Open source
          </button>
          <button class="bg-blue-500 bg-white text-darkblue border border-darkblue font-bold py-2 px-4 rounded inline-flex items-center">
            Open policy
          </button>
        </div>
      
    </div>
    
  </div>
  )
}

export default Banner


  