import Link from "next/link"


function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
            <Link href="/">
                <h1 className="text-3xl cursor-pointer font-sans font-bold text-blue">Obi<span className="text-darkblue">One.io</span></h1>
            </Link>
            
        </div>
        
        <div className="hidden md:inline-flex items-center space-x-5 text-darkdarkblue" >
            <h2 className="border px-4 py-1 rounded-full cursor-pointer border-darkdarkblue">Open Education</h2>
            <h2 className="border px-4 py-1 rounded-full cursor-pointer border-darkdarkblue"><a href="/post/open-source">Open Source</a></h2>  
        </div>
        <div className="inline-flex text-xs items-center space-x-5 text-darkdarkblue md:hidden" >
            <h2 className="border px-4 py-1 rounded-full cursor-pointer border-darkdarkblue">OER</h2>
            <h2 className="border px-4 py-1 rounded-full cursor-pointer border-darkdarkblue"><a href="/post/open-source">OSS</a></h2>  
        </div>
        
    </header>
  )
}

export default Header