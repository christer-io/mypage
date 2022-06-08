import Link from "next/link"
import StandardButton from "./StandardButton"


function Banner({ part1, part2, subtext }) {
  return (
  <div className=" text-blue text-left pt-10 pb-10">
    <div className="px-10 space-y-5 ">
      <h1 className="text-5xl sm:text-7xl xl:text-8xl font-sans">
        <span className="decoration-4 text-darkdarkblue "> {part1} 
        </span>{" "} {part2}</h1>
        <h2 className="text-darkdarkblue text-left ">
         {subtext}
        </h2>
        <div className="flex justify-left space-x-3 pt-5 pb-5">
          <StandardButton buttontext="Open source" />
          <StandardButton buttontext="Open policy" />  
        </div>
      
    </div> 
  </div>
  )
}

export default Banner


  