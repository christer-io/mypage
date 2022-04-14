import Link from "next/link"


function Banner() {
  return (
    <div className="flex justify-between items-center text-white bg-darkblue border-y border-black py-10 lg:py-0 rounded-lg">
    <div className="px-10 space-y-5">
      <h1 className="text-4xl sm:text-6xl max-w-xl font-sans">
        <span className="decoration-4 text-blue">How can the concept
        </span>{" "} 
        of Open change the world?</h1>
        <h2 className="text-lightgray">
         I belive that open is a mindset, a philosofy and metodology that has the power to change the world.
        </h2>
    </div>
    <div>
      <img className="hidden md:inline-flex lg:h-full"
      src="https://oer.dev/wp-content/uploads/2022/04/oie_DplN5KGHctr2.png" alt="" />
    </div>
  </div>
  )
}

export default Banner