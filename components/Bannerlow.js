import Link from "next/link"


function Bannerlow() {
  return (
  <div className="text-center">
    
    <div className="flex justify-between mt-10 mb-10 items-center text-darkdarkblue border-black py-10 lg:py-0">
      <h1 className="text-4xl max-w-xl font-serif text-center mx-auto">
        <span className="decoration-4 ">Open source is <span className="text-blue">a development methodology</span> and a social movement!
        </span>{" "} 
      </h1> 
    </div>
    <div className=" mt-10 mb-10 ">
      <button className="bg-wihte text-darkblue border border-darkblue font-bold py-2 px-4 rounded inline-flex items-center">
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        <span>Download introduction</span>
      </button>
    </div>
  </div>
  
  )
}

export default Bannerlow