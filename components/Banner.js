import Link from "next/link"
import StandardButton from "./StandardButton"


function Banner({ part1, part2, subtext }) {
  return (
  <div className=" text-blue text-center pt-10 pb-10">
    <div className="px-10 space-y-5 ">
      <h1 className="text-5xl sm:text-7xl xl:text-8xl font-sans">
        <span className="decoration-4 text-darkdarkblue "> {part1} 
        </span>{" "} {part2}</h1>
        <h2 className="text-darkdarkblue pl-10 pr-10">
         {subtext}
        </h2>
        <div className="flex justify-center space-x-3 pt-5 pb-5">
          <StandardButton buttontext="Open source" />
          <StandardButton buttontext="Open stands" />  
        </div>
      
    </div> 
  </div>
  )
}

export default Banner


  