import Link from "next/link"


function Banner() {
  return (
    <div className="flex justify-between items-center text-blue py-10 md: lg:py-0 rounded-lg">
    <div className="px-10 space-y-5">
      <h1 className="text-4xl sm:text-6xl max-w-xl font-sans">
        <span className="decoration-4 text-darkdarkblue">Open source is a methodology 
        </span>{" "} and a social movement!</h1>
        <h2 className="text-darkdarkblue">
         By embracing an open mindset, philosofy and metodology we can solve the global grand challanges in more transparent and democratic ways.
        </h2>
        
    </div>
    <div>
      <img className="hidden md:inline-flex lg:h-full"
      src="https://digitallibrary.io/wp-content/uploads/2022/04/oie_nsXBWoaz29tb.png" alt="" />
    </div>
  </div>
  )
}

export default Banner


  